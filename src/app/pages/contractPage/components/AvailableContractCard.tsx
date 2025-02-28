import contractImage from "../../../../assets/images/contract.avif";
import PrimaryCard from "../../../shared/components/PrimaryCard/PrimaryCard";
import PrimaryCardContent from "../../../shared/components/PrimaryCard/PrimaryCardContent";
import PrimaryCardFooter from "../../../shared/components/PrimaryCard/PrimaryCardFooter";
import PrimaryCardHeader from "../../../shared/components/PrimaryCard/PrimaryCardHeader";
import PrimaryCardItem from "../../../shared/components/PrimaryCard/PrimaryCardItem";
import { Button } from "../../../shared/components/Shadcn/ui/button";
import { CardTitle } from "../../../shared/components/Shadcn/ui/card";
import { useContractCompanyApi } from "../../../shared/hooks/contracts/useContractCompanyApi";
import { useToast } from "../../../shared/hooks/use-toast";
import useResize from "../../../shared/hooks/useResize";
import { getAvailableContractDetails } from "../../../shared/utils/data/contractDetails";
import { AvailableContract } from "../interfaces/availableContract.interface";

interface AvailableContractCardProps {
  contract: AvailableContract;
  onUpdate: () => void;
}

const AvailableContractCard: React.FC<AvailableContractCardProps> = ({
  contract,
  onUpdate,
}) => {
  const contractDetails = getAvailableContractDetails(contract);
  const {
    createContractCompany,
    deleteContractCompany,
    getOneContractCompany,
  } = useContractCompanyApi();
  const { id } = contract;
  const { toast } = useToast();

  const { isSmall, containerRef } = useResize(425);

  const handleClickUpdate = async () => {
    try {
      const fullContract = getOneContractCompany(id);

      const updatedContract = {
        id: (await fullContract).id,
        id_company: (await fullContract).id_company,
        id_contract: (await fullContract).id_contract,
        is_accepted: true,
        is_completed: (await fullContract).is_completed,
        progress: (await fullContract).progress,
        deadline: (await fullContract).deadline,
      };
      await createContractCompany(updatedContract);
      toast({
        title: "Contrat accepté",
        description: `Vous avez accepté le contrat : ${contract.title}`,
        variant: "success",
      });
      onUpdate();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du contrat", error);
    }
  };

  const handleClickDelete = async () => {
    try {
      await deleteContractCompany(id);
      toast({
        title: "Contrat refusé",
        description: `Vous avez refusé le contrat : ${contract.title}`,
        variant: "destructive",
      });
      onUpdate();
    } catch (error) {
      console.error("Erreur lors de la suppression du contrat", error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la suppression du contrat",
        variant: "destructive",
      });
    }
  };

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
          <Button variant="destructive" onClick={() => handleClickDelete()}>
            Refuser
          </Button>
          <Button variant="accept" onClick={() => handleClickUpdate()}>
            Accepter
          </Button>
        </div>
      </PrimaryCardFooter>
    </PrimaryCard>
  );
};

export default AvailableContractCard;
