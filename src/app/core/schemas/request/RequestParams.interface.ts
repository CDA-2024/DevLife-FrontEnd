export interface RequestParams {
  id?: string;
  ids?: string[];
  page?: number;
  perPage?: number;
  field?: string;
  order?: string;
  data?: Record<string, unknown>;
}
