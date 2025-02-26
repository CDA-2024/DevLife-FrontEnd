import { useEmployee } from "../../../shared/hooks/useEmployeeApi";
import { useEmployeeCompagny } from "../../../shared/hooks/useEmployeeCompagny";
import { useEmployeeSkill } from "../../../shared/hooks/useEmployeSkill";
import { memberParser } from "../utils/memberParser";

export const useMember = () => {
  const { data: employees, loading: loadingE, error: errorE } = useEmployee();
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

  const members = memberParser(employeesCompagny, employeeSkills, employees);

  return {
    members,
    loading: loadingE || loadingEC || loadingES,
    error: errorE || errorEC || errorES,
  };
};
