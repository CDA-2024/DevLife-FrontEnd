import { BaseModel } from "./BaseModel.interface";

export interface EmployeeCompagny extends BaseModel {
  id_employee: number;
  id_compagny: number;
  isavalaible: boolean;
  experience: number;
}
