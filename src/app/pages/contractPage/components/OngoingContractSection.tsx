import { useEffect, useState } from "react";
import { OngoingContract } from "../../../shared/interfaces/Models/Contract.interface";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import OngoingContractCard from "./OngingContractCard";

const OngoingContractsSection = () => {
  const [contracts, setContracts] = useState<OngoingContract[]>([]);

  useEffect(() => {
    const url = "http://localhost:3000/ongoingContracts";

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
        <OngoingContractCard key={contract.id} contract={contract} />
      ))}
    </GridComponent>
  );
};

export default OngoingContractsSection;
