import { useRef, useState } from "react";

export interface ApiCallState {
  loading: boolean;
  error: Error | null;
}

export interface ApiCallTracker {
  track: <T>(key: string, apiCall: () => Promise<T>) => Promise<T>;
  setError: (key: string, error: Error) => void;
  getState: (key: string) => ApiCallState;
  untrack: (key: string) => void;
}

export const useApiCallTracker = (): ApiCallTracker => {
  const requestStates = useRef<
    Record<string, { loading: boolean; error: Error | null }>
  >({});

  const [, forceRender] = useState(0);

  const track = async <T>(
    key: string,
    apiCall: () => Promise<T>
  ): Promise<T> => {
    requestStates.current[key] = { loading: true, error: null };
    forceRender((prev) => prev + 1);

    try {
      const response = await apiCall();
      requestStates.current[key] = { loading: false, error: null };
      return response;
    } catch (error) {
      requestStates.current[key] = { loading: false, error: error as Error };
      throw error;
    } finally {
      forceRender((prev) => prev - 1);
    }
  };

  const untrack = (key: string) => {
    delete requestStates.current[key];
    forceRender((prev) => prev - 1);
  };

  const setError = (key: string, error: Error) => {
    if (!requestStates.current[key]) {
      requestStates.current[key] = { loading: false, error };
    } else {
      requestStates.current[key].error = error;
    }
    forceRender((prev) => prev + 1);
  };

  const getState = (key: string) => {
    return requestStates.current[key] || { loading: false, error: null };
  };

  return { track, setError, getState, untrack };
};
