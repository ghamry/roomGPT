import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

export default NextAuth({
    providers: [GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
    }),],
    adapter: PrismaAdapter(prisma),
});
