"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { createContract } from "@/lib/server-actions";

export default function ContractForm() {
  const { data: session } = useSession();
  const [walletAddress, setWalletAddress] = useState("");
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const quantityNum = parseFloat(formData.get("quantity") as string);
    const pricePerKgNum = parseFloat(formData.get("pricePerKg") as string);
    const deadlineDate = formData.get("deadline") as string;

    if (isNaN(quantityNum) || quantityNum <= 0) {
      setAlertMessage("Quantity must be a positive number");
      setAlertType("error");
      return;
    }

    if (isNaN(pricePerKgNum) || pricePerKgNum <= 0) {
      setAlertMessage("Price per kg must be a positive number");
      setAlertType("error");
      return;
    }

    if (!deadlineDate || isNaN(new Date(deadlineDate).getTime())) {
      setAlertMessage("Please select a valid deadline");
      setAlertType("error");
      return;
    }

    if (!session?.user?.id) {
      setAlertMessage("You must be logged in to create a contract");
      setAlertType("error");
      return;
    }

    const result = await createContract(formData, parseInt(session.user.id));

    if (result.success) {
      setAlertMessage("Contract created successfully! Redirecting to home...");
      setAlertType("success");
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } else {
      setAlertMessage(result.message);
      setAlertType("error");
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">
          Please{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            sign in
          </a>{" "}
          to create a contract.
        </div>
      </div>
    );
  }

  return (
    <Card className="max-w-lg mx-auto py-10 bg-white rounded-xl shadow-xl border border-gray-200">
      <CardHeader className="pb-6 text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Create a New Contract
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="walletAddress" className="text-gray-600">
              Wallet Address
            </Label>
            <Input
              id="walletAddress"
              name="walletAddress"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
              placeholder="Enter your wallet address"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <div>
            <Label htmlFor="cropType" className="text-gray-600">
              Crop Type
            </Label>
            <Input
              id="cropType"
              name="cropType"
              type="text"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              required
              placeholder="Enter crop type"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <div>
            <Label htmlFor="quantity" className="text-gray-600">
              Quantity (in kg)
            </Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              placeholder="Enter quantity in kg"
              min="0.01"
              step="0.01"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <div>
            <Label htmlFor="deadline" className="text-gray-600">
              Delivery Deadline
            </Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-gray-600">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <div>
            <Label htmlFor="pricePerKg" className="text-gray-600">
              Price Per Kg
            </Label>
            <Input
              id="pricePerKg"
              name="pricePerKg"
              type="number"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              required
              placeholder="Enter price per kg"
              min="0.01"
              step="0.01"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-400 text-white font-semibold rounded-xl hover:from-teal-500 hover:to-blue-500 transition duration-200 shadow-md hover:shadow-lg"
            >
              Create Contract
            </Button>
          </CardFooter>
          {alertMessage && (
            <div
              className={`mt-4 p-4 rounded-xl text-white ${
                alertType === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {alertMessage}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
