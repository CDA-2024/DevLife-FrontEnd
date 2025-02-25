import { useEffect, useState } from "react";
import { useGet, useCreate, useUpdate, useDelete } from "./useApi";
import {
  ParamsCreate,
  ParamsDelete,
  ParamsUpdate,
  ParamsGet,
} from "../schemas/ApiService.interface";

export const useResource = <T>(resource: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const { fetch } = useGet<T[]>(resource);
  const { create } = useCreate<T>(resource);
  const { update } = useUpdate<T>(resource);
  const { delete: deleteItem } = useDelete<T>(resource);

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch({});
      setData(response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (params: ParamsCreate<T>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await create(params);
      await handleFetchData();
       return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (params: ParamsUpdate<T>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await update(params);
      await handleFetchData();
       return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (params: ParamsDelete) => {
    setLoading(true);
    setError(null);
    try {
     const response = await deleteItem(params);
      await handleFetchData();
       return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOne  = async (params: ParamsGet) => {
    setLoading(true);
    setError(null);
    try {
      const foundItem = data.find(
        (item) => (item as { id: string | number }).id === params.id
      );
      if (foundItem) {
        return foundItem;
      }

      const response = await (fetch(params)) as T;
      return response ;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAll = async () => {
   const response = await handleFetchData();
  return response
  };

  useEffect(() => {
    handleFetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    fetchData: handleFetchData,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    getOne,
    getAll,
  };
};
