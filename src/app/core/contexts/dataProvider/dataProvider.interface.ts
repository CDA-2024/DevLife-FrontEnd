import { RequestParams } from "../../schemas/request/RequestParams.interface";

export interface DataProvider {
  getList: <T>(resource: string, params?: RequestParams) => Promise<T | T[]>;
  getOne: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
  create: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
  update: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
  delete: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
  deleteMany: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
  getMany: <T>(resource: string, params: RequestParams) => Promise<T | T[]>;
}
