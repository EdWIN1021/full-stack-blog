import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`http://localhost:3000/api/signin`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          if (!response.ok) {
            const { error } = await response.json();
            throw new Error(error.message);
          }

          return await response.json();
        } catch (err) {
          throw err;
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
