import { useGet } from "../../../core/hooks/useApi";
import {
  ParamsGet,
  ParamsGetOne,
} from "../../../core/schemas/ApiService.interface";
import { ResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { Candidate } from "../interfaces/Candidate.interface";
import { validateCandidate } from "../services/candidateService";

const resource = "staffToHire";

export const useGetCandidate = (
  params: ParamsGet = {}
): ResponseApi<Candidate[]> => {
  const response = useGet<Candidate[]>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Candidate[]>(
    response.data,
    validateCandidate
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("Candidates datas is invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};

export const useGetOneCandidate = (
  params: ParamsGetOne
): ResponseApi<Candidate> => {
  const response = useGet<Candidate>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Candidate>(
    response.data,
    validateCandidate
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("Candidate data is invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};
