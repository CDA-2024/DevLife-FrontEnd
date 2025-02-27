import { useEffect, useState } from "react";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useAvailableContract } from "../hooks/useAvailableContract";
import AvailableContractCard from "./AvailableContractCard";

const AvailableContractsSection = () => {
  const { loading, error, availableContracts, fetchData } =
    useAvailableContract();
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    setIsUpdated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated]);

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
          setIsUpdated={() => setIsUpdated}
        />
      ))}
    </GridComponent>
  );
};

export default AvailableContractsSection;
