"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getUserContracts } from "@/lib/server-actions";

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
  updatedAt: string;
}

export default function ContractList() {
  const { data: session } = useSession();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchContracts = async () => {
      if (!session?.user?.id) {
        setError("You must be logged in to view contracts");
        return;
      }

      const result = await getUserContracts(parseInt(session.user.id));

      if (result.success) {
        // Explicitly cast to local Contract type to resolve type mismatch
        setContracts(result.contracts as Contract[]);
        setError("");
      } else {
        setError(result.message ?? "");
        console.error("Error fetching contracts:", result.message);
      }
    };

    fetchContracts();
  }, [session]);

  return (
    <div className="max-w-7xl mx-auto py-10 bg-[#e4efe6]">
      <div className="text-3xl font-bold my-4 font-serif">
        Contract MarketPlace
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <div className="bg-white rounded-full px-4 py-2 shadow-md">
            Rajasthan
          </div>
          <div className="bg-white rounded-full px-4 py-2 shadow-md">
            more than 200kg
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-green-200 text-green-900 rounded-full px-4 py-2">
            All
          </Button>
          <Button className="bg-green-200 text-green-900 rounded-full px-4 py-2">
            Open
          </Button>
        </div>
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {contracts.length === 0 && !error ? (
        <p className="text-center">No live contracts found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contracts.map((contract) => (
            <Card
              key={contract.id}
              className="border p-4 rounded-3xl shadow-md bg-white"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {contract.cropType.toUpperCase()}
                </CardTitle>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Contract open
                  </span>
                  <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full">
                    Seasonal
                  </span>
                </div>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="flex justify-between mb-2">
                  <span>CREATED</span>
                  <span>DEADLINE</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>
                    {new Date(contract.createdAt).toLocaleDateString()}
                  </span>
                  <span>
                    {new Date(contract.deadline).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">
                  <strong>Offered Price: ₹</strong>{" "}
                  {(contract.pricePerKg * contract.quantity).toFixed(2)}
                </p>
                <p className="text-sm">
                  <strong>For: </strong> {contract.quantity} kg
                </p>
                <Button className="mt-4 bg-green-600 text-white w-full py-2 rounded-lg hover:text-black-100">
                  Claim Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full">
          See More
        </Button>
      </div>
    </div>
  );
}
