import { Contract } from "../../../shared/interfaces/Contract.interface";

export const validateContract = (contract: unknown): contract is Contract => {
  if (typeof contract !== "object" || contract === null) {
    console.error("Invalid contract data:", contract);
    return false;
  }

  const c = contract as Contract;

  if (
    typeof c.id !== "number" ||
    typeof c.title !== "string" ||
    typeof c.type !== "string" ||
    typeof c.imageUrl !== "string" ||
    typeof c.description !== "string" ||
    typeof c.reward !== "number" ||
    typeof c.difficultyLevel !== "number"
  ) {
    console.error("Invalid contract data:", c);
    return false;
  }

  return true;
};
