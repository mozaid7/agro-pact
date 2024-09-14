import { z } from "zod";

export const ContractSchema = z.object({
  walletAddress: z.string().min(1),
  cropType: z.string().min(1),
  quantity: z.number().positive(),
  deadline: z.date(),
  pricePerKg: z.number().positive(),
  phoneNumber: z.string().min(1),
});
