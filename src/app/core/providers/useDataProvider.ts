import { useContext } from "react";
import { DataProviderContext } from "../contexts/dataProviderContext";
import { DataProviderContext as IDataProviderContext } from "../schemas/DataProviderContext.interface";

export const useDataProvider = (): IDataProviderContext => {
  const context = useContext(DataProviderContext);
  if (!context) {
    throw new Error(
      "useDataProvider must be used within a DataProviderProvider"
    );
  }
  return context;
};
