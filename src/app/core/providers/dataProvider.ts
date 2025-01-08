import { RequestParams } from "../schemas/request/RequestParams.interface";
import { fetchUtils } from "../utils/fetchUtils";
import { buildUrl } from "../utils/httpUtils";
import { DataProvider } from "../schemas/DataProvider.interface";

const API_BASE_URL = "http://localhost:3000";

// changer le Type de reponses atendue pour chaque reponses en implementant des interfaces

export const dataProvider: DataProvider = {
  getList: async <T>(
    resource: string,
    params?: RequestParams
  ): Promise<T | T[]> => {
    const url = params
      ? `${API_BASE_URL}/${resource}/${buildUrl(params)}`
      : `${API_BASE_URL}/${resource}`;

    const response = await fetchUtils<T>({
      method: "GET",
      url,
    });

    // A changer quand back seras implementé par response
    const res = { data: response } as T | T[];
    return res;
  },

  getOne: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    const response = await fetchUtils<T>({
      method: "GET",
      url,
    });

    // A changer quand back seras implementé par response.data
    const res = { data: response } as T | T[];
    return res;
  },

  getMany: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    console.log(resource, params);
    throw new Error("Function not implemented.");
  },

  create: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    console.log(resource, params);
    throw new Error("Function not implemented.");
  },

  update: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    console.log(resource, params);
    throw new Error("Function not implemented.");
  },

  delete: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    console.log(resource, params);
    throw new Error("Function not implemented.");
  },

  deleteMany: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    console.log(resource, params);
    throw new Error("Function not implemented.");
  },
};
