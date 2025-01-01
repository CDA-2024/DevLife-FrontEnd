import React from "react";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import { CardTitle } from "../../../shared/components/shadcn/ui/card";
import { Staff } from "../interfaces/Staff.interface";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryHeader";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import { salaryToString } from "../../../shared/utils/salaryToString";
import { levelToString } from "../../../shared/utils/levelToString";

import devPortrait from "../../../../assets/images/pixelPortrait.jpg";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import { Button } from "../../../shared/components/shadcn/ui/button";

interface StaffCardProps {
  staff: Staff;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  const staffDetails = [
    { icon: "🎓", label: "Niveaux", value: levelToString(staff.level) },
    { icon: "🛠️", label: "Compétence", value: staff.skill },
    { icon: "💰", label: "Salaire/J", value: salaryToString(staff.salary) },
  ];

  return (
    <>
      <PrimaryCard>
        <PrimaryCardHeader>
          <CardTitle className="text-gray-800">{staff.name}</CardTitle>
        </PrimaryCardHeader>
        <PrimaryCardContent>
          <div className="flex flex-row gap-4 h-full">
            <img
              className="min-w-15 max-w-48 h-full object-cover"
              src={devPortrait}
              alt={staff.imgAlt}
            />
            <div className="flex flex-col flex-1 gap-2 h-full">
              {staffDetails.map((detail, index) => (
                <PrimaryCardItem
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
          </div>
        </PrimaryCardContent>
        <PrimaryCardFooter>
          <div className="flex flex-row gap-4 h-full justify-end">
            <Button variant="destructive">Refuser</Button>
            <Button variant="accept">Recruter</Button>
          </div>
        </PrimaryCardFooter>
      </PrimaryCard>
    </>
  );
};

export default StaffCard;
