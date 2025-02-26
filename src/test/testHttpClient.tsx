import { useState } from "react";
import { Button } from "../app/shared/components/Shadcn/ui/button";
import { Employee } from "../app/shared/interfaces/Employee.interface";

import { useEmployee } from "../app/shared/hooks/useEmployeeApi";

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
  const {
    data: allEmployee,
    loading,
    error,
    create,
    update,
    getOne,
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
    const response = await create(employee);
    console.log(response);
  };

  const updateEmployee = async () => {
    const response = await update("147", employeeu);
    console.log(response);
  };

  const deleteEmployee = async () => {
    const response = await deleteItem("147");
    console.log(response);
  };

  const getOneEmployee = async () => {
    const response = await getOne(147);
    console.log(response);
  };

  return (
    <div>
      <h2>Child Component Mounted</h2>
      <Button onClick={() => saveEmployee()}>create</Button>
      <Button onClick={() => updateEmployee()}>update</Button>
      <Button onClick={() => deleteEmployee()}>delete</Button>
      <Button onClick={() => getOneEmployee()}>getone</Button>

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
