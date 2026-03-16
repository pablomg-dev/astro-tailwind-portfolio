import { describe, it, expect } from "vitest";
import { getLoadingStrategy } from "./performance";

describe("getLoadingStrategy", () => {
  it("debería retornar loading eager y fetchpriority high para el primer elemento", () => {
    const strategy = getLoadingStrategy(0);
    expect(strategy.loading).toBe("eager");
    expect(strategy.fetchpriority).toBe("high");
  });

  it("debería retornar loading lazy y fetchpriority low para elementos después del umbral", () => {
    const strategy = getLoadingStrategy(2, 1);
    expect(strategy.loading).toBe("lazy");
    expect(strategy.fetchpriority).toBe("low");
  });

  it("debería manejar múltiples elementos eager según el threshold", () => {
    const strategy = getLoadingStrategy(1, 2);
    expect(strategy.loading).toBe("eager");
    expect(strategy.fetchpriority).toBe("high");
  });

  it("debería lanzar error si el índice es negativo", () => {
    expect(() => getLoadingStrategy(-1)).toThrow("El índice no puede ser negativo");
  });
});
