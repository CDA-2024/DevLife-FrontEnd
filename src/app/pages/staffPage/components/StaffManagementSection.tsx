import PrimaryCard from "../../../shared/components/app-primary-card";
import { CardItemType } from "../../../shared/interfaces/PrimaryCard.interface";

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
