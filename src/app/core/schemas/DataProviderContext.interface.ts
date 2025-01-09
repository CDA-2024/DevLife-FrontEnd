import { CacheManager } from "../services/cacheManager";
import { DataProvider } from "./DataProvider.interface";
import { RequestStates } from "./request/RequestStates.interface";

export interface DataProviderContext {
  provider: DataProvider;
  requestStates: RequestStates;
  trackApiCall: <T>(key: string, apiCall: () => Promise<T>) => Promise<T>;
  cacheManager: CacheManager;
}
