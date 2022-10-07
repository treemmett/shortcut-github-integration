export function toString(query: string | string[]): string {
  return Array.isArray(query) ? query[0] : query;
}
