import { useEffect, useState } from "react";
import { useDataProvider } from "../providers/useDataProvider";
import { ParamsGet, ParamsGetAll } from "../schemas/DataProvider.interface";

export const useGetAll = <T>(resource: string, params: ParamsGetAll = {}) => {
  const context = useDataProvider();

  if (!context) {
    throw new Error("useGetList must be used within a DataProvider");
  }

  const { trackApiCall, requestStates, provider } = context;

  const key = `getAll:${resource}:${JSON.stringify(params || {})}`;
  const [data, setData] = useState<T[] | null>(null);

  const state = requestStates[key] || { loading: false, error: null };

  const fetchData = async () => {
    await trackApiCall<T[]>(key, async () => {
      const response = await provider.getAll<T>(resource, params);
      setData(response);
      console.log("from use", response);
      return response;
    });
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading: state.loading,
    error: state.error,
    refresh: fetchData,
  };
};

export const useGet = <T>(resource: string, params: ParamsGet) => {
  const context = useDataProvider();

  if (!context) {
    throw new Error("useGetList must be used within a DataProvider");
  }

  const { trackApiCall, requestStates, provider } = context;

  const key = `get:${resource}:${JSON.stringify(params)}`;
  const [data, setData] = useState<T | null>(null);

  const state = requestStates[key] || { loading: false, error: null };

  const fetchData = async () => {
    await trackApiCall<T>(key, async () => {
      const response = await provider.get<T>(resource, params);
      setData(response);
      console.log("from use", response);
      return response;
    });
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading: state.loading,
    error: state.error,
    refresh: fetchData,
  };
};
