import { useState, useCallback } from "react";
import { RequestStates } from "../schemas/request/RequestStates.interface";

export const useApiCallWithState = () => {
  const [requestStates, setRequestStates] = useState<RequestStates>({});

  const callApiWithState = useCallback(
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

        throw e;
      }
    },
    []
  );

  return { requestStates, callApiWithState };
};
