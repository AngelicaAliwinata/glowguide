import CredentialsProvider from "next-auth/providers/credentials";
import {getUserByEmail} from "./data/user";
import bcrypt from "bcryptjs";

export const authConfig = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"},
            },
            authorize: async (credentials) => {
                // Tambahkan validasi input
                if (!credentials || typeof credentials.email !== "string" || typeof credentials.password !== "string") {
                    console.error("Invalid credentials format:", credentials);
                    return null;
                }

                // Ambil user dari database
                const user = await getUserByEmail(credentials.email);

                // Periksa jika user ditemukan dan password cocok
                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    return {
                        id: String(user.id),
                        username: user.username,
                        email: user.email,
                    };
                }

                console.error("Invalid email or password for:", credentials.email);
                return null; // Jika tidak valid, return null
            },
        }),
    ],
    pages: {
        signIn: "/login", // Redirect ke halaman login jika gagal
    },
    secret: process.env.JWT_SECRET, // Tambahkan secret jika belum ada
} // Export config

export default authConfig;