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

      {contracts.length === 0 ? (
        <p className="text-center">No live contracts found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contracts.map((contract: any) => (
            <Card
              key={contract.id}
              className="border p-4 rounded-3xl shadow-md bg-white"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {contract.cropType.toUpperCase()}
                </CardTitle>
                <div className="flex space-x-2 mt-2">
                  {/* Status Badges */}
                  <span className="bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    Contract open
                  </span>
                  <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full">
                    Seasonal
                  </span>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                {/* Contract details */}
                <div className="flex justify-between mb-2">
                  <span>START</span>
                  <span>END</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>
                    {new Date(contract.startDate).toLocaleDateString()}
                  </span>
                  <span>
                    {new Date(contract.deadline).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">
                  <strong>Offered Price: ₹</strong>{" "}
                  {contract.pricePerKg * contract.quantity}
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
