import { ContractModifier } from "./Modifier.interface";

export interface Contract {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
  description: string;
  reward: number;
  difficultyLevel: number;
}

export interface AvailableContract extends Contract {
isAccepted: boolean; 
}

export interface OngoingContract extends Contract {
startDate: Date; 
isCompleted: boolean; 
modifiers?: ContractModifier[]; 
}
