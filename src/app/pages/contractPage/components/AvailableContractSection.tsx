import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useContract } from "../hooks/useContractApi";
import AvailableContractCard from "./AvailableContractCard";

const AvailableContractsSection = () => {
  const { data, loading, error } = useContract();

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
      {data.map((contract) => (
        <AvailableContractCard key={contract.id} contract={contract} />
      ))}
    </GridComponent>
  );
};

export default AvailableContractsSection;
