import { RequestParams } from "../schemas/request/RequestParams.interface";

export const buildHeaders = (customHeaders?: HeadersInit): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("authToken");

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (customHeaders) {
    return { ...headers, ...customHeaders };
  }

  return headers;
};

export function buildUrl(params: RequestParams) {
  const queryParams = [];

  if (params.page) queryParams.push(`_page=${params.page}`);
  if (params.perPage) queryParams.push(`_limit=${params.perPage}`);
  if (params.field) queryParams.push(`_sort=${params.field}`);
  if (params.order) queryParams.push(`_order=${params.order}`);

  return queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
}

export const handleHttpErrors = async (response: Response) => {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      errorBody?.message || `HTTP error! Status: ${response.statusText}`;
    throw new Error(
      `HTTP error! Status: ${response.status}, Message ${message}`
    );
  }
};

export const handleTimeout = (timeout: number) => {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
  }, timeout);

  return controller;
};
