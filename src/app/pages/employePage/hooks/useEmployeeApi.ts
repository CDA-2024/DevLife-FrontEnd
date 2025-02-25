import { useGet } from "../../../core/hooks/useApi";
import {
  ParamsGet,
  ParamsGetOne,
} from "../../../core/schemas/ApiService.interface";
import { ResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { Employee } from "../interfaces/Employee.interface";
import { validateEmployee } from "../services/employeeService";

const resource = "employee";

export const useGetEmployees = (
  params: ParamsGet = {}
): ResponseApi<Employee[]> => {
  const response = useGet<Employee[]>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Employee[]>(
    response.data,
    validateEmployee
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("Some employee data are invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};

export const useGetOneEmployee = (
  params: ParamsGetOne
): ResponseApi<Employee> => {
  const response = useGet<Employee>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Employee>(
    response.data,
    validateEmployee
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("employee data is invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};
