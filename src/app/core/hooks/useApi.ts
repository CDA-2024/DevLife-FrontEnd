import { useEffect, useState } from "react";
import { ParamsGet } from "../schemas/ApiService.interface";
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
