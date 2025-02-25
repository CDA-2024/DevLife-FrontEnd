// import { useGet } from "../../../core/hooks/useApi";
// import { ParamsGet } from "../../../core/schemas/ApiService.interface";
// import { GetResponseApi } from "../../../core/schemas/response/ResponseApi.interface";
// import { handleApiError } from "../../../core/utils/error.Utils";
// import { validateResponseData } from "../../../core/utils/validation.Utils";
// import { Material } from "../interfaces/Material.interface";
// import { validateMaterial } from "../services/materialService";
// const resource = "materials";

// export const useGetMaterial = (
// ): GetResponseApi<Material[]> => {
//   const response = useGet<Material[]>(resource);

//   const { validData, hasInvalidData } = validateResponseData<Material[]>(
//     response,
//     validateMaterial
//   );

//   if (hasInvalidData) {
//     response.error = handleApiError(
//       response.error,
//       new Error("Some material data are invalid.")
//     );
//   }

//   return { ...response, error: response.error, data: validData };
// };

// export const useGetOneMaterial = (
//   params: ParamsGet = {}
// ): GetResponseApi<Material> => {
//   const response = useGet<Material>(resource, params);

//   const { validData, hasInvalidData } = validateResponseData<Material>(
//     response.data,
//     validateMaterial
//   );

//   if (hasInvalidData) {
//     response.error = handleApiError(
//       response.error,
//       new Error("Material data is invalid.")
//     );
//   }

//   return { ...response, error: response.error, data: validData };
// };
