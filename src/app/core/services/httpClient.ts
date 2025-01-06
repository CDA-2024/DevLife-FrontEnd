import { HttpClientOptions } from "../schemas/HttpClientOptions.interface";
import { buildHeader } from "../utils/buildHeaders";
import { handleHttpErrors } from "../utils/handleHttpErrors";
import { handleTimeout } from "../utils/handleTimeout";

export const httpClient = async <T>(
  url: string,
  option: HttpClientOptions = {}
): Promise<T> => {
  const { timeout = 10000, signal, ...otherOptions } = option;

  const controller = handleTimeout(timeout);
  const finalSignal = signal || controller.signal;

  try {
    const response = await fetch(url, {
      ...otherOptions,
      signal: finalSignal,
      headers: buildHeader(otherOptions.headers),
    });

    await handleHttpErrors(response);

    return (await response.json()) as T;
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
