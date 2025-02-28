/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useAvailableContract } from "../hooks/useAvailableContract";
import AvailableContractCard from "./AvailableContractCard";

const AvailableContractsSection = () => {
  const { loading, error, availableContracts, updateContracts } =
    useAvailableContract();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    updateContracts();
  }, [refresh]);

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      {availableContracts.map((availableContracts) => (
        <AvailableContractCard
          key={availableContracts.id}
          contract={availableContracts}
          onUpdate={() => setRefresh((prev) => prev + 1)}
        />
      ))}
    </GridComponent>
  );
};

export default AvailableContractsSection;
