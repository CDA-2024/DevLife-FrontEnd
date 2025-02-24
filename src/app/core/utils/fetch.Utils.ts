import { RequestOptions } from "../schemas/request/RequestOptions.interface";
import { ResponseHttpClient } from "../schemas/response/ResponseHttpClient.interface";
import { httpClient } from "../services/httpClient";

export const fetchRequestJson = async <T>(
  url: string,
  options: RequestOptions<T> = {}
): Promise<T> => {
  const headers = createHeadersFromOptions<T>(options);

  const response = await httpClient<T>(url, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      ...headers,
    },
  });

  if (!response) {
    throw new Error(`Invalid response from ${url}`);
  }

  if (options.method?.toUpperCase() === "DELETE" && response.status === 200) {
    return {} as T;
  }

  const jsonData = response.json;


  if (!jsonData) {
    throw new Error("No Valid Json.");
  }

  return jsonData;
};

export const fetchRequest = async <T>(
  url: string,
  options: RequestOptions<T> = {}
): Promise<ResponseHttpClient<T>> => {
  const response = await httpClient<T>(url, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      ...options.headers,
    },
  });

  if (!response) {
    throw new Error(`Invalid response from ${url}`);
  }

  return response;
};

const createHeadersFromOptions = <T>(
  options: RequestOptions<T>
): HeadersInit => {
  let requestHeaders = {};

  const hasBody = !!options.body;
  const isGetMethod = !options?.method || options?.method === "GET";
  const isFormData = options?.body instanceof FormData;

  if (hasBody && !isGetMethod && !isFormData) {
    requestHeaders = {
      ...requestHeaders,
      "content-type": "application/json",
    };
  }

  if (options.user?.authenticated && options.user.token) {
    requestHeaders = {
      ...requestHeaders,
      Authorization: options.user.token,
    };
  }

  return requestHeaders;
};
