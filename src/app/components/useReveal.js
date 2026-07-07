'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Scroll-reveal for a below-fold client section. Fades + rises any `.bp-reveal`
 * descendants of `scopeRef` as they enter the viewport (mirrors the global
 * reveal batch in SiteMotion, but scoped so lazily-mounted sections work too).
 */
export default function useReveal(scopeRef) {
  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!root) return;

      const els = gsap.utils.toArray(root.querySelectorAll('.bp-reveal'));
      if (!els.length) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(els, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(els, { y: 38, opacity: 0 });
      ScrollTrigger.batch(els, {
        start: 'top 88%',
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true,
          }),
      });

      // Section mounted after the initial layout — recompute trigger positions.
      ScrollTrigger.refresh();
    },
    { scope: scopeRef }
  );
}
