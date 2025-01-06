import { EmployeToHire } from "../../../pages/employePage/interfaces/EmployeToHire.interface";
import { levelToString } from "../parser/levelToString";
import { salaryToString } from "../parser/salaryToString";

export const getEmployeToHireDetails = (employe: EmployeToHire) => [
  { icon: "🎓", label: "Niveaux", value: levelToString(employe.level) },
  { icon: "🛠️", label: "Compétence", value: employe.skill },
  { icon: "💰", label: "Salaire/J", value: salaryToString(employe.salary) },
];
