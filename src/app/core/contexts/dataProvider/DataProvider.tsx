import { ReactNode } from "react";
import { DataProvider as IDataProvider } from "../../schemas/DataProvider.interface";
import { DataProviderContext } from "./dataProviderContext";

export const DataProvider = ({
  provider,
  children,
}: {
  provider: IDataProvider;
  children: ReactNode;
}) => {
  return (
    <DataProviderContext.Provider value={provider}>
      {children}
    </DataProviderContext.Provider>
  );
};
