import { RequestMethod } from "./RequestMethode.type";

export interface RequestOptions {
  useCache?: boolean;
  headers?: HeadersInit;
  method?: RequestMethod;
  body?:
    | Record<string, unknown>
    | string
    | FormData
    | URLSearchParams
    | Blob
    | ArrayBuffer;
  user?: {
    authenticated?: boolean;
    token?: string;
  };
}
