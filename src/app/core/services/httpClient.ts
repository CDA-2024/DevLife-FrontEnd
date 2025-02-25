import { ResponseHttpClient } from "../schemas/response/ResponseHttpClient.interface";

interface HttpClientOptions extends RequestInit {
  timeout?: number;
  signal?: AbortSignal;
}

export const httpClient = async <T>(
  url: string,
  options: HttpClientOptions = {}
): Promise<ResponseHttpClient<T>> => {
  const { timeout = 10000, signal, ...otherOptions } = options;

  const controller = handleTimeout(timeout);
  const finalSignal = signal || controller.signal;

  try {

    const response = await fetch(url, {
      ...otherOptions,
      signal: finalSignal,
      body: otherOptions.body
    });

    const { body, json } = await parseResponseBody<T>(response);

    await handleHttpErrors(response);

    return {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      body,
      json,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out or was aborted");
      }
      console.error("HTTP Client Error", error);
      throw error;
    }
    console.error("An unknown error occurred", error);
    throw new Error("An unknown error occurred");
  }
};

const parseResponseBody = async <T>(
  response: Response
): Promise<{ body: string; json?: T }> => {
  const body = await response.text();
  let json: T | undefined;

  try {
    json = JSON.parse(body);
  } catch {
    console.warn("Response body is not a valid JSON.");
  }

  return { body, json };
};

const handleTimeout = (timeout: number): AbortController => {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
  }, timeout);

  return controller;
};

const handleHttpErrors = async (response: Response): Promise<void> => {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      errorBody?.message || `HTTP error! Status: ${response.statusText}`;
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${message}`
    );
  }
};
