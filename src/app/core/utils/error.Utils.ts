export const handleApiError = (errorState: Error | null, error: Error): Error => {
  if (!errorState) {
    return error;
  }

  return errorState;
};
