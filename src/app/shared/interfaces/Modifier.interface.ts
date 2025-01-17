export interface ContractModifier {
  type: "Boost" | "Penalty";
  effect: string;
  value: number;
}
