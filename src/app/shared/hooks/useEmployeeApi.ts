import { useResource } from "../../core/hooks/useRessource";
import { handleApiError } from "../../core/utils/error.Utils";
import { validateResponseData } from "../../core/utils/validation.Utils";
import { Employee } from "../interfaces/Employee.interface";
import { validateEmployee } from "../services/employee.Service";

export function useEmployee()  {
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
  } = useResource<Employee>("employee");

  let er = error;

  const getOneEmployee = async (id: number) => {
    const employee = await getOneGeneric({ id });

    const { validData, hasInvalidData } = validateResponseData<Employee>(
      employee,
      validateEmployee
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some employee data are invalid."));
    }

    return validData;
  };

  const getAllEmployees = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<Employee[]>(
      data,
      validateEmployee
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some employee data are invalid."));
    }

    return validData;
  };

  const createEmployee = async (employee: Employee) => {
    return await create({ data: employee });
  };

  const updateEmployee = async (id: string, employee: Employee) => {
    return await update({ id, data: employee });
  };

  const deleteEmployee = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getOneEmployee,
    getAllEmployees,
  };
};
