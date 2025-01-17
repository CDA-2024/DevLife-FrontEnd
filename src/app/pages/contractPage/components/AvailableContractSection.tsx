import { useEffect, useState } from "react";
import { AvailableContract } from "../../../shared/interfaces/Contract.interface";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import AvailableContractCard from "./AvailableContractCard";

const AvailableContractsSection = () => {
  const [contracts, setContracts] = useState<AvailableContract[]>([]);

  useEffect(() => {
    const url = "http://localhost:3000/availableContracts";

    const fetchContracts = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des contrats !");
        }

        const result = await response.json();
        setContracts(result);
      } catch (e) {
        console.error("Une erreur inattendue est survenue", e);
      }
    };

    fetchContracts();
  }, []);

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      {contracts.map((contract) => (
        <AvailableContractCard key={contract.id} contract={contract} />
      ))}
    </GridComponent>
  );
};

export default AvailableContractsSection;
