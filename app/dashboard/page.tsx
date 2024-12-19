"use client"

import { signOut, useSession } from "next-auth/react"

const DashboardPage = () => {
    const { data: session } = useSession()
    console.log(session)

    const handleLogout = () => {

    }
    return (
        <div>
            <h1>This is dashboard page</h1>
            <p>{JSON.stringify(session?.user)}</p>
            <form
            action={async () => {
                await signOut()
            }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    )
}

export default DashboardPage