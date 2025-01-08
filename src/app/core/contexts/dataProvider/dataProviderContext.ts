import { createContext } from "react";
import { DataProvider as IDataProvider } from "../../schemas/DataProvider.interface";

export const DataProviderContext = createContext<IDataProvider | null>(null);
