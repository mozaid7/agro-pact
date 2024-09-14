// pages/api/contracts/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      walletAddress,
      cropType,
      quantity,
      deadline,
      phoneNumber,
      pricePerKg,
      userId,
    } = req.body;

    try {
      const contract = await prisma.contract.create({
        data: {
          walletAddress,
          cropType,
          quantity,
          deadline: new Date(deadline),
          phoneNumber,
          pricePerKg,
          userId,
        },
      });
      res.status(200).json(contract);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create contract" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
