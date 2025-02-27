import { useEmployee } from "../../../shared/hooks/useEmployeeApi";
import { useEmployeeCompagny } from "../../../shared/hooks/useEmployeeCompagny";
import { useEmployeeSkill } from "../../../shared/hooks/useEmployeSkill";
import { candidateParser } from "../utils/candidateParser";

export const useCandidate = () => {
  const {
    data: employees,
    loading: loadingE,
    error: errorE,
    fetchData: fetchEmployee,
  } = useEmployee();
  const {
    data: employeesCompagny,
    loading: loadingEC,
    error: errorEC,
    fetchData: fetchEmployeesCompagny,
    deleteEmployeeCompagny,
    updateEmployeeCompagny,
  } = useEmployeeCompagny();
  const {
    data: employeeSkills,
    loading: loadingES,
    error: errorES,
    fetchData: fetchEmployeeSkill,
  } = useEmployeeSkill();

  const candidates = candidateParser(
    employeesCompagny,
    employeeSkills,
    employees
  );

  const updateCandidates = () => {
    fetchEmployee();
    fetchEmployeeSkill();
    fetchEmployeesCompagny();
  };

  const deleteCandidate = async (id: string) => {
    await deleteEmployeeCompagny(id);
  };

  const recruitCandidate = async (id: number) => {
    const candidate = employeesCompagny.find((c) => (c.id = id));
    candidate!.isavalaible = false;
    await updateEmployeeCompagny(id.toString(), candidate!);
  };

  return {
    candidates,
    updateCandidates,
    deleteCandidate,
    recruitCandidate,
    loading: loadingE || loadingEC || loadingES,
    error: errorE || errorEC || errorES,
  };
};
