import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useAvailableContract } from "../hooks/useAvailableContract";
import AvailableContractCard from "./AvailableContractCard";

const AvailableContractsSection = () => {
  const { loading, error, availableContracts } = useAvailableContract();

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  console.log("availableContracts", availableContracts);

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      <ul>
        {availableContracts.map((availableContracts) => (
          <AvailableContractCard
            key={availableContracts.id}
            contract={availableContracts}
          />
        ))}
      </ul>
      {/* {availableContracts.map((availableContracts) => (
        <AvailableContractCard
          key={availableContracts.id}
          contract={availableContracts}
        /> */}
      {/* ))} */}
    </GridComponent>
  );
};

export default AvailableContractsSection;
