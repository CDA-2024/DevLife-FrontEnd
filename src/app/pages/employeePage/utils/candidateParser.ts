import { Employee } from "../../../shared/interfaces/Models/Employee.interface";
import { EmployeeCompagny } from "../../../shared/interfaces/Models/EmployeeCompagny.interface";
import { EmployeeSkill } from "../../../shared/interfaces/Models/EmployyeSkill.interface";
import { Candidate } from "../interfaces/Candidate.interface";

export const candidateParser = (
  employeesCompagnie: EmployeeCompagny[],
  employeeSkills: EmployeeSkill[],
  employees: Employee[]
): Candidate[] => {
  return employeesCompagnie
    .map((candidate) => {
      if (!candidate.isavalaible) {
        return null;
      }

      const employeeInfo = employees.find(
        (employee) => employee.id === candidate.id_employee
      );

      const skillInfo = employeeSkills.find(
        (employeeSkill) => employeeSkill.id === employeeInfo?.id_skill
      );

      if (!employeeInfo || !skillInfo) {
        return null;
      }

      return {
        id: candidate.id,
        name: employeeInfo.name,
        salary: employeeInfo.salary,
        experience: candidate.experience,
        skillName: skillInfo.name,
        skillDescription: skillInfo.description,
      };
    })
    .filter((candidate): candidate is Candidate => candidate !== null);
};
