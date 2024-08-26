import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "john@mail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                });

                if (!existingUser) {
                    return null;
                }

                if(existingUser.password) {
                    const passwordMatch = await compare(credentials.password, existingUser.password);
                    if (!passwordMatch) {
                        return null;
                    }
                }
                

                return {
                    id: `${existingUser.id}`,
                    username: existingUser.username,
                    email: existingUser.email
                }

            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            return {
              ...token,
              id: user.id, // Include user ID in the JWT token
              username: user.username
            };
          }
          return token;
        },
        
        async session({ session, token }) {
          // Add user ID to the session
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id, // Add user ID to the session
              username: token.username
            }
          };
        },
      }
      
}