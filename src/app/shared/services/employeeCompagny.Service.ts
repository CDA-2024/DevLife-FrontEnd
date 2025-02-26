import { EmployeeCompagny } from "../interfaces/EmployeeCompagny.interface";

export const validateEmployeeCompagny = (
  employee: unknown
): employee is EmployeeCompagny => {
  if (typeof employee !== "object" || employee === null) {
    console.error("Invalid employee data:", employee);
    return false;
  }

  const e = employee as EmployeeCompagny;

  if (
    typeof e.id !== "number" ||
    typeof e.id_employee !== "number" ||
    typeof e.id_compagny !== "number" ||
    typeof e.isavalaible !== "boolean" ||
    typeof e.experience !== "number"
  ) {
    console.error("Invalid employee data:", e);
    return false;
  }

  return true;
};
