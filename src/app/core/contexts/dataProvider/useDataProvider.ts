import { useContext } from "react";
import { DataProvider } from "../../schemas/DataProvider.interface";
import { DataProviderContext } from "./dataProviderContext";

export const useDataProvider = (): DataProvider => {
  const context = useContext(DataProviderContext);
  if (!context) {
    throw new Error(
      "useDataProvider must be used within a DataProviderProvider"
    );
  }
  return context;
};
