import {
  AvailableContract,
  OngoingContract,
} from "../../interfaces/Contract.interface";
import { moneyNumberToString } from "../moneyNumberToString";

export const getAvailableContractDetails = (contract: AvailableContract) => [
  {
    icon: "⏳",
    label: "Date Limite",
    value: new Date(contract.deadline).toLocaleDateString(),
  },
  {
    icon: "💰",
    label: "Récompense",
    value: moneyNumberToString(contract.reward),
  },
  { icon: "⚙️", label: "Difficulté", value: contract.difficultyLevel },
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
    value: moneyNumberToString(contract.reward),
  },
  { icon: "⚙️", label: "Difficulté", value: contract.difficultyLevel },
];
