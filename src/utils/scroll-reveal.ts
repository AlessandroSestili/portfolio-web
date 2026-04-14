/**
 * Scroll reveal — initialises an IntersectionObserver that adds `.visible`
 * to any element with class `.reveal`, `.reveal-left`, or `.reveal-right`.
 *
 * Call once at boot in Layout.astro. Handles astro:page-load for View
 * Transitions compatibility.
 */
export function initScrollReveal(): void {
  const run = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });
  };

  run();
  document.addEventListener('astro:page-load', run);
}
