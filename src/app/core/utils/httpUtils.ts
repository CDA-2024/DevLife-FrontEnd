import { ParamsGetAll } from "../schemas/DataProvider.interface";

export function buildUrl(params: ParamsGetAll ) {
  const queryParams = [];

  if (params.pagination?.page) queryParams.push(`_page=${params.pagination?.page}`);
  if (params.pagination?.perPage) queryParams.push(`_limit=${params.pagination?.perPage}`);
  if (params.sort?.field) queryParams.push(`_sort=${params.sort?.field}`);
  if (params.sort?.order) queryParams.push(`_order=${params.sort?.order}`);

  return queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
}
