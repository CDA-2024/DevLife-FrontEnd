import {
  experiencxeToLevel,
  levelExperience,
  levelToString,
  salaryToString,
} from "../../../shared/utils/parsers.Utils";
import { Member } from "../interfaces/Member.interface";

export const getMemberDetails = (member: Member) => [
  {
    icon: "🎓",
    label: "Niveaux",
    value: levelToString(experiencxeToLevel(member.experience)),
  },
  {
    icon: "🎓",
    label: "Experience",
    value: levelExperience(member.experience),
  },
  { icon: "🛠️", label: "Compétence", value: member.skillName },
  { icon: "💰", label: "Salaire/J", value: salaryToString(member.salary) },
];
