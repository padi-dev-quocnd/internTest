export function flagPathname(params, pathname) {
  return params.some((p) => p === pathname);
}
