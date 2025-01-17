import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import AvailableContractsSection from "./components/AvailableContractSection";
import OngoingContractsSection from "./components/OngoingContractSection";

const ContractsPage = () => {
  const tabs = [
    {
      label: "Contracts Disponible",
      value: "contract_disponible",
      content: <AvailableContractsSection />,
    },
    {
      label: "Contracts en Cours",
      value: "contract_en_cours",
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
