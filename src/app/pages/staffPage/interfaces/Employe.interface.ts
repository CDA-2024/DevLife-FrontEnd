import { Material } from "../../../shared/interfaces/Material.interface";


export interface Employe {
  id: string;
  name: string;
  img?: string;
  imgAlt: string;
  level: number;
  xp: number;
  skill: string;
  salary: number;
  materials: Material[];
}
