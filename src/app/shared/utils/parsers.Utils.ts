export function levelToString(value: number): string {
  return "Niv. " + value.toString();
}

export function salaryToString(value: number): string {
  return value.toString() + " $";
}

export const experiencxeToLevel = (experience: number): number => {
  return Math.floor(experience / 1000) + 1;
};

export const levelExperience = (n: number): number => {
  return n % 1000;
};
