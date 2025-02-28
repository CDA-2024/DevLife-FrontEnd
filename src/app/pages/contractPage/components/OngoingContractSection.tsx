import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import OngoingContractCard from "./OngoingContractCard";
import { useContract } from "../hooks/useContract";

const OngoingContractsSection = () => {
  const { loading, error, contracts } = useContract();

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
      {contracts.map((contract) => (
        <OngoingContractCard key={contract.id} contract={contract} />
      ))}
    </GridComponent>
  );
};

export default OngoingContractsSection;
