import NextAuth from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { NEXT_AUTH } from "@/lib/auth";

const prisma = new PrismaClient();

const handler = NextAuth(NEXT_AUTH);
export { handler as GET, handler as POST };
