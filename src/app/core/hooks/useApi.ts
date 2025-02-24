import { useEffect, useState } from "react";
import { ParamsCreate, ParamsGet } from "../schemas/ApiService.interface";
import { apiService } from "../services/apiService";
import { useApiCallTracker } from "./useApiCallTracker";
import { ResponseApi } from "../schemas/response/ResponseApi.interface";

export const useGet = <T>(
  resource: string,
  params: ParamsGet = {}
): ResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `get:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T>([] as T);

  const fetchData = async () => {
    return await track(key, async () => {
      const response = await apiService.get<T>(resource, params);
      setData(response);
      return response;
    });
  };

  useEffect(() => {
    fetchData();

    return () => {
      untrack(key);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: data,
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: fetchData,
  };
};

export const useCreate = <T>(
  resource: string,
  params: ParamsCreate<T>
): ResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `create:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T>([] as T);

  const createData = async () => {
    return await track(key, async () => {
      const response = await apiService.create<T>(resource, params);
      setData(response);
      return response;
    });
  };

  useEffect(() => {
    createData();

    return () => {
      untrack(key);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: data,
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: createData,
  };
};

export const useUpdate = <T>(
  resource: string,
  params: ParamsCreate<T>
): ResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `update:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T>([] as T);

  const updateData = async () => {
    return await track(key, async () => {
      const response = await apiService.update<T>(resource, params);
      setData(response);
      return response;
    });
  };

  useEffect(() => {
    updateData();

    return () => {
      untrack(key);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: data,
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: updateData,
  };
};

export const useDelete = <T>(
  resource: string,
  params: ParamsCreate<T>
): ResponseApi<T> => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `delete:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T>([] as T);

  const deleteData = async () => {
    return await track(key, async () => {
      const response = await apiService.delete<T>(resource, params);
      setData(response);
      return response;
    });
  };

  useEffect(() => {
    deleteData();

    return () => {
      untrack(key);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: data,
    key: key,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: deleteData,
  };
};
