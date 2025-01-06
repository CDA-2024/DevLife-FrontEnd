import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import { EmployeToHire } from "../interfaces/EmployeToHire.interface";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import { salaryToString } from "../../../shared/utils/salaryToString";
import { levelToString } from "../../../shared/utils/levelToString";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import useButtonClick from "../../../core/hooks/useButtonClick";
import useResize from "../../../shared/hooks/useResize";

import devPortrait from "../../../../assets/images/pixelPortrait.jpg";

interface EmployeToHireCardProps {
  employe: EmployeToHire;
}

const EmployeToHireCard: React.FC<EmployeToHireCardProps> = ({ employe }) => {
  const staffDetails = [
    { icon: "🎓", label: "Niveaux", value: levelToString(employe.level) },
    { icon: "🛠️", label: "Compétence", value: employe.skill },
    { icon: "💰", label: "Salaire/J", value: salaryToString(employe.salary) },
  ];

  const { isSmall, containerRef } = useResize(425);
  const { handleClick } = useButtonClick();

  return (
    <PrimaryCard>
      <PrimaryCardHeader>
        <CardTitle className="text-gray-800">{employe.name}</CardTitle>
      </PrimaryCardHeader>
      <PrimaryCardContent>
        <div
          ref={containerRef}
          className={`flex ${isSmall ? "flex-col" : "flex-row"} gap-4 h-full`}
        >
          <img
            className="min-w-15 max-w-48 h-full object-cover"
            src={devPortrait}
            alt={employe.imgAlt}
          />
          <div className="flex flex-col flex-1 gap-2 h-full">
            {staffDetails.map((detail) => (
              <PrimaryCardItem
                key={detail.label}
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
          <Button variant="destructive" onClick={() => handleClick("refusé")}>
            Refuser
          </Button>
          <Button variant="accept" onClick={() => handleClick("recruté")}>
            Recruter
          </Button>
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default EmployeToHireCard;
