export const buildHeader = (customHeaders: HeadersInit = {}) => {
  return {
    "Content-Type": "application/json",
    ...customHeaders,
  };
};
