import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import GithubProvider from "next-auth/providers/github";
import { User } from "next-auth"; // Import the User type from next-auth

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check for hardcoded credentials
        if (
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "admin"
        ) {
          // Allow login with hardcoded admin credentials
          const user: User = {
            id: "1",
            email: "admin@gmail.com",
            name: "Admin",
          };
          return user;
        }

        // Look up user in the database
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user && user.password === credentials?.password) {
          // Return the user if credentials match
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
          } as User;
        }

        // If no match, throw error
        throw new Error("Invalid credentials");
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};

// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "./prisma";
// import GithubProvider from "next-auth/providers/github";
// // import bcrypt from "bcryptjs";

// export const NEXT_AUTH = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any) {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });
//         if (user && user.password === credentials.password) {
//           return { id: user.id, email: user.email, name: user.name };
//         }

//         throw new Error("Invalid credentials");
//       },
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID || "",
//       clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/signin",
//   },
//   callbacks: {
//     jwt: async ({ token, user }: any) => {
//       if (user) {
//         token.uid = user.id;
//       }
//       return token;
//     },
//     session: ({ session, token }: any) => {
//       if (session.user) {
//         session.user.id = token.uid;
//       }
//       return session;
//     },
//   },
// };
