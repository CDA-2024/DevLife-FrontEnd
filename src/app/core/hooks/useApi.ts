import {
  ParamsCreate,
  ParamsDelete,
  ParamsGet,
  ParamsUpdate,
} from "../schemas/ApiService.interface";
import { apiService } from "../services/apiService";
import { useApiCallTracker } from "./useApiCallTracker";
import {
  CreateResponseApi,
  DeleteResponseApi,
  GetResponseApi,
  UpdateResponseApi,
} from "../schemas/response/ResponseApi.interface";

export const useGet = <T>(resource: string): GetResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `get:${resource}`;

  const fetchData = async (params: ParamsGet = {}) => {
    try {
      const response = await track(key, async () => {
        return await apiService.get<T>(resource, params);
      });
      return response;
    } finally {
      untrack(key);
    }
  };

  return {
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    fetch: fetchData,
  };
};

export const useCreate = <T>(resource: string): CreateResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `create:${resource}`;

  const createData = async (params: ParamsCreate<T>) => {
    try {
      const response = await track(key, async () => {
        return await apiService.create<T>(resource, params);
      });
      return response;
    } finally {
      untrack(key);
    }
  };

  return {
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    create: createData,
  };
};

export const useUpdate = <T>(resource: string): UpdateResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `update:${resource}`;

  const updateData = async (params: ParamsUpdate<T>) => {
    try {
      const response = await track(key, async () => {
        return await apiService.update<T>(resource, params);
      });
      return response;
    } finally {
      untrack(key);
    }
  };

  return {
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    update: updateData,
  };
};

export const useDelete = <T>(resource: string): DeleteResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `delete:${resource}`;

  const deleteData = async (params: ParamsDelete) => {
    try {
      const response = await track(key, async () => {
        return await apiService.delete<T>(resource, params);
      });
      return response;
    } finally {
      untrack(key);
    }
  };

  return {
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    delete: deleteData,
  };
};
