export interface ResponseApi<T> {
    data: T ;
    loading: boolean;
    error: Error | null;
    refresh: () => Promise<T>;
}