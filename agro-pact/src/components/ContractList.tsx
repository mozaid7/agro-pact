"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function ContractList() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const res = await fetch("/api/contracts");
        if (res.ok) {
          const data = await res.json();
          setContracts(data);
        } else {
          console.error("Failed to fetch contracts");
        }
      } catch (error) {
        console.error("Error fetching contracts:", error);
      }
    };

    fetchContracts();
  }, []);

  return (
    <Card className="max-w-xl mx-auto py-10 bg-white">
      <CardHeader>
        <CardTitle>Live Contracts </CardTitle>
      </CardHeader>
      <CardContent>
        {contracts.length === 0 ? (
          <p>No live contracts found</p>
        ) : (
          <div>
            <div>
              <ul className="space-y-4">
                {contracts.map((contract: any) => (
                  <div className="flex">
                    <div>
                      <Button className="bg-red-950 rounded-2xl text-white">
                        Sign
                      </Button>
                    </div>
                    <div>
                      <li key={contract.id} className="border p-4 rounded-xl">
                        <p>
                          <strong>Wallet Address:</strong>{" "}
                          {contract.walletAddress}
                        </p>
                        <p>
                          <strong>Crop Type:</strong> {contract.cropType}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {contract.quantity} kg
                        </p>
                        <p>
                          <strong>Deadline:</strong>{" "}
                          {new Date(contract.deadline).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Phone Number:</strong> {contract.phoneNumber}
                        </p>
                        <p>
                          <strong>Price Per Kg: ₹</strong> {contract.pricePerKg}
                        </p>
                      </li>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
