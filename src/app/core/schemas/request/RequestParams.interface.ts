export interface RequestParams {
  id?: string;
  ids?: string[];
  page?: number;
  perPage?: number;
  field?: string;
  order?: string;
  headers?: HeadersInit;
  useCache?: boolean;
  data?: Record<string, unknown>;
}
