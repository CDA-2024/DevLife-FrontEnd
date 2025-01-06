import { MaterialSkill } from "./MaterialSkill.interface";

export interface Material {
  id: string;
  employeId: string;
  name: string;
  type: string;
  condition: number;
  description: string;
  materialSkill: MaterialSkill;
}
