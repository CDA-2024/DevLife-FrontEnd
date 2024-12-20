import PrimaryCard, { CardItemType } from "../../../shared/components/app-primary-card";

const StaffManagementSection = () => {
  const CardItem : CardItemType = {
    header: <>test header</>,
    content: <>test header</>,
    footer: <>test footer</>,
  };
  return (
    <>
      <PrimaryCard CardItem={CardItem} />
    </>
  );
};

export default StaffManagementSection;
