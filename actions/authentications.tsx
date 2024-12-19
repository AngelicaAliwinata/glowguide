"use server"

import bcrypt  from 'bcryptjs';
import {getUserByEmail, getUserByUsername} from "@/data/user";
import {db} from "@/lib/db";
import {signIn} from "@/auth";
interface RegisterForm {
    email: string;
    username: string;
    password: string;
}

interface LoginForm {
    email: string;
    password: string;
}

export const register = async ({email, password, username} : RegisterForm) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser  = await getUserByEmail(email)
    const existingUsername  = await getUserByUsername(username)

    if (existingUser) {
        return {error: "Email already exists!"};
    }
    if (existingUsername) {
        return {error: "Username already exists!"};
    }

    // Create user
    await db.user.create({
        data: {
            email,
            username,
            password: hashedPassword,
        }
    });

    return {success: "User created!"};
}

export const login = async ({email, password} : LoginForm) => {
    const user = await getUserByEmail(email);
    if (!user) {
        return {error: "User not found!"};
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return {error: "Invalid password!"};
    }

    return await signIn("credentials", {
        email,
        password,
        redirect: false
    });
}