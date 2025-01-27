export interface ResponseApi<T> {
  data: T;
  key: string;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<T>;
}