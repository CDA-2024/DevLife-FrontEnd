import { Employee } from "../../../shared/interfaces/Employee.interface";
import { EmployeeCompagny } from "../../../shared/interfaces/EmployeeCompagny.interface";
import { EmployeeSkill } from "../../../shared/interfaces/EmployyeSkill.interface";
import { Member } from "../interfaces/Member.interface";

export const memberParser = (
  employeesCompagnie: EmployeeCompagny[],
  employeeSkills: EmployeeSkill[],
  employees: Employee[]
): Member[] => {
  return employeesCompagnie
    .map((member) => {
      if (member.isavalaible) {
        return null;
      }

      const employeeInfo = employees.find(
        (employee) => employee.id === member.id_employee
      );

      const skillInfo = employeeSkills.find(
        (employeeSkill) => employeeSkill.id === employeeInfo?.id_skill
      );

      if (!employeeInfo || !skillInfo) {
        return null;
      }

      return {
        id: member.id,
        name: employeeInfo.name,
        salary: employeeInfo.salary,
        experience: member.experience,
        skillName: skillInfo.name,
        skillDescription: skillInfo.description,
      };
    })
    .filter((member): member is Member => member !== null);
};
