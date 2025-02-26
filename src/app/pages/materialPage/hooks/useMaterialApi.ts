import { useResource } from "../../../core/hooks/useRessource";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { Material } from "../interfaces/Material.interface";
import { validateMaterial } from "../services/materialService";

export const useMaterial = () => {
  const {
    data,
    loading,
    error,
    fetchData,
    create,
    update,
    delete: deleteItemGeneric,
    getOne: getOneGeneric,
    getAll: getAllGeneric,
  } = useResource<Material>("materials");

  let er = error;

  const getOneMaterial = async (id: number) => {
    const material = await getOneGeneric({ id });

    const { validData, hasInvalidData } = validateResponseData<Material>(
      material,
      validateMaterial
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some material data are invalid."));
    }

    return validData;
  };

  const getAllMaterials = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<Material[]>(
      data,
      validateMaterial
    );

    if (hasInvalidData) {
      er = handleApiError(er, new Error("Some material data are invalid."));
    }

    return validData;
  };

  const createMaterial = async (material: Material) => {
    return await create({ data: material });
  };

  const updateMaterial = async (id: string, material: Material) => {
    return await update({ id, data: material });
  };

  const deleteMaterial = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createMaterial,
    updateMaterial,
    deleteMaterial,
    getOneMaterial,
    getAllMaterials,
  };
};
