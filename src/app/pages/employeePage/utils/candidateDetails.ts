import { Candidate } from "../interfaces/Candidate.interface";
import {
  experiencxeToLevel,
  levelToString,
  salaryToString,
} from "../../../shared/utils/parsers.Utils";

export const getCandidateDetails = (candidate: Candidate) => [
  {
    icon: "🎓",
    label: "Niveaux",
    value: levelToString(experiencxeToLevel(candidate.experience)),
  },
  { icon: "🛠️", label: "Compétence", value: candidate.skillName },
  { icon: "💰", label: "Salaire/J", value: salaryToString(candidate.salary) },
];
