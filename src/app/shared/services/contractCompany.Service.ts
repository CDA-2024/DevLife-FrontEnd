import { ContractCompany } from "../interfaces/ContractCompany.interface";

export const validateContractCompany = (
  contractCompany: unknown
): contractCompany is ContractCompany => {
  if (typeof contractCompany !== "object" || contractCompany === null) {
    console.error("Invalid contractCompany data:", contractCompany);
    return false;
  }

  const cc = contractCompany as ContractCompany;

  if (
    typeof cc.id !== "number" ||
    typeof cc.idCompany !== "number" ||
    typeof cc.idContract !== "number" ||
    !(cc.deadline instanceof Date) ||
    typeof cc.isAccepted !== "boolean" ||
    typeof cc.isCompleted !== "boolean" ||
    typeof cc.progress !== "number" ||
    !(cc.startDate instanceof Date)
  ) {
    console.error("Invalid contractCompany data:", cc);
    return false;
  }

  return true;
};
