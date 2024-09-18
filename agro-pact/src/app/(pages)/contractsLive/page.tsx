import ContractList from "@/components/ContractList";

export default function ContractsPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center text-white">
        All Contracts
      </h1>
      <ContractList />
    </div>
  );
}
