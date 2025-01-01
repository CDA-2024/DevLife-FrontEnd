import TabsSwitcher from "../../shared/components/TabSwitcher/TabsSwitcher";
import StaffManagementSection from "./components/StaffManagementSection";
import StaffRecrutementSection from "./components/StaffRecrutementSection";

const StaffPage = () => {
  const tabs = [
    {
      label: "Recruit Staff",
      value: "staffR",
      content: <StaffRecrutementSection />,
    },
    {
      label: "Staff Management",
      value: "staffM",
      content: <StaffManagementSection />,
    },
  ];

  return (
    <>
      <div className=" m-2 ml-10">
        <TabsSwitcher tabs={tabs} />
      </div>
    </>
  );
};

export default StaffPage;
