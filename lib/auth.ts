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
          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/signin`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!response.ok) {
            const { error } = await response.json();
            throw new Error(error.message);
          }

          const data = await response.json();

          return data;
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
  pages: {
    signIn: "https://www.google.com",
  },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  // },

  secret: process.env.NEXTAUTH_SECRET,
};
