import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { ContractSchema } from "./contractSchema";

const prisma = new PrismaClient();

async function getUserIdFromSessionOrContext(
  req: NextRequest
): Promise<number> {
  return 1;
}
export async function GET(req: NextRequest) {
  try {
    const contracts = await prisma.contract.findMany();
    return NextResponse.json(contracts);
  } catch (error) {
    console.error("Error fetching contracts:", error);
    if (error instanceof Error) {
      console.error("Error fetching contracts:", error.message);
      return NextResponse.json(
        { message: "Failed to fetch contracts", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { message: "Failed to fetch contracts", error: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const deadline = new Date(data.deadline);

    const parsedData = ContractSchema.parse({
      ...data,
      deadline,
      userId: undefined,
    });

    const userId = await getUserIdFromSessionOrContext(req);

    const contract = await prisma.contract.create({
      data: {
        walletAddress: parsedData.walletAddress,
        cropType: parsedData.cropType,
        quantity: parsedData.quantity,
        deadline: parsedData.deadline,
        pricePerKg: parsedData.pricePerKg,
        userId: userId,
        phoneNumber: parsedData.phoneNumber,
      },
    });

    return NextResponse.json(contract);
  } catch (error) {
    console.error("Error creating contract:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to create contract", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Failed to create contract", error: "Unknown error" },
      { status: 500 }
    );
  }
}
