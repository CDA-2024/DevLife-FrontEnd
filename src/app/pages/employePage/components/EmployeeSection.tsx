import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useEmployee } from "../../../shared/hooks/useEmployeeApi";
// import EmployeeCard from "./EmployeeCard";
// import { Employee } from "../interfaces/Employee.interface";

const EmployeeSection = () => {
  const { data, loading, error } = useEmployee();

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      {/* {data?.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))} */}
      <ul>
        {data.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </GridComponent>
  );
};

export default EmployeeSection;
