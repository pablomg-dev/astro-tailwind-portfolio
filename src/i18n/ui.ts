/**
 * Tipos y constantes para internacionalización
 */

export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALES: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

/**
 * Extrae el locale desde la URL
 * @param url - URL actual del request
 * @returns Locale detectado ("es" | "en")
 */
export function getLocaleFromUrl(url: URL): Locale {
  const pathLocale = url.pathname.split("/")[1];
  if (pathLocale === "en") return "en";
  return DEFAULT_LOCALE;
}

/**
 * Valida si un string es un Locale válido
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale === "es" || locale === "en";
}
