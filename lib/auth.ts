import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { createUser, getUser } from "@/utils/user";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
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
          const { data } = await response.json();
          return data.user;
        } catch (err) {
          throw err;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (
        !(account?.provider === "google" || account?.provider === "github") ||
        !user
      ) {
        return true;
      }

      try {
        const existingUser = await getUser(user.email!);
        if (!existingUser) {
          await createUser(user.email!, user.name!, user.image!);
        }
      } catch (err) {
        console.log(err);
        return false;
      }

      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
