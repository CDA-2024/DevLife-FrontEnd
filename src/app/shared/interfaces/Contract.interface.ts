import { ContractModifier } from "./Modifier.interface";

export interface Contract {
  id: number;
  title: string;
  type: string;
  image_url: string;
  description: string;
  reward: number;
  difficulty_level: number;
}

export type AvailableContract = Contract

export interface OngoingContract extends Contract {
  modifiers?: ContractModifier[];
}
