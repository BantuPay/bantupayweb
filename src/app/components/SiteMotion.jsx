'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Global GSAP driver for the homepage. Registered once, scoped to #bp-root.
 * Handles the intro reveal, stat count-ups, magnetic buttons, card-hover lifts,
 * navbar scroll state, the pinned/scrubbed hero, and the above-the-fold
 * `.bp-reveal` scroll batch. Below-fold sections mount lazily and run their own
 * reveal via `useReveal`.
 */
export default function SiteMotion({ pinHero = true }) {
  useEffect(() => {
    const root = document.getElementById('bp-root');
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let refreshTimer;
    const ctx = gsap.context(() => {
      // ---- intro (masked headline + copy + visual) ----
      if (!reduce) {
        gsap.set('.bp-title-line', { yPercent: 118 });
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .to('.bp-title-line', { yPercent: 0, duration: 0.95, stagger: 0.12 }, 0.1)
          .from('.bp-copy .bp-rv', { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.25)
          .from('.bp-visual', { x: 46, opacity: 0, scale: 0.95, duration: 1.0 }, 0.3);
      }

      // ---- stat count-ups ----
      root.querySelectorAll('.bp-count').forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const dec = +(el.dataset.decimals || 0);
        const suf = el.dataset.suffix || '';
        if (reduce) {
          el.textContent = end.toFixed(dec) + suf;
          return;
        }
        el.textContent = '0' + suf;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.7,
          delay: 1.1,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = obj.v.toFixed(dec) + suf;
          },
        });
      });

      // ---- navbar scroll state ----
      const nav = root.querySelector('.bp-nav');
      ScrollTrigger.create({
        start: 40,
        end: 99999,
        onToggle: (self) => nav?.classList.toggle('bp-nav-scrolled', self.isActive),
      });

      // ---- pinned / scrubbed hero ----
      if (pinHero && !reduce) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.bp-hero',
              start: 'top top',
              end: () => '+=' + window.innerHeight * 0.85,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to('.bp-copy', { y: -70, opacity: 0.15, ease: 'none' }, 0)
          .to('.bp-hero-img', { y: -50, scale: 1.12, ease: 'none' }, 0)
          .to('.bp-orb', { rotate: 40, scale: 1.25, ease: 'none' }, 0)
          .to('.bp-scroll', { opacity: 0, ease: 'none', duration: 0.3 }, 0);
      }

      // ---- steps reveal ----
      if (!reduce) {
        gsap.from('.bp-step-card', {
          scrollTrigger: { trigger: '.bp-how', start: 'top 78%' },
          y: 44,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }

      // ---- generic scroll reveal (above-the-fold, present at mount) ----
      if (!reduce) {
        const reveals = gsap.utils.toArray('.bp-reveal');
        if (reveals.length) {
          gsap.set(reveals, { y: 38, opacity: 0 });
          ScrollTrigger.batch(reveals, {
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
        }
      }

      // ---- card hover lifts (present at mount) ----
      if (!reduce) {
        root.querySelectorAll('.bp-feat, .bp-pillar').forEach((card) => {
          card.addEventListener('mouseenter', () =>
            gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' })
          );
          card.addEventListener('mouseleave', () =>
            gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' })
          );
        });
      }

      ScrollTrigger.refresh();
      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 800);
    }, root);

    // ---- magnetic buttons (delegated so lazily-mounted ones work too) ----
    const onMove = (e) => {
      if (reduce) return;
      const btn = e.target.closest?.('.magnetic');
      if (!btn || !root.contains(btn)) return;
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - (r.left + r.width / 2)) * 0.35,
        y: (e.clientY - (r.top + r.height / 2)) * 0.35,
        duration: 0.5,
        ease: 'power3.out',
      });
    };
    const onOut = (e) => {
      const btn = e.target.closest?.('.magnetic');
      if (!btn || (e.relatedTarget && btn.contains(e.relatedTarget))) return;
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseout', onOut);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.clearTimeout(refreshTimer);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('load', onLoad);
      ctx.revert();
    };
  }, [pinHero]);

  return null;
}
