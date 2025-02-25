import { useState } from "react";
import { Button } from "../app/shared/components/Shadcn/ui/button";
import { Employee } from "../app/pages/employePage/interfaces/Employee.interface";
import { useResource } from "../app/core/hooks/useRessource";
import { useGetOneEmployee } from "../app/pages/employePage/hooks/useEmployeeApi";

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

const useEmployee = () => {
  return useResource<Employee>("employee");
};

const ChildComponent = () => {
  const {
    data: allEmployee,
    loading,
    error,
    create,
    update,
    delete: deleteItem,
  } = useEmployee();



  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  

  const employee: Employee = {
    name: "testlqksdfjhgmlkqjsdhf qdsfsdfqsdfqsdf sdfqsdfqsdfqs",
    id_skill: 7,
    salary: 500,
  };

  const employeeu: Employee = {
    id: 147,
    name: "msdlkfjhgmlkjsdfhg",
    id_skill: 7,
    salary: 500,
  };

 

  console.log(allEmployee);

  const saveEmployee = async () => {
    const response = await create({ data: employee });
    console.log(response);
  };

  const updateEmployee = async () => {
    const response = await update({ id: "147", data: employeeu });
    console.log(response);
  };

  const deleteEmployee = async () => {
    const response = await deleteItem({ id: "147" });
    console.log(response);
  };


  return (
    <div>
      <h2>Child Component Mounted</h2>
      <Button onClick={() => saveEmployee()}>create</Button>
      <Button onClick={() => updateEmployee()}>update</Button>
      <Button onClick={() => deleteEmployee()}>delete</Button>

      <div>
        <ul>
          {allEmployee.map((allEmploye) => (
            <li key={allEmploye.id}>{allEmploye.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestHttpClient;
