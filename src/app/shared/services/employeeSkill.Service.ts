import { EmployeeSkill } from "../interfaces/Models/EmployyeSkill.interface";

export const validateEmployeeSkill = (
  employee: unknown
): employee is EmployeeSkill => {
  if (typeof employee !== "object" || employee === null) {
    console.error("Invalid employee data:", employee);
    return false;
  }

  const e = employee as EmployeeSkill;

  if (
    typeof e.id !== "number" ||
    typeof e.name !== "string" ||
    typeof e.description !== "string"
  ) {
    console.error("Invalid employee data:", e);
    return false;
  }

  return true;
};
