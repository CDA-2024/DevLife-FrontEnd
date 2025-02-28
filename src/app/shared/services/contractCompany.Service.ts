import { ContractCompany } from "../interfaces/ContractCompany.interface";

export const validateContractCompany = (
  contractCompany: unknown
): contractCompany is ContractCompany => {
  if (typeof contractCompany !== "object" || contractCompany === null) {
    console.error("Invalid contractCompany data :", contractCompany);
    return false;
  }

  const cc = contractCompany as ContractCompany;

  if (
    typeof cc.id !== "number" ||
    typeof cc.id_company !== "number" ||
    typeof cc.id_contract !== "number" ||
    // !(cc.deadline instanceof Date) ||
    typeof cc.is_accepted !== "boolean" ||
    typeof cc.is_completed !== "boolean" ||
    typeof cc.progress !== "number"
    // !(cc.start_date instanceof Date)
  ) {
    console.error("Invalid contractCompany data:", cc);
    return false;
  }

  return true;
};
