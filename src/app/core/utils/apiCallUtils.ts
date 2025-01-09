import { useState, useCallback } from "react";
import { RequestStates } from "../schemas/request/RequestStates.interface";

export const useTrackApiCall = () => {
  const MAX_REQUESTS = 100;
  const TIMEOUT = 20000;
  const [requestStates, setRequestStates] = useState<RequestStates>({});

  const _cleanUpRequestStates = () => {
    setRequestStates((prevState) => {
      const keys = Object.keys(prevState);
      if (keys.length > MAX_REQUESTS) {
        const keysToRemove = keys.slice(0, keys.length - MAX_REQUESTS);
        const updatedState = { ...prevState };
        keysToRemove.forEach((key) => delete updatedState[key]);
        return updatedState;
      }
      return prevState;
    });
  };

  const _cleanUpAfterTimeout = (key: string) => {
    setTimeout(() => {
      setRequestStates((prevState) => {
        const updatedState = { ...prevState };
        delete updatedState[key];
        return updatedState;
      });
    }, TIMEOUT);
  };

  const trackApiCall = useCallback(
    async <T>(key: string, apiCall: () => Promise<T>): Promise<T> => {
      setRequestStates((prevState) => ({
        ...prevState,
        [key]: { loading: true, error: null },
      }));

      try {
        const result = await apiCall();

        setRequestStates((prevState) => ({
          ...prevState,
          [key]: { loading: false, error: null },
        }));

        _cleanUpAfterTimeout(key);

        return result;
      } catch (e: unknown) {
        const errorMessage =
          e instanceof Error ? e.message : "An error occurred";

        setRequestStates((prevState) => ({
          ...prevState,
          [key]: {
            loading: false,
            error: errorMessage,
          },
        }));

        _cleanUpAfterTimeout(key);

        throw e;
      } finally {
        _cleanUpRequestStates();
      }
    },
    []
  );

  return { requestStates, trackApiCall };
};
