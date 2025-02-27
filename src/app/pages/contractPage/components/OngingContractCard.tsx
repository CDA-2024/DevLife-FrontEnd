import contractImage from "../../../../assets/images/contract.avif";

import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import useResize from "../../../shared/hooks/useResize";
import { OngoingContract } from "../../../shared/interfaces/Models/Contract.interface";
import { getOngoingContractDetails } from "../../../shared/utils/data/contractDetails";
import OngoingContractSheet from "./OngoingContractSheet";

interface OngoingContractCardProps {
  contract: OngoingContract;
}

const OngoingContractCard: React.FC<OngoingContractCardProps> = ({
  contract,
}) => {
  const contractDetails = getOngoingContractDetails(contract);

  const { isSmall, containerRef } = useResize(425);

  return (
    <PrimaryCard>
      <PrimaryCardHeader>
        <CardTitle className="text-gray-800">{contract.title}</CardTitle>
      </PrimaryCardHeader>
      <PrimaryCardContent>
        <div
          ref={containerRef}
          className={`flex ${isSmall ? "flex-col" : "flex-row"} gap-4 h-full`}
        >
          <img
            className="min-w-15 max-w-48 h-full object-cover"
            src={contractImage}
            alt="contrat"
          />
          <div className="flex flex-col flex-1 gap-2 h-full">
            {contractDetails.map((detail) => (
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
        <div className="flex flex-row w-full justify-end">
          <OngoingContractSheet />
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default OngoingContractCard;
