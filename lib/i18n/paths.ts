import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  type Locale,
  type RouteKey,
  ROUTE_SEGMENTS,
} from "@/lib/i18n/config";

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return withSlash.startsWith("/") ? withSlash : `/${withSlash}`;
}

function localeFromPrefix(path: string): Locale | null {
  if (path === "/ms/" || path.startsWith("/ms/")) return "ms";
  if (path === "/zh/" || path.startsWith("/zh/")) return "zh";
  return null;
}

export function getLocaleFromPath(pathname: string): Locale {
  return localeFromPrefix(normalizePath(pathname)) ?? "en";
}

export function stripLocalePrefix(pathname: string): string {
  const path = normalizePath(pathname);
  const locale = localeFromPrefix(path);
  if (!locale || locale === DEFAULT_LOCALE) return path;
  const prefix = LOCALE_PREFIX[locale];
  if (path === `${prefix}/`) return "/";
  return normalizePath(path.slice(prefix.length));
}

export function localizePath(path: string, locale: Locale): string {
  const base = normalizePath(path);
  if (locale === DEFAULT_LOCALE) return base;
  const prefix = LOCALE_PREFIX[locale];
  if (base === "/") return `${prefix}/`;
  return `${prefix}${base}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const stripped = stripLocalePrefix(pathname);
  return localizePath(stripped, target);
}

export function routePath(key: RouteKey, locale: Locale = DEFAULT_LOCALE): string {
  const segment = ROUTE_SEGMENTS[key];
  const path = segment ? `/${segment}/` : "/";
  return localizePath(path, locale);
}

export function getRouteKeyFromPath(pathname: string): RouteKey {
  const stripped = stripLocalePrefix(pathname);
  if (stripped === "/") return "home";
  const match = Object.entries(ROUTE_SEGMENTS).find(
    ([, segment]) => segment && stripped === `/${segment}/`,
  );
  return (match?.[0] as RouteKey) || "home";
}

export const INDEXABLE_PATHS = Object.values(ROUTE_SEGMENTS).map((segment) =>
  segment ? `/${segment}/` : "/",
);
