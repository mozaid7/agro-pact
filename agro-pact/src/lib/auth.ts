import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

export const NEXT_AUTH: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize called with credentials:", {
          email: credentials?.email,
          password: credentials?.password,
        });

        if (
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "admin"
        ) {
          console.log("Admin credentials matched");
          return { id: "1", email: "admin@gmail.com", name: "Admin" };
        }

        // Database user lookup
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        console.log(
          "Database user lookup:",
          user ? "User found" : "User not found"
        );

        if (user && credentials?.password) {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log("Password comparison result:", isValid);
          if (isValid) {
            return {
              id: user.id.toString(),
              email: user.email,
              name: user.name,
            };
          }
        }

        console.log("Invalid credentials");
        throw new Error("Invalid credentials");
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt", 
    maxAge: 30 * 24 * 60 * 60, 
    updateAge: 24 * 60 * 60, 
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, 
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", 
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60, 
      },
    },
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback:", { token, user }); 
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback:", { session, token }); 
      if (session.user) {
        session.user.id = token.uid as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development", 
};
