export interface ApiService {
  get: <T>(resource: string, params: ParamsGet) => Promise<T[] | T>;
  getOne: <T>(resource: string, params: ParamsGetOne) => Promise<T>;
  create: <T>(resource: string, params: ParamsCreate<T>) => Promise<T[] | T>;
  createOne: <T>(resource: string, params: ParamsCreate<T>) => Promise<T>;
  update: <T>(resource: string, params: ParamsUpdate<T>) => Promise<T[] | T>;
  updateOne: <T>(resource: string, params: ParamsUpdate<T>) => Promise<T>;
  delete: <T>(resource: string, params: ParamsDelete) => Promise<T[] | T>;
  deleteOne: <T>(resource: string, params: ParamsDelete) => Promise<T>;
}

export interface ParamsGet extends Params {
  id?: string;
  ids?: string[];
  pagination?: PaginationPayload;
  sort?: SortPayload;
}

export interface ParamsGetOne extends Params {
  id: string;
}

export interface ParamsCreate<T> extends Params {
  data: T | T[];
}

export interface ParamsCreateOne<T> extends Params {
  data: T ;
}

export interface ParamsUpdate<T> extends Params {
  id?: string;
  ids?: string[];
  data: T | T[];
}

export interface ParamsUpdateOne<T> extends Params {
  id: string;
  data: T ;
}

export interface ParamsDelete extends Params {
  id?: string;
  ids?: string[];
}

export interface Params {
  useCache?: boolean;
  signal?: AbortSignal;
}

export interface SortPayload {
  field: string;
  order: "ASC" | "DESC";
}

export interface PaginationPayload {
  page: number;
  perPage: number;
}
