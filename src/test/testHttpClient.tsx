/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useDataProvider } from "../app/core/contexts/dataProvider/useDataProvider";

const TestHttpClient: React.FC = () => {
  const { callApiWithState, requestStates, dataProvider } = useDataProvider();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await callApiWithState("fetchdata", async () => {
        const response = await dataProvider.getList("staff");
        console.log(response);
        setData(response); 
      });
    };

    fetchData();
  }, [callApiWithState, dataProvider]); 

  const fetchResourcesState = requestStates["fetchdata"] || {
    loading: false,
    error: null,
  };

  if (fetchResourcesState.loading) {
    return <div>Loading...</div>;
  }

  if (fetchResourcesState.error) {
    return <div>Error: {fetchResourcesState.error}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestHttpClient;