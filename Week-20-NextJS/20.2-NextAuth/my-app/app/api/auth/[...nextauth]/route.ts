import CredentialsProvider from "next-auth/providers/credentials"

import NextAuth from "next-auth"

const handler = NextAuth({
  providers:[
    CredentialsProvider({
        name: 'Email',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "harkirat@gmail.com" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            //db request to check if this username and password are correct
            const user = {
                id: "1",
                name: "Harkirat",
                email: "harkirat@gmail.com"
            }

            if(user)
            {
                return user;
            }
            else
            {
                return null;
            }
       
        }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }