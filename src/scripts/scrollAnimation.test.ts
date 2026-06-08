import { describe, it, expect, beforeEach, vi } from "vitest";
import { handleScrollAnimation } from "./scrollAnimation";

describe("handleScrollAnimation", () => {
  let observeMock: ReturnType<typeof vi.fn>;
  let unobserveMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.innerHTML = `
      <div data-scroll-animation></div>
      <div data-scroll-animation></div>
    `;

    observeMock = vi.fn();
    unobserveMock = vi.fn();

    global.IntersectionObserver = vi.fn(function (this: any) {
      this.observe = observeMock;
      this.unobserve = unobserveMock;
      this.disconnect = vi.fn();
      this.takeRecords = vi.fn();
    }) as unknown as typeof IntersectionObserver;
  });

  it("observes elements with data-scroll-animation", () => {
    handleScrollAnimation();

    const elements = document.querySelectorAll("[data-scroll-animation]");
    expect(elements.length).toBe(2);
    expect(observeMock).toHaveBeenCalledTimes(elements.length);
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      expect(htmlElement.dataset.observed).toBe("true");
      expect(htmlElement.style.willChange).toBe("transform, opacity");
    });
  });
});
