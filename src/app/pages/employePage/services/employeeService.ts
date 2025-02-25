import { Employee } from "../interfaces/Employee.interface";

export const validateEmployee = (employee: unknown): employee is Employee => {
  if (typeof employee !== "object" || employee === null) {
    console.error("Invalid employee data:", employee);
    return false;
  }

  const e = employee as Employee;

  if (
    typeof e.id !== "number" ||
    typeof e.name !== "string" ||
    // typeof e.imgAlt !== "string" ||
    // typeof e.level !== "number" ||
    // typeof e.xp !== "number" ||
    // typeof e.skill !== "string" ||
    typeof e.salary !== "number"
    // !Array.isArray(e.materials)
  ) {
    console.error("Invalid employee data:", e);
    return false;
  }

  return true;
};

