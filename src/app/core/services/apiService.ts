import { RequestOption } from "../schemas/request/RequestOptions.interface";
import { getCache, setCache } from "./cahe";
import { httpClient } from "./httpClient";

const httpRequest = async <T>(
  method: string,
  url: string,
  body?: Record<string, unknown>,
  { useCache = false, headers }: RequestOption = {}
): Promise<{ data: T | T[] }> => {
  if (useCache && getCache<T>(url)) {
    return getCache<T>(url.toString())!;
  }

  const response = await httpClient<T>(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers,
  });

  if (useCache) {
    setCache(url, response);
  }

  return response;
};

export const apiService = {
  get: <T>(
    url: string,
    options?: RequestOption
  ): Promise<{ data: T | T[] }> => {
    return httpRequest<T>("GET", url, undefined, options);
  },

  post: <T>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: RequestOption
  ): Promise<{ data: T | T[] }> => {
    return httpRequest<T>("POST", endpoint, body, options);
  },

  put: <T>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: RequestOption
  ): Promise<{ data: T | T[] }> => {
    return httpRequest<T>("PUT", endpoint, body, options);
  },

  patch: <T>(
    endpoint: string,
    body: Record<string, unknown>,
    options?: RequestOption
  ): Promise<{ data: T | T[] }> => {
    return httpRequest<T>("PATCH", endpoint, body, options);
  },

  delete: <T>(
    endpoint: string,
    options?: RequestOption
  ): Promise<{ data: T | T[] }> => {
    return httpRequest<T>("DELETE", endpoint, undefined, options);
  },
};
