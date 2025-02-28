import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import AvailableContractsSection from "./components/AvailableContractSection";
import OngoingContractsSection from "./components/OngoingContractSection";

const ContractsPage = () => {
  const tabs = [
    {
      label: "Contrats Disponible",
      value: "contrat_disponible",
      content: <AvailableContractsSection />,
    },
    {
      label: "Contrats en Cours",
      value: "contrat_en_cours",
      content: <OngoingContractsSection />,
    },
  ];

  return (
    <div className=" p-6 bg-white">
      <TabsSwitcher tabs={tabs} />
    </div>
  );
};

export default ContractsPage;
