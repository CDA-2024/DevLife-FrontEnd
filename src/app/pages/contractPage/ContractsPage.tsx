import TestPage from "../../core/screens/TestPage";
import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";

const ContractsPage = () => {
  const tabs = [
    {
      label: "Contracts Disponible",
      value: "contract_disponible",
      content: <TestPage />,
    },
    {
      label: "Contracts en Cours",
      value: "contract_en_cours",
      content: <TestPage />,
    },
  ];

  return (
    <div className=" p-6 bg-white">
      <TabsSwitcher tabs={tabs} />
    </div>
  );
};

export default ContractsPage;
