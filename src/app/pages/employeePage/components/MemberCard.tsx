import devPortrait from "../../../../assets/images/pixelPortrait.jpg";

import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import { numberVerification } from "../../../core/utils/helpers.Utils";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import useResize from "../../../shared/hooks/useResize";
import MemberSheet from "./MemberSheet";
import PrimaryCardProgressItem from "../../../shared/components/PrimaryCard/PrimaryCardProgressItem";
import { getMemberDetails } from "../utils/memberDetails";
import { Member } from "../interfaces/Member.interface";

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const memberDetails = getMemberDetails(member);
  const { isSmall, containerRef } = useResize(425);

  return (
    <PrimaryCard>
      <PrimaryCardHeader>
        <CardTitle className="text-gray-800">{member.name}</CardTitle>
      </PrimaryCardHeader>
      <PrimaryCardContent>
        <div
          ref={containerRef}
          className={`flex ${isSmall ? "flex-col" : "flex-row"} gap-4 h-full`}
        >
          <img
            className="min-w-15 max-w-48 h-full object-cover"
            src={devPortrait}
            alt={"Portrait of : " + member.name}
          />
          <div className="flex flex-col flex-1 gap-2 h-full">
            {memberDetails.map((detail) =>
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
          <MemberSheet />
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default MemberCard;
