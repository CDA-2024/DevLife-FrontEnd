import { useResource } from "../../../core/hooks/useRessource";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { ContractCompany } from "../../interfaces/ContractCompany.interface";
import { validateContractCompany } from "../../services/contractCompany.Service";

export const useContractCompanyApi = () => {
  const {
    data,
    loading,
    error,
    fetchData,
    create,
    update,
    delete: deleteItemGeneric,
    getOne: getOneGeneric,
    getAll: getAllGeneric,
  } = useResource<ContractCompany>("companyContracts");

  let er = error;

  const getOneContractCompany = async (id: number | string) => {
    const contractCompany = await getOneGeneric({ id });
    const { validData, hasInvalidData } = validateResponseData<ContractCompany>(
      contractCompany,
      validateContractCompany
    );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some contractCompany data are invalid.")
      );
    }
    return validData;
  };

  const getAllContractCompany = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<
      ContractCompany[]
    >(data, validateContractCompany);

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some contractCompany data are invalid.")
      );
    }

    return validData;
  };

  const createContractCompany = async (contractCompany: ContractCompany) => {
    return await create({ data: contractCompany });
  };

  const updateContractCompany = async (
    id: string | number,
    contractCompany: ContractCompany
  ) => {
    return await update({ id, data: contractCompany });
  };

  const deleteContractCompany = async (id: number) => {
    return await deleteItemGeneric({ id });
  };

  const fetchContract = async () => {
    return await fetchData();
  }

  return {
    data,
    loading,
    error: er,
    fetchContract,
    createContractCompany,
    updateContractCompany,
    deleteContractCompany,
    getOneContractCompany,
    getAllContractCompany,
  };
};
