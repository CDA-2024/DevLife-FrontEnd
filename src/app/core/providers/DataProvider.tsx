import { ReactNode, useMemo } from "react";
import { DataProvider as IDataProvider } from "../schemas/DataProvider.interface";
import { DataProviderContext } from "../contexts/dataProviderContext";
import { useTrackApiCall } from "../utils/apiCallUtils";
import { CacheManager } from "../services/cacheManager";

export const DataProvider = ({
  provider,
  children,
}: {
  provider: IDataProvider;
  children: ReactNode;
}) => {
  const { requestStates, trackApiCall } = useTrackApiCall();
  const cacheManager = useMemo(() => new CacheManager(), []);
  

  const contextValue = useMemo(
    () => ({
      provider,
      requestStates,
      trackApiCall,
      cacheManager,
      
    }),
    [provider, requestStates, trackApiCall, cacheManager]
  );

  return (
    <DataProviderContext.Provider value={contextValue}>
      {children}
    </DataProviderContext.Provider>
  );
};
