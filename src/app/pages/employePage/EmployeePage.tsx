import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import EmployeeManagementSection from "./components/EmployeeManagementSection";
import EmployeeRecrutementSection from "./components/EmployeeRecrutementSection";

const EmployeePage = () => {
  const tabs = [
    {
      label: "Recrutement",
      value: "Recrutement",
      content: <EmployeeRecrutementSection />,
    },
    {
      label: "Management",
      value: "Management",
      content: <EmployeeManagementSection />,
    },
  ];

  return (
    <div className=" p-6 bg-white">
      <TabsSwitcher tabs={tabs} />
    </div>
  );
};

export default EmployeePage;
