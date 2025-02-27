export interface ApiAuthService {
    get: <T>(resource: string, params: ParamsGet) => Promise<T>;
    register: <T, D>(resource: string, params: ParamsCreate<D>) => Promise<T>;
    login: <T, D>(resource: string, params: ParamsLogin<D>) => Promise<T>;
    update: <T, D>(resource: string, params: ParamsUpdate<D>) => Promise<T>;
    delete: <T>(resource: string, params: ParamsDelete) => Promise<T>;
    verifyEmail: <T>(token: string) => Promise<T>;
}

export interface ParamsGet extends Params, PaginationPayload, SortPayload {
    id?: number;
    ids?: number[];
    email?: string;
}

export interface ParamsGetOne extends Params {
    id: number;
}

export interface ParamsLogin<D> extends Params {
    data: D;
}

export interface ParamsCreate<D> extends Params {
    data: D;
}

export interface ParamsUpdate<D> extends Params {
    id: string;
    data: D;
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
