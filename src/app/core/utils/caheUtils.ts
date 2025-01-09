// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache = new Map<string, any>();

export const getCache = <T>(key: string): T[]  => cache.get(key);

export const setCache = <T>(key: string, value: T): void => {
    cache.set(key, value);
}

export const clearCache = (key: string): void => {
    cache.delete(key);
}