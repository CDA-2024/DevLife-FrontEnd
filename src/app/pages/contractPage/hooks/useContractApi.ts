import { useResource } from "../../../core/hooks/useRessource";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { Contract } from "../../../shared/interfaces/Contract.interface";
import { validateContract } from "../services/contractService";

export const useContract = () => {
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
  } = useResource<Contract>("contracts");

  let er = error;

  const getOneContract = async (id: number) => {
    const contract = await getOneGeneric({ id });

    const { validData, hasInvalidData } = validateResponseData<Contract>(
      contract,
      validateContract
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some contract data are invalid."));
    }

    return validData;
  };

  const getAllContracts = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<Contract[]>(
      data,
      validateContract
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some contract data are invalid."));
    }

    return validData;
  };

  const createContract = async (contract: Contract) => {
    return await create({ data: contract });
  };

  const updateContract = async (id: string, contract: Contract) => {
    return await update({ id, data: contract });
  };

  const deleteContract = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createContract,
    updateContract,
    deleteContract,
    getOneContract,
    getAllContracts,
  };
};
