import { Contract } from "../../../shared/interfaces/Contract.interface";
import { ContractCompany } from "../../../shared/interfaces/ContractCompany.interface";

export const contractParser = (
  contract: Contract[],
  contractCompany: ContractCompany[]
): Contract[] => {
  return contractCompany
    .map((contractCompany) => {
      if (!contractCompany.is_accepted) {
        return null;
      }

      const contractInfo = contract.find(
        (contract) => contract.id === contractCompany.id_contract
      );

      if (contractInfo == null) {
        return null;
      }

      return {
        id: contractCompany.id,
        title: contractInfo.title,
        type: contractInfo.type,
        imageUrl: contractInfo.image_url,
        description: contractInfo.description,
        reward: contractInfo.reward,
        difficultyLevel: contractInfo.difficulty_level,
      };
    })
    .filter((contract): contract is Contract => contract !== null);
};
