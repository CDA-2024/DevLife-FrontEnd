/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestParams } from "../../schemas/request/RequestParams.interface";
import { fetchUtils } from "../../utils/fetchUtils";
import { buildUrl } from "../../utils/httpUtils";
import { DataProvider } from "./dataProvider.interface";

const API_BASE_URL = "http://localhost:3000";

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

    // A changer quand back seras implementé par response.data
    return response.data;
  },

  getOne: async <T>(
    resource: string,
    params: RequestParams
  ): Promise< T | T[] > => {
    const url = `${API_BASE_URL}/${resource}/${params.id}`;

    const response = await fetchUtils<T>({
      method: "GET",
      url,
    });

    // A changer quand back seras implementé par response.data 
    return response;
  },

  getMany: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    const url = `${API_BASE_URL}/${resource}/${params.ids}/${buildUrl(params)}`;

    const response = await fetchUtils<T>({
      method: "GET",
      url,
    });

    // A changer quand back seras implementé par response.data 
    return response;
  },

  create: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    throw new Error("Function not implemented.");
  },

  update: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    throw new Error("Function not implemented.");
  },

  delete: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    throw new Error("Function not implemented.");
  },

  deleteMany: async <T>(
    resource: string,
    params: RequestParams
  ): Promise<T | T[]> => {
    throw new Error("Function not implemented.");
  },
};
