import { useResource } from "../../../core/hooks/useRessource";
import { handleApiError } from "../../../core/utils/error.Utils";
import { validateResponseData } from "../../../core/utils/validation.Utils";
import { MaterialSkill } from "../../../shared/interfaces/MaterialSkill.interface";
import { validateMaterialSkill } from "../services/materialSkillService";

export const useMaterialSkill = () => {
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
  } = useResource<MaterialSkill>("materialSkill");

  let er = error;

  const getOneMaterialSkill = async (id: number) => {
    const materialSkill = await getOneGeneric({ id });

    const { validData, hasInvalidData } = validateResponseData<MaterialSkill>(
      materialSkill,
      validateMaterialSkill
    );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some materialSkill data are invalid.")
      );
    }

    return validData;
  };

  const getAllMaterialSkills = async () => {
    await getAllGeneric();

    const { validData, hasInvalidData } = validateResponseData<MaterialSkill[]>(
      data,
      validateMaterialSkill
    );

    if (hasInvalidData) {
      er = handleApiError(
        er,
        new Error("Some materialSkill data are invalid.")
      );
    }

    return validData;
  };

  const createMaterialSkill = async (materialSkill: MaterialSkill) => {
    return await create({ data: materialSkill });
  };

  const updateMaterialSkill = async (
    id: string,
    materialSkill: MaterialSkill
  ) => {
    return await update({ id, data: materialSkill });
  };

  const deleteMaterialSkill = async (id: string) => {
    return await deleteItemGeneric({ id });
  };

  return {
    data,
    loading,
    error: er,
    fetchData,
    createMaterialSkill,
    updateMaterialSkill,
    deleteMaterialSkill,
    getOneMaterialSkill,
    getAllMaterialSkills,
  };
};
