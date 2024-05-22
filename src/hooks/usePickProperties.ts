export function usePickProperties<T extends {}, R extends keyof T>(
  obj: T,
  ...keys: R[]
) {
  return keys.reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Pick<T, R>);
}
