import { MaterialSkill } from "../../../shared/interfaces/Models/MaterialSkill.interface";

export const validateMaterialSkill = (
  materialSkill: unknown
): materialSkill is MaterialSkill => {
  if (typeof materialSkill !== "object" || materialSkill === null) {
    console.error("Invalid material skill data:", materialSkill);
    return false;
  }

  const ms = materialSkill as MaterialSkill;

  if (typeof ms.id !== "number" || typeof ms.name !== "string") {
    console.error("Invalid material skill data:", ms);
    return false;
  }

  return true;
};
