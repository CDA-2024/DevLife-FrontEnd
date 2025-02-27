import { ContractModifier } from "../Modifier.interface";
import { BaseModel } from "./BaseModel.interface";

export interface Contract extends BaseModel {
  title: string;
  type: string;
  image_url: string;
  description: string;
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
