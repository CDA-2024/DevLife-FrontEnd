import GridComponent from "../../../shared/components/GridComponent/GridComponent";
import { useMember } from "../hooks/useMember";

import MemberCard from "./MemberCard";

const MembersSection = () => {
  const { members, loading, error } = useMember();

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
      {members?.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </GridComponent>
  );
};

export default MembersSection;
