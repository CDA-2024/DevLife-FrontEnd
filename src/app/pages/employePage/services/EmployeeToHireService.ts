import { EmployeeToHire } from "../interfaces/EmployeeToHire.interface";

export const validateEmployeeToHire = (
  employee: unknown
): employee is EmployeeToHire => {
  if (typeof employee !== "object" || employee === null) {
    console.error("Invalid employee data:", employee);
    return false;
  }

  const e = employee as EmployeeToHire;

  if (
    typeof e.id !== "string" ||
    typeof e.name !== "string" ||
    typeof e.imgAlt !== "string" ||
    typeof e.level !== "number" ||
    typeof e.skill !== "string" ||
    typeof e.salary !== "number"
  ) {
    console.error("Invalid employee data:", e);
    return false;
  }

  return true;
};
