import { Employee } from "../interfaces/Models/Employee.interface";

export const validateEmployee = (employee: unknown): employee is Employee => {
  if (typeof employee !== "object" || employee === null) {
    console.error("Invalid employee data:", employee);
    return false;
  }

  const e = employee as Employee;

  if (
    typeof e.id !== "number" ||
    typeof e.name !== "string" ||
    typeof e.salary !== "number"
  ) {
    console.error("Invalid employee data:", e);
    return false;
  }

  return true;
};
