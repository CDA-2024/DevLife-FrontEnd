import { useGet } from "../../../core/hooks/useApi";
import {
  ParamsGet,
  ParamsGetOne,
} from "../../../core/schemas/ApiService.interface";
import { ResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
import { EmployeeToHire } from "../interfaces/EmployeeToHire.interface";
import { validateEmployeeToHire } from "../services/EmployeeToHireService";


const resource = "staffToHire";

export const useGetEmployeesToHire = (
  params: ParamsGet = {}
): ResponseApi<EmployeeToHire[]> => {
    
  const response = useGet<EmployeeToHire[]>(resource, params);

  const validData = response.data.filter((employee) =>
    validateEmployeeToHire(employee)
  );

  if (validData.length !== response.data.length) {
    throw new Error("Some employeesToHire data are invalid.");
  }

  return { ...response, data: validData };
};

export const useGetOneEmployeeToHire = (
  params: ParamsGetOne
): ResponseApi<EmployeeToHire> => {
  const response = useGet<EmployeeToHire>(resource, params);

  if (response.data && !validateEmployeeToHire(response.data)) {
    throw new Error(`Invalid employee data received from ${resource}`);
  }

  return response;
};
