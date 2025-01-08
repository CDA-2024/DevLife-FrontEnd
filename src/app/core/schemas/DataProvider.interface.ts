import { RequestOption } from "./request/RequestOptions.interface";
import { RequestParams } from "./request/RequestParams.interface";

export interface DataProvider {
  getList: <T>(
    resource: string,
    params?: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  getOne: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  create: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  update: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  delete: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  deleteMany: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
  getMany: <T>(
    resource: string,
    params: RequestParams & RequestOption
  ) => Promise<T | T[]>;
}
