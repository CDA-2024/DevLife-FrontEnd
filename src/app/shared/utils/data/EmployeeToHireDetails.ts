import { EmployeeToHire } from "../../../pages/employePage/interfaces/EmployeeToHire.interface";
import { levelToString } from "../parser/levelToString";
import { salaryToString } from "../parser/salaryToString";

export const getEmployeeToHireDetails = (employee: EmployeeToHire) => [
  { icon: "🎓", label: "Niveaux", value: levelToString(employee.level) },
  { icon: "🛠️", label: "Compétence", value: employee.skill },
  { icon: "💰", label: "Salaire/J", value: salaryToString(employee.salary) },
];
