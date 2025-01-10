import { useRef, useState } from "react";

export const useApiCallTracker = () => {
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
    console.log(`Untracking key: ${key}`);
    delete requestStates.current[key];
    forceRender((prev) => prev - 1);
  };

  const getState = (key: string) => {
    return requestStates.current[key] || { loading: false, error: null };
  };

  return { track, getState, untrack };
};
