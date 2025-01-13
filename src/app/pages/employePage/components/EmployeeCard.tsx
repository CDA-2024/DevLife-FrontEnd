import devPortrait from "../../../../assets/images/pixelPortrait.jpg";

import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import { Employee } from "../interfaces/Employee.interface";
import { numberVerification } from "../../../core/utils/helpers";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import useResize from "../../../shared/hooks/useResize";
import EmployeeSheet from "./EmployeeSheet";
import PrimaryCardProgressItem from "../../../shared/components/PrimaryCard/PrimaryCardProgressItem";
import { getEmployeeDetails } from "../../../shared/utils/data/EmployeeDetails";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const employeeDetails = getEmployeeDetails(employee);
  const { isSmall, containerRef } = useResize(425);

  return (
    <PrimaryCard>
      <PrimaryCardHeader>
        <CardTitle className="text-gray-800">{employee.name}</CardTitle>
      </PrimaryCardHeader>
      <PrimaryCardContent>
        <div
          ref={containerRef}
          className={`flex ${isSmall ? "flex-col" : "flex-row"} gap-4 h-full`}
        >
          <img
            className="min-w-15 max-w-48 h-full object-cover"
            src={devPortrait}
            alt="dev"
          />
          <div className="flex flex-col flex-1 gap-2 h-full">
            {employeeDetails.map((detail) =>
              detail.label === "Experience" ? (
                <PrimaryCardProgressItem
                  key={detail.label}
                  icon={detail.icon}
                  label={detail.label}
                  value={numberVerification(detail.value)}
                />
              ) : (
                <PrimaryCardItem
                  key={detail.label}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              )
            )}
          </div>
        </div>
      </PrimaryCardContent>
      <PrimaryCardFooter>
        <div className="flex flex-row w-full justify-end">
          <EmployeeSheet />
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default EmployeeCard;
