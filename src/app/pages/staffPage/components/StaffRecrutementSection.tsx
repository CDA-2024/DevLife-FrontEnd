import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { Staff } from "../interfaces/Staff.interface";
import StaffCard from "./StaffCard";

import DevPortrait from "../../../../assets/images/pixelPortrait.jpg";

const StaffRecrutementSection = () => {
  const staffTest: Staff = {
    name: "Test Nom",
    img: DevPortrait,
    imgAlt: "protrait dev",
    level: 1,
    skill: "front-End",
    salary: 250,
  };

  return (
    <>
      <GridComponent
        cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        gap="gap-6"
      >
        <StaffCard staff={staffTest} />

      </GridComponent>
    </>
  );
};

export default StaffRecrutementSection;
