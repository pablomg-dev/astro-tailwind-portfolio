let observer: IntersectionObserver | null = null;

export function handleScrollAnimation() {
  const elements = document.querySelectorAll(
    "[data-scroll-animation]:not([data-observed])",
  );

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transform = "translateY(0)";
            target.style.opacity = "1";
            observer?.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );
  }

  elements.forEach((element) => {
    (element as HTMLElement).dataset.observed = "true";
    (element as HTMLElement).style.willChange = "transform, opacity";
    observer?.observe(element);
  });
}
