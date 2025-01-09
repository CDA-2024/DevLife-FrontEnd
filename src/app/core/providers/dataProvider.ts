import { buildUrl } from "../utils/httpUtils";
import {
  DataProvider,
  ParamsCreate,
  ParamsDelete,
  ParamsGet,
  ParamsGetAll,
  ParamsUpdate,
} from "../schemas/DataProvider.interface";
import { fetchRequestJson } from "../services/apiService";
import { getFirstItem } from "../utils/getFirstItem";

const API_BASE_URL = "http://localhost:3000";

export const dataProvider: DataProvider = {
  getAll: async <T>(resource: string, params: ParamsGetAll): Promise<T[]> => {
    const url = params
      ? `${API_BASE_URL}/${resource}/${buildUrl(params)}`
      : `${API_BASE_URL}/${resource}`;

    const response = await fetchRequestJson<T>(url, {
      useCache: params?.useCache,
    });

    return response;
  },

  get: async <T>(resource: string, params: ParamsGet): Promise<T> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    const response = await fetchRequestJson<T>(url, {
      useCache: params?.useCache,
    });

    return getFirstItem(response);
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
