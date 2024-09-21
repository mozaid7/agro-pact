"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function ContractForm() {
  const [walletAddress, setWalletAddress] = useState("");
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [alertType, setAlertType] = useState<"success" | "error">(); // State for alert type
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contractData = {
      walletAddress,
      cropType,
      quantity: parseFloat(quantity),
      deadline,
      phoneNumber,
      pricePerKg: parseFloat(pricePerKg),
    };

    const res = await fetch("/api/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contractData),
    });

    if (res.ok) {
      setAlertMessage("Contract created successfully! Redirecting to home...");
      setAlertType("success");
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } else {
      const errorData = await res.json();
      setAlertMessage(`Failed to create contract: ${errorData.message}`);
      setAlertType("error");
    }
  };

  return (
    <Card className="max-w-lg mx-auto py-10 bg-white rounded-xl shadow-xl border border-gray-200">
      <CardHeader className="pb-6 text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Create a New Contract
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="walletAddress" className="text-gray-600">
              Wallet Address
            </Label>
            <Input
              id="walletAddress"
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
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              placeholder="Enter quantity in kg"
              className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
          </div>

          <div>
            <Label htmlFor="deadline" className="text-gray-600">
              Delivery Deadline
            </Label>
            <Input
              id="deadline"
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
              type="number"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              required
              placeholder="Enter price per kg"
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

          {/* Alert Box */}
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
