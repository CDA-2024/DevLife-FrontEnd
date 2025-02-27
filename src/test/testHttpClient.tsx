import { useState, useEffect } from "react";
import { Button } from "../app/shared/components/Shadcn/ui/button";
import { Employee } from "../app/shared/interfaces/Models/Employee.interface";
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
    createEmployee,
    updateEmployee,
    getOneEmployee,
    deleteEmployee,
    fetchData,
  } = useEmployee();

  // Fetch data initially
  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    await createEmployee(employee);
    fetchData();
  };

  const update = async () => {
    await updateEmployee("147", employeeu);
    fetchData();
  };

  const deleteI = async () => {
    await deleteEmployee("147");
    fetchData();
  };

  const getOne = async () => {
    const response = await getOneEmployee(147);
    console.log(response);
  };

  return (
    <div>
      <h2>Child Component Mounted</h2>
      <Button onClick={() => saveEmployee()}>create</Button>
      <Button onClick={() => update()}>update</Button>
      <Button onClick={() => deleteI()}>delete</Button>
      <Button onClick={() => getOne()}>getone</Button>
      <div>
        <ul>
          {allEmployee &&
            allEmployee.map((allEmploye) => (
              <li key={allEmploye.id}>{allEmploye.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TestHttpClient;
