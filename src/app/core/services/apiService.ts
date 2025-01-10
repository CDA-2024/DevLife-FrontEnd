import {
  ApiService,
  ParamsCreate,
  ParamsDelete,
  ParamsGet,
  ParamsGetOne,
  ParamsUpdate,
} from "../schemas/ApiService.interface";
import { fetchRequestJson } from "../utils/fetchUtils";

const API_BASE_URL = "http://localhost:3000";

export const apiService: ApiService = {
  get: async <T>(resource: string, params: ParamsGet): Promise<T | T[]> => {
    const url = params
      ? `${API_BASE_URL}/${resource}/${buildUrl(params)}`
      : `${API_BASE_URL}/${resource}`;

    const response = await fetchRequestJson<T>(url, {
      useCache: params?.useCache,
    });

    return normilizeResponse(response);
  },

  getOne: async <T>(resource: string, params: ParamsGetOne): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    const response = await fetchRequestJson<T>(url, {
      useCache: params?.useCache,
    });

    return response;
  },

  create: async <T>(
    resource: string,
    params: ParamsCreate<T>
  ): Promise<T[] | T> => {
    const url = `${API_BASE_URL}/${resource}`;

    console.log(url, params);
    throw new Error("Function not implemented.");
  },

  createOne: async <T>(
    resource: string,
    params: ParamsCreate<T>
  ): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}`;

    console.log(url, params);
    throw new Error("Function not implemented.");
  },

  update: async <T>(
    resource: string,
    params: ParamsUpdate<T>
  ): Promise<T[] | T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },

  updateOne: async <T>(
    resource: string,
    params: ParamsUpdate<T>
  ): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },

  delete: async <T>(
    resource: string,
    params: ParamsDelete
  ): Promise<T | T[]> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },

  deleteOne: async <T>(resource: string, params: ParamsDelete): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    console.log(url);
    throw new Error("Function not implemented.");
  },
};

const buildUrl = (params: ParamsGet) => {
  const queryParams = [];

  if (params.pagination?.page)
    queryParams.push(`_page=${params.pagination?.page}`);
  if (params.pagination?.perPage)
    queryParams.push(`_limit=${params.pagination?.perPage}`);
  if (params.sort?.field) queryParams.push(`_sort=${params.sort?.field}`);
  if (params.sort?.order) queryParams.push(`_order=${params.sort?.order}`);

  return queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
};

const normilizeResponse = <T>(response: T | T[]): T | T[] => {
  if (Array.isArray(response) && response.length === 1) {
    return response[0];
  }
  return response;
};
