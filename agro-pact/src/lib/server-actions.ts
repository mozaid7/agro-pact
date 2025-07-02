"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PublicContract {
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
      isNaN(contractData.quantity) ||
      !contractData.deadline ||
      !contractData.phoneNumber ||
      isNaN(contractData.pricePerKg) ||
      !contractData.userId
    ) {
      throw new Error("All fields are required and must be valid");
    }

    const contract = await prisma.contract.create({
      data: contractData,
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
  contracts: PublicContract[];
  message?: string;
}> {
  try {
    const contracts = await prisma.contract.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    const formattedContracts: PublicContract[] = contracts.map((contract) => ({
      id: contract.id,
      walletAddress: contract.walletAddress,
      cropType: contract.cropType,
      quantity: contract.quantity,
      deadline: contract.deadline.toISOString(),
      phoneNumber: contract.phoneNumber,
      pricePerKg: contract.pricePerKg,
      userId: contract.userId,
      createdAt: contract.createdAt.toISOString(),
    }));

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
