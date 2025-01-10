import { useState } from "react";
import { useGet, useGetOne} from "../app/core/hooks/useApi";
import { Employe } from "../app/pages/employePage/interfaces/Employe.interface";
import { Button } from "../app/shared/components/Shadcn/ui/button";

const TestHttpClient = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <Button onClick={() => setShowChild((prev) => !prev)}>
        {showChild ? "Unmount Child" : "Mount Child"}
      </Button>
      {showChild && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  const { data, loading, error } = useGetOne<Employe>("staff", {id: "1a"});
  const { data: alldata, loading: allloading, error: allerror } = useGet<Employe[]>("staff")

  

  if (loading || allloading) {
    return <p>Loading...</p>;
  }

  if (error || allerror) {
    return <p>{error?.message}</p>;
  }

  if (data) {
    console.log(data);
    console.log(alldata);
  }

  return (
    <div>
      <p>Data loaded!</p>
      
    </div>
  );
};

export default TestHttpClient;
