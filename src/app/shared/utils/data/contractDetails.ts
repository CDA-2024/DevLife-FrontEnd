import {
  AvailableContract,
  OngoingContract,
} from "../../interfaces/Contract.interface";
import { salaryToString } from "../parsers.Utils";

export const getAvailableContractDetails = (contract: AvailableContract) => [
  {
    icon: "⏳",
    label: "Date Limite",
    value: new Date(contract.deadline).toLocaleDateString(),
  },
  {
    icon: "💰",
    label: "Récompense",
    value: salaryToString(contract.reward),
  },
  { icon: "⚙️", label: "Difficulté", value: contract.difficulty_level },
];

export const getOngoingContractDetails = (contract: OngoingContract) => [
  {
    icon: "⏳",
    label: "Date Limite",
    value: new Date(contract.deadline).toLocaleDateString(),
  },
  {
    icon: "💰",
    label: "Récompense",
    value: salaryToString(contract.reward),
  },
  { icon: "⚙️", label: "Difficulté", value: contract.difficulty_level },
];
