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
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contractData = {
      walletAddress,
      cropType,
      quantity: parseFloat(quantity),
      deadline,
      phoneNumber, // Use correct field name
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
      alert("Contract created successfully!");
      router.push("/contracts");
    } else {
      alert("Failed to create contract");
    }
  };

  return (
    <Card className="max-w-lg mx-auto py-10 bg-white">
      <CardHeader>
        <CardTitle>Create a New Contract</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="walletAddress"> Wallet Address</Label>
            <Input
              id="walletAddress"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
              placeholder="Enter your wallet address"
              className="rounded-2xl"
            />
          </div>

          <div>
            <Label htmlFor="cropType">Crop Type</Label>
            <Input
              id="cropType"
              type="text"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              required
              placeholder="Enter crop type"
              className="rounded-2xl"
            />
          </div>

          <div>
            <Label htmlFor="quantity">Quantity (in kg)</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              placeholder="Enter quantity in kg"
              className="rounded-2xl"
            />
          </div>

          <div>
            <Label htmlFor="deadline">Delivery Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="rounded-2xl"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
              className="rounded-2xl"
            />
          </div>
          <div>
            <Label htmlFor="pricePerKg">Price Per Kg </Label>
            <Input
              id="pricePerKg"
              type="number"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              required
              placeholder="Enter price per kg"
              className="rounded-2xl"
            />
          </div>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-teal-200 text-black hover:bg-black hover:text-white rounded-2xl"
            >
              Create Contract
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
