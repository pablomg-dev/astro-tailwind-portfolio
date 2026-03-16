/**
 * Determina la estrategia de carga óptima para un recurso basado en su índice y contexto.
 * @param index El índice del elemento en una lista.
 * @param threshold El número de elementos que deben cargarse con prioridad alta.
 * @returns Un objeto con los atributos de carga recomendados.
 */
export const getLoadingStrategy = (index: number, threshold: number = 1) => {
  if (index < 0) {
    throw new Error("El índice no puede ser negativo");
  }

  return {
    loading: index < threshold ? ("eager" as const) : ("lazy" as const),
    fetchpriority: index < threshold ? ("high" as const) : ("low" as const),
    decoding: "async" as const,
  };
};
