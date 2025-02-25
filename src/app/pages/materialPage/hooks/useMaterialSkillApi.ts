import { useGet } from "../../../core/hooks/useApi";
import { ParamsGet } from "../../../core/schemas/ApiService.interface";
import { ResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { MaterialSkill } from "../../../shared/interfaces/MaterialSkill.interface";
import { validateMaterialSkill } from "../services/materialSkillService";

const resource = "materialSkill";

export const useGetMaterialSkill = (
  params: ParamsGet = {}
): ResponseApi<MaterialSkill[]> => {
  const response = useGet<MaterialSkill[]>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<MaterialSkill[]>(
    response.data,
    validateMaterialSkill
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("Some material skill data are invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};

export const useGetOneMaterialSkill = (
  params: ParamsGet = {}
): ResponseApi<MaterialSkill> => {
  const response = useGet<MaterialSkill>(resource, params);

  const { validData, hasInvalidData } = validateResponseData<MaterialSkill>(
    response.data,
    validateMaterialSkill
  );

  if (hasInvalidData) {
    response.error = handleApiError(
      response.error,
      new Error("Material skill data is invalid.")
    );
  }

  return { ...response, error: response.error, data: validData };
};
