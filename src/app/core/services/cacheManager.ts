/* eslint-disable @typescript-eslint/no-explicit-any */
export class CacheManager {
  private readonly cache = new Map<string, any>();

  get<T>(key: string): T  {
    return this.cache.get(key);
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cacheManager = new CacheManager();
