import { RequestOptions } from "../schemas/request/RequestOptions.interface";
import { ResponseHttpClient } from "../schemas/response/ResponseHttpClient.interface";
import { httpClient } from "../services/httpClient";

export const fetchRequestJson = async <T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const headers = createHeadersFromOptions(options);

  const response = await httpClient<T>(url, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      ...headers,
    },
  });

  const jsonData = response.json;

  if (!jsonData) {
    throw new Error("No Valid Json.");
  }

  return jsonData;
};

export const fetchRequest = async <T>(
  url: string,
  options: RequestOptions = {}
): Promise<ResponseHttpClient<T>> => {
  const response = await httpClient<T>(url, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      ...options.headers,
    },
  });

  return response;
};

const createHeadersFromOptions = (options: RequestOptions): HeadersInit => {
  const requestHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;
  const hasBody = options.body;
  const isContentTypeSet = requestHeaders.has("Content-Type");
  const isGetMethod = !options?.method || options?.method === "GET";
  const isFormData = options?.body instanceof FormData;

  const shouldSetContentType =
    hasBody && !isContentTypeSet && !isGetMethod && !isFormData;
  if (shouldSetContentType) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (options.user) {
    if (options.user.authenticated && options.user.token) {
      requestHeaders.set("Authorization", options.user.token);
    }
  }

  return requestHeaders;
};
