import { Employe } from "../../../pages/employePage/interfaces/Employe.interface";
import { levelToString } from "../parser/levelToString";
import { salaryToString } from "../parser/salaryToString";

export const getEmployeDetails = (employe: Employe) => [
  { icon: "🎓", label: "Niveaux", value: levelToString(employe.level) },
  { icon: "🎓", label: "Experience", value: employe.xp },
  { icon: "🛠️", label: "Compétence", value: employe.skill },
  { icon: "💰", label: "Salaire/J", value: salaryToString(employe.salary) },
];
