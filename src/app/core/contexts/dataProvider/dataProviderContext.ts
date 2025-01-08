import { createContext } from "react";
import { DataProviderContext as IDataProviderContext } from "../../schemas/DataProviderContext.interface";

export const DataProviderContext = createContext<IDataProviderContext | null>(null);
