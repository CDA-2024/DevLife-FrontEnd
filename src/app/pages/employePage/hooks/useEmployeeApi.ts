import { useGet } from "../../../core/hooks/useApi";
import {
  ParamsGet,
  ParamsGetOne,
} from "../../../core/schemas/ApiService.interface";
import { ResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
import { Employee } from "../interfaces/Employee.interface";
import { validateEmployee } from "../services/EmployeeService";

const resource = "staff";

export const useGetEmployees = (
  params: ParamsGet = {}
): ResponseApi<Employee[]> => {
  const response = useGet<Employee[]>(resource, params);

  const validData = response.data.filter((employee) =>
    validateEmployee(employee)
  );

  if (validData.length !== response.data.length) {
    throw new Error("Some employees data are invalid.");
  }

  return { ...response, data: validData };
};

export const useGetOneEmployee = (
  params: ParamsGetOne
): ResponseApi<Employee> => {
  const response = useGet<Employee>(resource, params);

  if (response.data && !validateEmployee(response.data)) {
    throw new Error(`Invalid employee data received from ${resource}`);
  }

  return response;
};
