import contractImage from "../../../../assets/images/contract.avif";
import useButtonClick from "../../../core/hooks/useButtonClick";

import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import useResize from "../../../shared/hooks/useResize";
import { AvailableContract } from "../../../shared/interfaces/Contract.interface";
import { getAvailableContractDetails } from "../../../shared/utils/data/contractDetails";

interface AvailableContractCardProps {
  contract: AvailableContract;
}

const AvailableContractCard: React.FC<AvailableContractCardProps> = ({
  contract,
}) => {
  const contractDetails = getAvailableContractDetails(contract);

  const { isSmall, containerRef } = useResize(425);
  const { handleClick } = useButtonClick();

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
        <div className="flex flex-row gap-4 h-full justify-end">
          <Button variant="destructive" onClick={() => handleClick("refusé")}>
            Refuser
          </Button>
          <Button variant="accept" onClick={() => handleClick("acceptée")}>
            accepter
          </Button>
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default AvailableContractCard;
