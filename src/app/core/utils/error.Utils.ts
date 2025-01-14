export const handleApiError = (
  key: string,
  error: Error,
  setError: (key: string, error: Error) => void,
  getState: (key: string) => { error: Error | null }
): void => {
  if (!getState(key).error) {
    setError(key, error);
  }
};
