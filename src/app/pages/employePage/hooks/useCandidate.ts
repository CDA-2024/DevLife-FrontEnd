import { useEmployee } from "../../../shared/hooks/useEmployeeApi";
import { useEmployeeCompagny } from "../../../shared/hooks/useEmployeeCompagny";
import { useEmployeeSkill } from "../../../shared/hooks/useEmployeSkill";
import { CandidatePipe } from "../services/candidate.Pipe";

export const useCandidate = () => {
  const {
    data: employees,
    loading: loadingE,
    error: errorE,
  } = useEmployee();
  const {
    data: employeesCompagny,
    loading: loadingEC,
    error: errorEC,
  } = useEmployeeCompagny();
  const {
    data: employeeSkills,
    loading: loadingES,
    error: errorES,
  } = useEmployeeSkill();

  const candidates = CandidatePipe(
    employeesCompagny,
    employeeSkills,
    employees
  );

  return {
    candidates,
    loading: loadingE || loadingEC || loadingES,
    error: errorE || errorEC || errorES,
  };
};
