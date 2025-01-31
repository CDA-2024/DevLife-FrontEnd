import { Material } from "../../../shared/interfaces/Material.interface";

export const validateMaterial = (material: unknown): material is Material => {
  if (typeof material !== "object" || material === null) {
    console.error("Invalid material data:", material);
    return false;
  }

  const m = material as Material;

  if (
    typeof m.id !== "number" ||
    typeof m.name !== "string" ||
    typeof m.type !== "string" ||
    typeof m.condition !== "number" ||
    typeof m.description !== "string" ||
    typeof m.materialSkill !== "object"
  ) {
    console.error("Invalid material data:", m);
    return false;
  }

  return true;
};
