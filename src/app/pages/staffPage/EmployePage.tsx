import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import EmployeManagementSection from "./components/EmployeManagementSection";
import EmployeRecrutementSection from "./components/EmployeRecrutementSection";

const EmployePage = () => {
  const tabs = [
    {
      label: "Recrutement",
      value: "Recrutement",
      content: <EmployeRecrutementSection />,
    },
    {
      label: "Management",
      value: "Management",
      content: <EmployeManagementSection />,
    },
  ];

  return (
    <div className=" p-6 bg-white">
      <TabsSwitcher tabs={tabs} />
    </div>
  );
};

export default EmployePage;
