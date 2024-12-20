"use client"
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession['user'] & {
    id: string
}

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser
    }
}