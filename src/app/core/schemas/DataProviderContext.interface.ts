import { DataProvider } from "./DataProvider.interface";
import { RequestStates } from "./request/RequestStates.interface";

export interface DataProviderContext {
  dataProvider: DataProvider;
  requestStates: RequestStates;
  callApiWithState: <T>(key: string, apiCall: () => Promise<T>) => Promise<T>;
}
