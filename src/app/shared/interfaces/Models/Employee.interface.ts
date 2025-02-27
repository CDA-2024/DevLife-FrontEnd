import { BaseModel } from "./BaseModel.interface";

export interface Employee extends BaseModel {
  name: string;
  id_skill: number;
  salary: number;
}
