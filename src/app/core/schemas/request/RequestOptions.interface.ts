import { RequestMethod } from "./RequestMethode.type";

export interface RequestOptions<T> {
  useCache?: boolean;
  headers?: HeadersInit;
  method?: RequestMethod;
  body?: T;
  user?: {
    authenticated?: boolean;
    token?: string;
  };
}
