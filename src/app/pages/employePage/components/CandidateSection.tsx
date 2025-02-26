import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useCandidate } from "../hooks/useCandidate";

// import CandidateCard from "./CandidateCard";

const CandidateSection = () => {
  const {error, loading, candidates} = useCandidate();

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(candidates);
  

  return (
    <GridComponent
      cols="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      gap="gap-6 w-full"
    >
      {/* {employees.map((employee) => (
        <CandidateCard key={employee.id} employee={employee} />
      ))} */}
      <ul>
        {candidates.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </GridComponent>
  );
};

export default CandidateSection;
