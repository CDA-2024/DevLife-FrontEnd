import { BaseModel } from "./BaseModel.interface";
import { MaterialSkill } from "./MaterialSkill.interface";

export interface Material extends BaseModel {
  employeId: string;
  name: string;
  type: string;
  condition: number;
  description: string;
  materialSkill: MaterialSkill;
}
