"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Contract {
  id: number;
  walletAddress: string;
  cropType: string;
  quantity: number;
  deadline: string; 
  phoneNumber: string;
  pricePerKg: number;
  userId: number;
  createdAt: string; 
}

export async function createContract(formData: FormData, userId: number) {
  try {
    const contractData = {
      walletAddress: formData.get("walletAddress") as string,
      cropType: formData.get("cropType") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      deadline: new Date(formData.get("deadline") as string),
      phoneNumber: formData.get("phoneNumber") as string,
      pricePerKg: parseFloat(formData.get("pricePerKg") as string),
      userId,
    };

    if (
      !contractData.walletAddress ||
      !contractData.cropType ||
      !contractData.quantity ||
      !contractData.deadline ||
      !contractData.phoneNumber ||
      !contractData.pricePerKg ||
      !contractData.userId
    ) {
      throw new Error("All fields are required");
    }

    const contract = await prisma.contract.create({
      data: {
        walletAddress: contractData.walletAddress,
        cropType: contractData.cropType,
        quantity: contractData.quantity,
        deadline: contractData.deadline,
        phoneNumber: contractData.phoneNumber,
        pricePerKg: contractData.pricePerKg,
        userId: contractData.userId,
      },
    });

    return {
      success: true,
      message: "Contract created successfully",
      contract,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating contract:", error);
    return { success: false, message: `Failed to create contract: ${message}` };
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserContracts(userId: number): Promise<{
  success: boolean;
  contracts: Contract[];
  message?: string;
}> {
  try {
    console.log("Fetching contracts for userId:", userId); 
    const contracts = await prisma.contract.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    const formattedContracts: Contract[] = contracts.map((contract) => ({
      ...contract,
      deadline: contract.deadline.toISOString(),
      createdAt: contract.createdAt.toISOString(),
    }));

    console.log("Contracts found:", formattedContracts); 
    return { success: true, contracts: formattedContracts };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching contracts:", error);
    return {
      success: false,
      contracts: [],
      message: `Failed to fetch contracts: ${message}`,
    };
  } finally {
    await prisma.$disconnect();
  }
}
