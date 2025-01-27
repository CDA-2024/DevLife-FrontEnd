import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import EmployeeCard from "./EmployeeCard";
import { useGetEmployees } from "../hooks/useEmployeeApi";

const EmployeeSection = () => {
  const {
    data: employees,
    loading,
    error,
  } = useGetEmployees({ field: "name", order: "ASC" });

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
      {employees?.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </GridComponent>
  );
};

export default EmployeeSection;
