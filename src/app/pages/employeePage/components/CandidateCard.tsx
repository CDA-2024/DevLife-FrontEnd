import devPortrait from "../../../../assets/images/pixelPortrait.jpg";

import { Button } from "../../../shared/components/Shadcn/ui/button";
import { getCandidateDetails } from "../utils/candidateDetails";
import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import { Candidate } from "../interfaces/Candidate.interface";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import useButtonClick from "../../../core/hooks/useButtonClick";
import useResize from "../../../shared/hooks/useResize";

interface CandidateCardProps {
  cadidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ cadidate }) => {
  const emplyeDetails = getCandidateDetails(cadidate);
  const { isSmall, containerRef } = useResize(425);
  const { handleClick } = useButtonClick();

  return (
    <PrimaryCard>
      <PrimaryCardHeader>
        <CardTitle className="text-gray-800">{cadidate.name}</CardTitle>
      </PrimaryCardHeader>
      <PrimaryCardContent>
        <div
          ref={containerRef}
          className={`flex ${isSmall ? "flex-col" : "flex-row"} gap-4 h-full`}
        >
          <img
            className="min-w-15 max-w-48 h-full object-cover"
            src={devPortrait}
            alt={"Portrait of : " + cadidate.name}
          />
          <div className="flex flex-col flex-1 gap-2 h-full">
            {emplyeDetails.map((detail) => (
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

export default CandidateCard;
