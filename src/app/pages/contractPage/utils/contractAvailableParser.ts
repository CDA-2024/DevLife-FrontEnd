import { AvailableContract, Contract } from "../../../shared/interfaces/Contract.interface";
import { ContractCompany } from "../../../shared/interfaces/ContractCompany.interface";

export const contractAvailableParser = (
  contract: Contract[],
  contractCompany: ContractCompany[]
): AvailableContract[] => {
  return contractCompany
    .map((contractCompany) => {
      if (contractCompany.is_accepted) {
        return null;
      }

      const contractInfo = contract.find(
        (contract) => contract.id === contractCompany.id_contract
      );

      return {
        id: contractCompany.id,
        title: contractInfo?.title,
        type: contractInfo?.type,
        imageUrl: contractInfo?.image_url,
        description: contractInfo?.description,
        reward: contractInfo?.reward,
        difficultyLevel: contractInfo?.difficulty_level,
        deadline: contractCompany.deadline,
      };
    })
    .filter(
      (contractCompany): contractCompany is AvailableContract => contractCompany !== null
    );
};
