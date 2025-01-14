import { Candidate } from "../interfaces/Candidate.interface";

export const validateCandidate = (candidate: unknown): candidate is Candidate => {
  if (typeof candidate !== "object" || candidate === null) {
    console.error("Invalid employee data:", candidate);
    return false;
  }

  const c = candidate as Candidate;

  if (
    typeof c.id !== "string" ||
    typeof c.name !== "string" ||
    typeof c.imgAlt !== "string" ||
    typeof c.level !== "number" ||
    typeof c.skill !== "string" ||
    typeof c.salary !== "number"
  ) {
    console.error("Invalid employee data:", c);
    return false;
  }

  return true;
};
