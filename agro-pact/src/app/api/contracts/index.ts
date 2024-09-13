// pages/api/contracts/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const contracts = await prisma.contract.findMany();
      res.status(200).json(contracts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch contracts" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
