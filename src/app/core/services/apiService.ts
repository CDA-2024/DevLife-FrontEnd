import {
  ApiService,
  ParamsCreate,
  ParamsDelete,
  ParamsGet,
  ParamsUpdate,
} from "../schemas/ApiService.interface";
import { fetchRequestJson } from "../utils/fetchUtils";

const API_BASE_URL = "http://localhost:3000";

export const apiService: ApiService = {
  get: async <T>(resource: string, params: ParamsGet): Promise<T> => {
    const url = params.id
      ? `${API_BASE_URL}/${resource}/${params.id}/${buildUrl(params)}`
      : `${API_BASE_URL}/${resource}/${buildUrl(params)}`;

    const response = await fetchRequestJson<T>(url, {
      useCache: params?.useCache,
    });

    return response;
  },

  create: async <T>(resource: string, params: ParamsCreate<T>): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}`;

    console.log(url, params);
    throw new Error("Function not implemented.");
  },

  update: async <T>(resource: string, params: ParamsUpdate<T>): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },

  delete: async <T>(resource: string, params: ParamsDelete): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },
};

const buildUrl = (params: ParamsGet) => {
  const queryParams = [];

  if (params.page) queryParams.push(`_page=${params.page}`);
  if (params.perPage) queryParams.push(`_limit=${params.perPage}`);
  if (params.field) queryParams.push(`_sort=${params.field}`);
  if (params.order) queryParams.push(`_order=${params.order}`);

  return queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
};
