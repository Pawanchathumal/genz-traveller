export const basePath = "/genz-traveller";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}