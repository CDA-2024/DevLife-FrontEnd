import { ParamsCreate, ParamsDelete, ParamsGet, ParamsUpdate } from "../ApiService.interface";

export interface GetResponseApi<T> {
  key: string;
  loading: boolean;
  error: Error | null;
  fetch: (params: ParamsGet) => Promise<T>;
}

export interface CreateResponseApi<T> {
  key: string;
  loading: boolean;
  error: Error | null;
  create: (params: ParamsCreate<T>) => Promise<T>;
}

export interface UpdateResponseApi<T> {
  key: string;
  loading: boolean;
  error: Error | null;
  update: (params: ParamsUpdate<T>) => Promise<T>;
}

export interface DeleteResponseApi<T> {
  key: string;
  loading: boolean;
  error: Error | null;
  delete: (params: ParamsDelete) => Promise<T>;
}
