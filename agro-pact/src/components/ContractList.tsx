"use client";
import { useState, useEffect } from "react";
interface Contract {
  id: number;
  walletAddress: string;
  cropType: string;
  quantity: number;
  deadline: string;
}
export default function ContractsList() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    const fetchContracts = async () => {
      const res = await fetch("/api/contracts");
      const data = await res.json();
      setContracts(data);
    };

    fetchContracts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl mb-6">Upcoming Contracts</h1>
      <ul className="space-y-4">
        {contracts.map((contract) => (
          <li key={contract.id} className="border p-4 rounded-md shadow-sm">
            <p>
              <strong>ETH Wallet Address:</strong> {contract.walletAddress}
            </p>
            <p>
              <strong>Crop Type:</strong> {contract.cropType}
            </p>
            <p>
              <strong>Quantity:</strong> {contract.quantity} kg
            </p>
            <p>
              <strong>Delivery Deadline:</strong>{" "}
              {new Date(contract.deadline).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
