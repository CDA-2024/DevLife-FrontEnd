export interface ResponseHttpClient<T> {
  status: number;
  statusText: string;
  headers: Headers;
  body: string;
  json?: T ;
}
