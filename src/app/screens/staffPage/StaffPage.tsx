import PageTabsSwitcher from "../../shared/components/app-tabs-switcher";
import StaffManagementSection from "./components/StaffManagementSection";
import StaffRecrutementSection from "./components/StaffRecrutementSection";

const StaffPage = () => {
  const tabs = [
    {
      label: "Staff Management",
      value: "staffM",
      content: <StaffManagementSection />,
    },
    {
      label: "Recruit Staff",
      value: "staffR",
      content: <StaffRecrutementSection />,
    },
  ];

  return (
    <>
      <PageTabsSwitcher tabs={tabs} />
    </>
  );
};

export default StaffPage;
