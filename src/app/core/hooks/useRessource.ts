/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";
import { useGet, useCreate, useUpdate, useDelete } from "./useApi";
import {
  ParamsCreate,
  ParamsDelete,
  ParamsUpdate,
  ParamsGet,
} from "../schemas/ApiService.interface";
import { cacheManager } from "../services/cacheManager";

export const useResource = <T extends Identifiable>(resource: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const { fetch } = useGet<T[]>(resource);
  const { create } = useCreate<T>(resource);
  const { update } = useUpdate<T>(resource);
  const { delete: deleteItem } = useDelete<T>(resource);

  const updateData = (newData: T[]) => {
    setData(newData);
    cacheManager.set(resource, newData);
    localStorage.setItem(resource, JSON.stringify(newData));
  };

  const handleFetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch({});
      updateData(response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFetchDataWithCache = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      
      const cachedData =
        cacheManager.get(resource) ||
        JSON.parse(localStorage.getItem(resource) ?? "null");

      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        const response = await fetch({});
        updateData(response);
      } else {
        const response = await fetch({});
        updateData(response);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

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

  const getOne = async (params: ParamsGet) => {
    setLoading(true);
    setError(null);
    try {
      const cachedItem =
        cacheManager.get(`${resource}_${params.id}`) ||
        JSON.parse(localStorage.getItem(`${resource}_${params.id}`) ?? "null");
      if (cachedItem) {
        setLoading(false);
        return cachedItem;
      }

      const response = await fetch(params);
      cacheManager.set(`${resource}_${params.id}`, response);
      localStorage.setItem(
        `${resource}_${params.id}`,
        JSON.stringify(response)
      );
      return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAll = async () => {
    await handleFetchDataWithCache();
    return data;
  };

  useEffect(() => {
    handleFetchDataWithCache();
  }, []);

  return {
    data,
    loading,
    error,
    reset: handleFetchData,
    fetchData: handleFetchDataWithCache,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    getOne,
    getAll,
  };
};

interface Identifiable {
  id: string | number;
}
