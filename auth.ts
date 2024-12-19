export const config = {
    runtime: "nodejs",
    };
    
    
    import NextAuth, { type DefaultSession } from "next-auth"
    import Credentials from "next-auth/providers/credentials"
    import { getUserByEmail, getUserById } from "./data/user"
    import bcrypt from 'bcryptjs'
    import { PrismaAdapter } from '@auth/prisma-adapter'
    import { db } from "./lib/db"
    import authConfig from "./auth.config";
    
    export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
    async signIn({ user }) {
    if (!user.id) {
    return false
    }
    
    const existingUser = await getUserById(user.id);
    return !!existingUser
    },
    
    async session({ session, token }) {
    
    if (token.sub && session.user) {
    session.user.id = token.sub
    }
    
    if (token.name && session.user) {
    session.user.name = token.name
    }
    
    if (token.picture && session.user) {
    session.user.image = token.picture
    }
    
    return session
    },
    
    async jwt({ token }) {
    if (!token?.sub) {
    return token;
    }
    
    const user = await getUserById(token.sub);
    s
    if (user) {
    token.name = user.username
    }
    
    console.log("TEST", token)
    
    return token;
    },
    },
    session: { strategy: 'jwt'},
    adapter: PrismaAdapter(db),
    ...authConfig
    })
    