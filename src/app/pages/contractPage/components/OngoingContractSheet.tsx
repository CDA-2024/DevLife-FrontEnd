import PrimarySheet from "../../../shared/components/PrimarySheet/PrimarySheet";
import { AcceptedContract } from "../interfaces/acceptedContract.interface";

interface OngoingContractSheetProps {
  contractData: AcceptedContract;
}

const OngoingContractSheet: React.FC<OngoingContractSheetProps> = ({
  contractData,
}) => {

  return (
    <PrimarySheet
      btnTitle="Détails"
      title={contractData.title}
      description={contractData.description}
    >
      <p></p>
    </PrimarySheet>
  );
};

export default OngoingContractSheet;
