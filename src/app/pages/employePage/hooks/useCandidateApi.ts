import { useGet } from "../../../core/hooks/useApi";
import { useApiCallTracker } from "../../../core/hooks/useApiCallTracker";
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
  const { setError, getState } = useApiCallTracker();

  const response = useGet<Candidate[]>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Candidate[]>(
    response.data,
    validateCandidate
  );

  if (hasInvalidData) {
    handleApiError(
      response.key,
      new Error("Some Candidates data are invalid."),
      setError,
      getState
    );
  }

  return { ...response, error: getState(response.key).error, data: validData };
};

export const useGetOneCandidate = (
  params: ParamsGetOne
): ResponseApi<Candidate> => {
  const { setError, getState } = useApiCallTracker();

  const response = useGet<Candidate>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<Candidate>(
    response.data,
    validateCandidate
  );

  if (hasInvalidData) {
    handleApiError(
      response.key,
      new Error("Candidate data is invalid."),
      setError,
      getState
    );
  }

  return { ...response, error: getState(response.key).error, data: validData };
};
