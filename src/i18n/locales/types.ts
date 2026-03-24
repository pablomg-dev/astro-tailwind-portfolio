/**
 * Tipos inferidos desde las constantes de traducción
 */

import type { ES } from "./es";
import type { EN } from "./en";

export type TranslationKeys = typeof ES;
export type Translation = typeof ES | typeof EN;
