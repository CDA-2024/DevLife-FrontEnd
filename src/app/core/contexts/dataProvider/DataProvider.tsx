import { ReactNode, useMemo } from "react";
import { DataProvider as IDataProvider } from "../../schemas/DataProvider.interface";
import { DataProviderContext } from "./dataProviderContext";
import { useApiCallWithState } from "../../utils/apiCallUtils";

export const DataProvider = ({
  provider,
  children,
}: {
  provider: IDataProvider;
  children: ReactNode;
}) => {
  const { requestStates, callApiWithState } = useApiCallWithState();

  const contextValue = useMemo(
    () => ({
      dataProvider: provider,
      requestStates,
      callApiWithState,
    }),
    [provider, requestStates, callApiWithState]
  );

  return (
    <DataProviderContext.Provider value={contextValue}>
      {children}
    </DataProviderContext.Provider>
  );
};
