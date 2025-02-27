import {
    ApiAuthService,
    ParamsCreate,
    ParamsDelete,
    ParamsGet,
    ParamsLogin,
    ParamsUpdate,
} from "../schemas/ApiAuthService.interface";
import { fetchRequestJson } from "../utils/fetch.Utils";

const API_BASE_URL = "http://localhost:3000/api";

export const authApiService: ApiAuthService = {
    get: async <T>(resource: string, params: ParamsGet): Promise<T> => {
        const queryParams = new URLSearchParams();
        
        if (params.email) {
            queryParams.append('email', params.email);
        }
        
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.perPage) queryParams.append('perPage', params.perPage.toString());
        if (params.field) queryParams.append('field', params.field);
        if (params.order) queryParams.append('order', params.order);
        
        let url = params.id
            ? `${API_BASE_URL}/${resource}/${params.id}`
            : `${API_BASE_URL}/${resource}`;
        
        const queryString = queryParams.toString();
        if (queryString) {
            url += `?${queryString}`;
        }

        const response = await fetchRequestJson<T>(url, {
            useCache: params?.useCache,
        });

        return response;
    },

    register: async <T, D>(resource: string, params: ParamsCreate<D>): Promise<T> => {
        const url = `${API_BASE_URL}/${resource}`;

        const response = await fetchRequestJson<T>(url, {
            method: "POST",
            body: params.data as unknown as T,
        });

        console.log(response);

        return response;
    },

    login: async <T, D>(resource: string, params: ParamsLogin<D>): Promise<T> => {
        const url = `${API_BASE_URL}/${resource}`;

        const response = await fetchRequestJson<T>(url, {
            method: "POST",
            body: params.data as unknown as T,
        });

        return response;
    },

    update: async <T, D>(resource: string, params: ParamsUpdate<D>): Promise<T> => {
        const url = `${API_BASE_URL}/${resource}/${params.id}`;

        const response = await fetchRequestJson<T>(url, {
            method: "PUT",
            body: params.data as unknown as T,
        });

        return response;
    },

    delete: async <T>(resource: string, params: ParamsDelete): Promise<T> => {
        const url = `${API_BASE_URL}/${resource}/${params.id}`;

        const response = await fetchRequestJson<T>(url, {
            method: "DELETE",
        });

        return response;
    },

    verifyEmail: async <T>(token: string): Promise<T> => {
        const url = `${API_BASE_URL}/auth/verify-email?token=${encodeURIComponent(token)}`;
        
        const response = await fetchRequestJson<T>(url, {
            method: "GET"
        });
        
        return response;
    },
};
