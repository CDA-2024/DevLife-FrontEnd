import { useResource } from "../../../core/hooks/useRessource";
import { ParamsGetOne } from "../../../core/schemas/ApiService.interface";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { Employee } from "../interfaces/Employee.interface";
import { validateEmployee } from "../services/employeeService";

const resource = "employee";

const useEmployee = () => {
  return useResource<Employee>(resource);
};

export const useGetEmployees = (): {
  loading: boolean;
  error: Error | null;
  data: Employee[];
} => {
  const { data, loading, error } = useEmployee();

  let resError = error;

  const { validData, hasInvalidData } = validateResponseData<Employee[]>(
    data,
    validateEmployee
  );

  if (hasInvalidData) {
    resError = handleApiError(
      resError,
      new Error("Some employee data are invalid.")
    );
  }

  return { loading, error: resError, data: validData };
};

export const useGetOneEmployee = (
  params: ParamsGetOne
): { loading: boolean; error: Error | null; data: Employee | null } => {
  const { loading, error, getOne } = useEmployee();
  let resError = error;
  let validData: Employee | null = null;

  const fetchEmployee = async () => {
    try {
      const employee = await getOne(params);
      const { validData: validatedData, hasInvalidData } =
        validateResponseData<Employee>(employee, validateEmployee);

      validData = validatedData;

      if (hasInvalidData) {
        resError = handleApiError(
          resError,
          new Error("Some employee data are invalid.")
        );
      }
    } catch (err) {
      resError = handleApiError(resError, new Error("Employee not found."));
    }
  };

  fetchEmployee();

  return { loading, error: resError, data: validData };
};
