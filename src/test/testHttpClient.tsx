import { useState } from "react";
import { useGet } from "../app/core/hooks/useApi";
import { Employee } from "../app/pages/employePage/interfaces/Employee.interface";
import { Button } from "../app/shared/components/Shadcn/ui/button";
import { useGetEmployees } from "../app/pages/employePage/hooks/useEmployeeApi";

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
  //const { data, loading, error } = useGet<Employee>("staff");
  const { data, loading, error } =useGetEmployees(); 

  const {
    data: datas,
    loading: allloading,
    error: allerror,
  } = useGet<Employee[]>("staff");

  if (loading || allloading) {
    return <p>Loading...</p>;
  }

  if (error || allerror) {
    return <p>{error?.message}</p>;
  }

  if (data) {
    console.log(data);
    //console.log(emmployees);
    
  }

  return (
    <div>
      <p>Data loaded!</p>
    </div>
  );
};

export default TestHttpClient;
