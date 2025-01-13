import { Employee } from "../../../pages/employePage/interfaces/Employee.interface";
import { levelToString } from "../parser/levelToString";
import { salaryToString } from "../parser/salaryToString";

export const getEmployeeDetails = (employee
  : Employee) => [
  { icon: "🎓", label: "Niveaux", value: levelToString(employee.level) },
  { icon: "🎓", label: "Experience", value: employee.xp },
  { icon: "🛠️", label: "Compétence", value: employee.skill },
  { icon: "💰", label: "Salaire/J", value: salaryToString(employee.salary) },
];
