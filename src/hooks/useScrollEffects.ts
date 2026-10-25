import { useEffect } from 'react';

interface BpRangeItem {
  el: SVGElement;
  start: number;
  span: number;
}

interface BpNodeItem {
  el: SVGElement;
  at: number;
}

/** One observer for section reveals; one passive, frame-throttled scroll & blueprint controller. */
export function useScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const parallaxCards = document.querySelectorAll<HTMLElement>('[data-parallax-card]');

    // Cache unified Living Blueprint SVG elements and their scroll windows once on mount
    const bpPaths: BpRangeItem[] = [];
    document.querySelectorAll<SVGElement>('[data-bp-range]').forEach((el) => {
      const raw = el.getAttribute('data-bp-range') || '0,1';
      const [s, e] = raw.split(',').map(Number);
      const start = Number.isFinite(s) ? s : 0;
      const end = Number.isFinite(e) ? e : 1;
      bpPaths.push({ el, start, span: Math.max(0.01, end - start) });
    });

    const bpPulses: BpRangeItem[] = [];
    document.querySelectorAll<SVGElement>('[data-bp-pulse]').forEach((el) => {
      const raw = el.getAttribute('data-bp-pulse') || '0,1';
      const [s, e] = raw.split(',').map(Number);
      const start = Number.isFinite(s) ? s : 0;
      const end = Number.isFinite(e) ? e : 1;
      bpPulses.push({ el, start, span: Math.max(0.01, end - start) });
    });

    const bpNodes: BpNodeItem[] = [];
    document.querySelectorAll<SVGElement>('[data-bp-node]').forEach((el) => {
      const at = Number(el.getAttribute('data-bp-node') || '0');
      bpNodes.push({ el, at: Number.isFinite(at) ? at : 0 });
    });

    const getScrollProgress = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1;
      const max = document.documentElement.scrollHeight - vh;
      return max > 0 ? Math.max(0, Math.min(1, scrollY / max)) : 0;
    };

    let smoothProgress = getScrollProgress();

    const applyBlueprint = (progress: number, reducedMotion: boolean) => {
      if (reducedMotion) {
        for (let i = 0; i < bpPaths.length; i++) {
          const { el } = bpPaths[i];
          el.style.strokeDashoffset = '0';
          el.style.opacity = '1';
        }
        for (let i = 0; i < bpNodes.length; i++) {
          const { el } = bpNodes[i];
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
        }
        for (let i = 0; i < bpPulses.length; i++) {
          bpPulses[i].el.style.opacity = '0';
        }
        return;
      }

      for (let i = 0; i < bpPaths.length; i++) {
        const { el, start, span } = bpPaths[i];
        const raw = (progress - start) / span;
        const t = raw <= 0 ? 0 : raw >= 1 ? 1 : raw;
        const eased = t * t * (3 - 2 * t);
        el.style.strokeDashoffset = (1 - eased).toFixed(4);
        el.style.opacity = t <= 0.001 ? '0' : Math.min(1, t * 3.8).toFixed(3);
      }

      for (let i = 0; i < bpNodes.length; i++) {
        const { el, at } = bpNodes[i];
        const raw = (progress - at) / 0.045;
        const t = raw <= 0 ? 0 : raw >= 1 ? 1 : raw;
        const inv = 1 - t;
        const eased = 1 - inv * inv * inv;
        el.style.opacity = eased.toFixed(3);
        el.style.transform = `scale(${(0.25 + 0.75 * eased).toFixed(3)})`;
      }

      for (let i = 0; i < bpPulses.length; i++) {
        const { el, start, span } = bpPulses[i];
        const raw = (progress - start) / span;
        if (raw <= 0 || raw >= 1) {
          el.style.opacity = '0';
        } else {
          const alpha = Math.sin(raw * Math.PI) * 0.85;
          el.style.opacity = alpha.toFixed(3);
          el.style.strokeDashoffset = (1.02 - raw * 1.14).toFixed(4);
        }
      }
    };

    const configure = () => {
      observer?.disconnect();
      if (preference.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => {
          element.classList.remove('reveal-ready');
          element.classList.add('revealed');
        });
        parallaxCards.forEach((card) => {
          card.style.setProperty('--card-parallax', '0px');
        });
        applyBlueprint(getScrollProgress(), true);
        return;
      }
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.94) {
              entry.target.classList.add('revealed');
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.06, rootMargin: '0px 0px -4% 0px' },
      );
      elements.forEach((element) => {
        if (!element.classList.contains('revealed')) {
          element.classList.add('reveal-ready');
          observer?.observe(element);
        }
      });
    };

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1;
      const targetProgress = getScrollProgress();

      const diff = targetProgress - smoothProgress;
      const isSettling = !preference.matches && Math.abs(diff) > 0.0002;
      if (isSettling) {
        smoothProgress += diff * 0.28;
      } else {
        smoothProgress = targetProgress;
      }

      document.documentElement.style.setProperty('--progress', smoothProgress.toFixed(5));
      const heroSpan = Math.max(420, vh * 0.82);
      const heroScroll = Math.max(0, Math.min(1, scrollY / heroSpan));
      document.documentElement.style.setProperty('--hero-scroll', heroScroll.toFixed(4));

      applyBlueprint(smoothProgress, preference.matches);

      if (!preference.matches) {
        elements.forEach((element) => {
          if (!element.classList.contains('revealed')) {
            const rect = element.getBoundingClientRect();
            if (rect.top < vh * 0.94) {
              element.classList.add('revealed');
              observer?.unobserve(element);
            }
          }
        });

        parallaxCards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.bottom < -120 || rect.top > vh + 120) return;
          const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / (vh * 0.65);
          const clamped = Math.max(-1, Math.min(1, centerOffset));
          card.style.setProperty('--card-parallax', `${(clamped * 11).toFixed(2)}px`);
        });
      }

      if (isSettling) {
        frame = requestAnimationFrame(update);
      } else {
        frame = 0;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    configure();
    smoothProgress = getScrollProgress();
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
