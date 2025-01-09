import { useCallback } from "react";
import { useGet, useGetAll } from "../app/core/hooks/useApi";
import { Employe } from "../app/pages/employePage/interfaces/Employe.interface";
import { Button } from "../app/shared/components/Shadcn/ui/button";

const TestHttpClient = () => {
  const { data, loading, error, refresh } = useGetAll<Employe>("staff");
  const {
    data: data1,
    error: error1,
    loading: loading1,
    refresh: refresh1,
  } = useGet<Employe>("staff", { id: "1a" });

  const handleRefresh = useCallback(() => refresh(), [refresh]);

  if (loading1 || loading) {
    return <div>Loading...</div>;
  }

  if (error1 || error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);
  console.log(data1);

  return (
    <div>
      <h1>Data:</h1>
      <Button onClick={() => handleRefresh()}>refetch Data</Button>
      <Button onClick={refresh1}>refetch Data1</Button>
    </div>
  );
};

export default TestHttpClient;
