import { useEffect} from "react";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";
// import { useGetCandidate } from "../hooks/useCandidateApi";
import { useEmployee } from "../hooks/useEmployeeApi";
// import CandidateCard from "./CandidateCard";

const CandidateSection = () => {
  const { data: employees, loading, error, getAll } = useEmployee();


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        await getAll();
      } catch (err) {
        console.error("Error fetching employees in useEffect:", err);
      }
    };

    fetchEmployees();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {/* {employees.map((employee) => (
        <CandidateCard key={employee.id} employee={employee} />
      ))} */}
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </GridComponent>
  );
};

export default CandidateSection;
