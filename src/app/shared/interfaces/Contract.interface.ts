import { ContractModifier } from "./Modifier.interface";

export interface Contract {
  id: string;
  title: string;
  img?: string;
  imgAlt: string;
  description: string;
  deadline: Date;
  reward: number;
  difficultyLevel: "Easy" | "Medium" | "Hard";
  progress?: number;
  employeesAssigned: string[]; 
}

export interface AvailableContract extends Contract {
  isAccepted: boolean; 
}

export interface OngoingContract extends Contract {
  startDate: Date; 
  isCompleted: boolean; 
  modifiers?: ContractModifier[]; 
}

