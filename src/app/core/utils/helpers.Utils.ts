export function numberVerification(value: string | number) {
  return typeof value === "number" ? value : parseFloat(value);
}
