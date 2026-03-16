export function handleScrollAnimation() {
  const elements = document.querySelectorAll('[data-scroll-animation]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px'
  });

  elements.forEach(element => {
    observer.observe(element);
  });
} 