import { useEffect, useState } from "react";
import { ParamsGet, ParamsGetOne } from "../schemas/ApiService.interface";
import { apiService } from "../services/apiService";
import { useApiCallTracker } from "./useApiCallTracker";

export const useGet = <T>(resource: string, params: ParamsGet = {}) => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `get:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T | T[] | null>(null);

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
    data,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: fetchData,
  };
};

export const useGetOne = <T>(resource: string, params: ParamsGetOne) => {
  const { track, untrack, getState } = useApiCallTracker();
  const key = `getOne:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T | null>(null);

  const fetchData = async () => {
    return await track(key, async () => {
      const response = await apiService.getOne<T>(resource, params);
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
    data,
    loading: getState(key).loading,
    error: getState(key).error,
    refresh: fetchData,
  };
};
