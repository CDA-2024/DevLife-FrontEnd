export const buildHeaders = (customHeaders?: HeadersInit): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("authToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  if (customHeaders) {
    return { ...headers, ...customHeaders };
  }

  return headers;
};
