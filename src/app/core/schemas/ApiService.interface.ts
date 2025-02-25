export interface ApiService {
  get: <T>(resource: string, params: ParamsGet) => Promise<T>;
  create: <T>(resource: string, params: ParamsCreate<T>) => Promise<T>;
  update: <T>(resource: string, params: ParamsUpdate<T>) => Promise<T>;
  delete: <T>(resource: string, params: ParamsDelete) => Promise<T>;
}

export interface ParamsGet extends Params, PaginationPayload, SortPayload {
  id?: string | number;
  ids?: string[];
}

export interface ParamsGetOne extends Params {
  id: string;
}

export interface ParamsCreate<T> extends Params {
  data: T ;
}

export interface ParamsUpdate<T> extends Params {
  id: string;
  data: T ;
}

export interface ParamsDelete extends Params {
  id: string;
}

export interface Params {
  useCache?: boolean;
  signal?: AbortSignal;
}

export interface SortPayload {
  field?: string;
  order?: "ASC" | "DESC";
}

export interface PaginationPayload {
  page?: number;
  perPage?: number;
}
