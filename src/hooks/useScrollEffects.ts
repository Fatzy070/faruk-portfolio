import { useEffect } from 'react';

/** One observer for reveals; one passive, frame-throttled scroll listener. */
export function useScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const configure = () => {
      observer?.disconnect();
      if (preference.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.remove('reveal-ready'));
        return;
      }
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      elements.forEach((element) => {
        element.classList.add('reveal-ready');
        observer?.observe(element);
      });
    };
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        '--progress',
        String(max > 0 ? window.scrollY / max : 0),
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    configure();
    update();
    preference.addEventListener('change', configure);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', configure);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
