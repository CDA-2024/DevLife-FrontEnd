import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import EmployeeSection from "./components/EmployeeSection";
import CandidateSection from "./components/CandidateSection";

const EmployeePage = () => {
  const tabs = [
    {
      label: "Recrutement",
      value: "Recrutement",
      content: <CandidateSection />,
    },
    {
      label: "Management",
      value: "Management",
      content: <EmployeeSection />,
    },
  ];

  return (
    <div className=" p-6 bg-white">
      <TabsSwitcher tabs={tabs} />
    </div>
  );
};

export default EmployeePage;
