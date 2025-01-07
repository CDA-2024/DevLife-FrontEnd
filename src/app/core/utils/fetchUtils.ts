import { RequestOption } from "../schemas/request/RequestOptions.interface";
import { HttpMethod } from "../schemas/HttpMethode.type";
import { apiService } from "../services/apiService";

interface FetchParams {
  method: HttpMethod;
  url: string;
  body?: Record<string, unknown>;
  headers?: HeadersInit;
  useCache?: boolean;
}

export const fetchUtils = async <T>({
  method,
  url,
  body,
  headers,
  useCache,
}: FetchParams): Promise<{ data: T | T[] }> => {
  const isBodyRequired = method === "POST" || method === "PUT";

  if (isBodyRequired && !body) {
    throw new Error("Body is required for POST and PUT methods");
  }

  const options: RequestOption = {
    useCache,
    headers,
  };

  switch (method) {
    case "GET":
      return await apiService.get<T>(url, options);
    case "POST":
      return await apiService.post<T>(url, body ?? {}, options);
    case "PUT":
      return await apiService.put<T>(url, body ?? {}, options);
    case "DELETE":
      return await apiService.delete<T>(url, options);
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
