import { useEffect, useState } from "react";
import { Button } from "../app/shared/components/Shadcn/ui/button";
import { apiService } from "../app/core/services/apiService";
import { Employee } from "../app/pages/employePage/interfaces/Employee.interface";

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


  const saveEmployee = async () => {
    const employee: Employee = {
      id: "147",
      name: "test",
      id_skill: 7,
      salary: 500,
    };

    const response = await apiService.create<Employee>("employee", {
      data: employee,
    });
    console.log(response);
  };

  const updateEmployee = async () => {
    const employee: Employee = {
      id: "147",
      name: "ttototomùlfdkjgsdfgsdfdfgstot",
      id_skill: 7,
      salary: 500,
    };

    const response = await apiService.update<Employee>("employee", {
      id : "147",
      data: employee,
    });
    console.log(response);
  };

  const deleteEmployee = async () => {
    const response = await apiService.delete<Employee>("employee", {
      id: "147",
    });
    console.log(response);
  };

  return (
    <div>
      <h2>Child Component Mounted</h2>
      <Button onClick={() => saveEmployee()}>create</Button>
      <Button onClick={() => updateEmployee()}>update</Button>
      <Button onClick={() => deleteEmployee()}>delete</Button>
    </div>
  );
};

export default TestHttpClient;
