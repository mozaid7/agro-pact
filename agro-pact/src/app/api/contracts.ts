import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

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
    } = req.body;

    try {
      const contract = await prisma.contract.create({
        data: {
          walletAddress,
          cropType,
          quantity: parseFloat(quantity),
          deadline: new Date(deadline),
          phoneNumber, // Update here
          pricePerKg: parseFloat(pricePerKg),
          userId: req.body.userId,
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
