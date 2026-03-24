/**
 * Utilidades para obtener traducciones
 */

import { ES } from "./locales/es";
import { EN } from "./locales/en";
import type { Locale } from "./ui";
import type { Translation } from "./locales/types";

const translations: Record<Locale, Translation> = {
  es: ES,
  en: EN,
};

/**
 * Obtiene una traducción anidada por clave
 * @param locale - Idioma actual
 * @param key - Clave separada por puntos (ej: "hero.name")
 * @returns Texto traducido o la key si no se encuentra
 */
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".");
  let result: unknown = translations[locale];

  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof result === "string" ? result : key;
}

/**
 * Obtiene todas las traducciones para un locale
 */
export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}
