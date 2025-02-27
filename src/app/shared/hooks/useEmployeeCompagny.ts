import { useResource } from "../../core/hooks/useRessource";
import { handleApiError } from "../../core/utils/error.Utils";
import { validateResponseData } from "../../core/utils/validation.Utils";
import { EmployeeCompagny } from "../interfaces/Models/EmployeeCompagny.interface";
import { validateEmployeeCompagny } from "../services/employeeCompagny.Service";

export const useEmployeeCompagny = () => {
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
  } = useResource<EmployeeCompagny>("employeeCompagny");

  let er = error;

  const getOneEmployeeCompagny = async (id: number) => {
    const employee = await getOneGeneric({ id });

    const { validData, hasInvalidData } =
      validateResponseData<EmployeeCompagny>(
        employee,
        validateEmployeeCompagny
      );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some employeeCompagny data are invalid.")
      );
    }

    return validData;
  };

  const getAllEmployeeCompagny = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<
      EmployeeCompagny[]
    >(data, validateEmployeeCompagny);

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some employeeCompagny data are invalid.")
      );
    }

    return validData;
  };

  const createEmployeeCompagny = async (employee: EmployeeCompagny) => {
    return await create({ data: employee });
  };

  const updateEmployeeCompagny = async (
    id: string,
    employee: EmployeeCompagny
  ) => {
    return await update({ id, data: employee });
  };

  const deleteEmployeeCompagny = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createEmployeeCompagny,
    updateEmployeeCompagny,
    deleteEmployeeCompagny,
    getOneEmployeeCompagny,
    getAllEmployeeCompagny,
  };
};
