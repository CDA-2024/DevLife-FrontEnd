import { RequestOption } from "../schemas/RequestOptions.interface";
import { getCache, setCache } from "./cahe";
import { httpClient } from "./httpClient";

const API_BASE_URL = "http://localhost:3000";

export const apiService = {
  get: async <T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>,
    { useCache = false, headers }: RequestOption = {}
  ): Promise<T> => {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, String(value))
      );
    }

    if (useCache && getCache<T>(url.toString())) {
      return getCache<T>(url.toString())!;
    }

    const response = await httpClient<T>(url.toString(), {
      method: "GET",
      headers,
    });

    if (useCache) {
      setCache(url.toString(), response);
    }

    return response;
  },
};
