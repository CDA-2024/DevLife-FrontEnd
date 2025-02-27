import { useResource } from "../../core/hooks/useRessource";
import { handleApiError } from "../../core/utils/error.Utils";
import { validateResponseData } from "../../core/utils/validation.Utils";
import { EmployeeSkill } from "../interfaces/Models/EmployyeSkill.interface";
import { validateEmployeeSkill } from "../services/employeeSkill.Service";

export const useEmployeeSkill = () => {
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
  } = useResource<EmployeeSkill>("employeeSkill");

  let er = error;

  const getOneEmployeeSkill = async (id: number) => {
    const employee = await getOneGeneric({ id });

    const { validData, hasInvalidData } = validateResponseData<EmployeeSkill>(
      employee,
      validateEmployeeSkill
    );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some employeeCompagny data are invalid.")
      );
    }

    return validData;
  };

  const getAllEmployeeSkills = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<EmployeeSkill[]>(
      data,
      validateEmployeeSkill
    );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some employeeCompagny data are invalid.")
      );
    }

    return validData;
  };

  const createEmployeeSkill = async (employee: EmployeeSkill) => {
    return await create({ data: employee });
  };

  const updateEmployeeSkill = async (id: string, employee: EmployeeSkill) => {
    return await update({ id, data: employee });
  };

  const deleteEmployeeSkill = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createEmployeeSkill,
    updateEmployeeSkill,
    deleteEmployeeSkill,
    getOneEmployeeSkill,
    getAllEmployeeSkills,
  };
};
