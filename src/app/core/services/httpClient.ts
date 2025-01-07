import {
  buildHeaders,
  handleHttpErrors,
  handleTimeout,
} from "../utils/httpUtils";

interface HttpClientOptions extends RequestInit {
  timeout?: number;
  signal?: AbortSignal;
}

export const httpClient = async <T>(
  url: string,
  option: HttpClientOptions = {}
): Promise<{ data: T | T[] }> => {
  const { timeout = 10000, signal, ...otherOptions } = option;

  const controller = handleTimeout(timeout);
  const finalSignal = signal || controller.signal;

  try {
    const response = await fetch(url, {
      ...otherOptions,
      signal: finalSignal,
      headers: buildHeaders(otherOptions.headers),
    });

    await handleHttpErrors(response);

    return (await response.json());
  } catch (e) {
    if (e instanceof Error) {
      if (e.name === "AbortError") {
        throw new Error("Request timed out or was aborted");
      }
      console.error("HTTP Client Error", e);
      throw e;
    } else {
      console.error("An unknown error occurred", e);
      throw new Error("An unknown error occurred");
    }
  }
};
