import { Material } from "../interfaces/Material.interface";

export const validateMaterial = (material: unknown): material is Material => {
  if (typeof material !== "object" || material === null) {
    console.error("Invalid material data:", material);
    return false;
  }

  const m = material as Material;

  if (
    typeof m.id !== "number" ||
    typeof m.id_material_skill !== "number" ||
    typeof m.name !== "string" ||
    typeof m.type !== "string" ||
    typeof m.description !== "string" ||
    typeof m.image_url !== "string"
  ) {
    console.error("Invalid material data:", m);
    return false;
  }

  return true;
};
