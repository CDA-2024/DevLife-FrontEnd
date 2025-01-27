import { Candidate } from "../../../pages/employePage/interfaces/Candidate.interface";
import { levelToString, salaryToString } from "../sharedParser.Utils";


export const getCandidateDetails = (employee: Candidate) => [
  { icon: "🎓", label: "Niveaux", value: levelToString(employee.level) },
  { icon: "🛠️", label: "Compétence", value: employee.skill },
  { icon: "💰", label: "Salaire/J", value: salaryToString(employee.salary) },
];
