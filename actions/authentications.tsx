"use server"

import { signIn } from "@/auth"

interface LoginData {
    email: string,
    password: string
}
export async function LoginApi({email, password}:LoginData){
    try {
        await signIn("credentials",{
                redirect: false,
                email,
                password
        })
        return {
            ok: true
        }
    } catch {
        console.error("Error in Login")
        return {
            error: "Login error"
        }
    }
    
}