import { Contract } from "../../../shared/interfaces/Contract.interface";
import { ContractCompany } from "../../../shared/interfaces/ContractCompany.interface";
import { AcceptedContract } from "../interfaces/acceptedContract.interface";

export const contractParser = (
  contract: Contract[],
  contractCompany: ContractCompany[]
): AcceptedContract[] => {
  return contractCompany
    .map((contractCompany) => {
      if (!contractCompany.is_accepted) {
        return null;
      }

      const contractInfo = contract.find(
        (contract) => contract.id === contractCompany.id_contract
      );
      return {
        id: contractCompany.id,
        title: contractInfo?.title,
        type: contractInfo?.type,
        image_url: contractInfo?.image_url,
        description: contractInfo?.description,
        reward: contractInfo?.reward,
        difficulty_level: contractInfo?.difficulty_level,
        deadline: contractCompany?.deadline,
      };
    })
    .filter((contract): contract is AcceptedContract => contract !== null);
};
