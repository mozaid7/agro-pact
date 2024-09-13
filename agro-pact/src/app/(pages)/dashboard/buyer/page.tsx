import ContractForm from "@/components/ContractForm";
import React from "react";
const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white-100 mt-10">
      <h1 className="text-2xl font-bold mb-4 bg-white-100">
        Create a New Contract
      </h1>
      <ContractForm />
    </div>
  );
};

export default Page;
