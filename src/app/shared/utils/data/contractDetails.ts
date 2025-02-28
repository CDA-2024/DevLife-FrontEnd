
import { AcceptedContract } from "../../../pages/contractPage/interfaces/acceptedContract.interface";
import { AvailableContract } from "../../../pages/contractPage/interfaces/availableContract.interface";
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

export const getOngoingContractDetails = (contract: AcceptedContract) => [
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
