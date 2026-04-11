/**
 * Tipos y constantes para internacionalización
 */

export type Locale = "es";

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALES: Record<Locale, string> = {
  es: "Español",
};

export function isValidLocale(locale: string): locale is Locale {
  return locale === "es";
}
