import NextAuth from "next-auth"
import {getUserById} from "./data/user"
import {PrismaAdapter} from '@auth/prisma-adapter'
import {db} from "./lib/db"
import authConfig from "./auth.config";

export const {handlers, auth, signIn, signOut} = NextAuth({
    ...authConfig,
    callbacks: {

        async signIn({user}) {
            if (!user.id) {
                return false
            }
            const existingUser = await getUserById(user.id);
            return !!existingUser
        },

        async session({session, token}) {
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

        async jwt({token}) {
            if (!token?.sub) {
                return token;
            }
            const user = await getUserById(token.sub);
            if (user) {
                token.name = user.username
            }
            return token;
        },
    },
    session: {strategy: 'jwt'},
    adapter: PrismaAdapter(db)
})
