class CacheManager {
  private static instance: CacheManager;
  private cache: { [key: string]: unknown } = {};

  private constructor() {}

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  public get(key: string): unknown {
    return this.cache[key];
  }

  public set(key: string, value: unknown): void {
    this.cache[key] = value;
  }

  public delete(key: string): void {
    delete this.cache[key];
  }

  public clear(): void {
    this.cache = {};
  }
}

export const cacheManager = CacheManager.getInstance();
