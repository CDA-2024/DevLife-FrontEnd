import { useEffect, useState } from "react";
import { useCandidate } from "../hooks/useCandidate";
import CandidateCard from "../components/CandidateCard";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";

const CandidateSection = () => {
  const { error, loading, candidates, updateCandidates } = useCandidate();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    updateCandidates();
  }, [refresh]);

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
      {candidates.map((cadidate) => (
        <CandidateCard
          onUpdate={() => setRefresh((prev) => prev + 1)}
          key={cadidate.id}
          candidate={cadidate}
        />
      ))}
    </GridComponent>
  );
};

export default CandidateSection;
