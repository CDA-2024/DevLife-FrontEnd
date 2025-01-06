export const handleHttpErrors = async (response: Response) => {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      errorBody?.message || `HTTP error! Status: ${response.statusText}`;
    throw new Error(
      `HTTP error! Status: ${response.status}, Message ${message}`
    );
  }
};
