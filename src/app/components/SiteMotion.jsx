'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

/**
 * Global GSAP driver for the homepage. Registered once, scoped to #bp-root.
 * Handles the branded intro (per-character headline + drawn accent underline),
 * stat count-ups, magnetic buttons, cursor parallax, card-hover lifts, navbar
 * scroll state, the pinned/scrubbed hero, the brand-mask reveal, icon pops, and
 * the above-the-fold `.bp-reveal` scroll batch. Below-fold sections mount lazily
 * and run their own reveal via `useReveal`.
 */
export default function SiteMotion({ pinHero = true }) {
  useEffect(() => {
    const root = document.getElementById('bp-root');
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Pinning + scrub is a desktop-only flourish: on small/touch screens it makes
    // the hero feel "stuck" and can leave the fixed nav overlapping content.
    const canPin =
      window.matchMedia('(min-width: 861px)').matches &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let refreshTimer;
    let splits = [];
    const ctx = gsap.context(() => {
      // ---- intro: headline assembles per-character, then the brand line's
      //      hand-drawn underline draws itself in ----
      if (!reduce) {
        const lines = gsap.utils.toArray('.bp-title-line');
        // Split each line into characters; the parent .bp-line-mask clips them
        // as they rise, so the reveal still reads as a clean masked wipe.
        splits = lines.map((line) => new SplitText(line, { type: 'chars' }));
        const chars = splits.flatMap((s) => s.chars);

        const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        introTl
          .from(chars, {
            yPercent: 120,
            opacity: 0,
            rotationX: -55,
            transformOrigin: '50% 100%',
            transformPerspective: 600,
            duration: 0.9,
            stagger: 0.018,
          }, 0.1)
          .from('.bp-copy .bp-rv', { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.5)
          .from('.bp-visual', { x: 46, opacity: 0, scale: 0.95, duration: 1.0 }, 0.4);

        const underline = root.querySelector('.bp-accent-underline path');
        if (underline) {
          gsap.set(underline, { drawSVG: '0%' });
          introTl.to(underline, { drawSVG: '100%', duration: 0.9, ease: 'power2.inOut' }, '-=0.35');
        }
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

      // ---- cinematic hero: text clears, product glides to centre-stage, then
      //      the "three steps" panel rises up and overlaps it ----
      if (pinHero && !reduce && canPin) {
        // Horizontal offset that moves the product from its column to dead-centre.
        // Evaluated on refresh (visual at rest), so it stays correct on resize.
        const centreProduct = () => {
          const hero = root.querySelector('.bp-hero');
          const vis = root.querySelector('.bp-visual');
          if (!hero || !vis) return 0;
          const hr = hero.getBoundingClientRect();
          const vr = vis.getBoundingClientRect();
          return hr.left + hr.width / 2 - (vr.left + vr.width / 2);
        };

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.bp-hero',
              start: 'top top',
              end: '+=110%',
              scrub: 1,
              pin: true,
              pinSpacing: false, // no spacer, so .bp-how scrolls up over the hero
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          // copy drifts up and fades out first
          .to('.bp-copy', { autoAlpha: 0, y: -80, ease: 'power1.in', duration: 0.4 }, 0)
          .to('.bp-scroll', { autoAlpha: 0, duration: 0.15 }, 0)
          // product slides to centre and grows as the steps rise to meet it
          .to('.bp-visual', { x: centreProduct, scale: 1.06, ease: 'power2.out', duration: 0.6 }, 0)
          .to('.bp-orb', { rotate: 28, scale: 1.18, ease: 'none', duration: 1 }, 0)
          // …then fades out entirely so it can't peek below the rising panel
          .to('.bp-visual', { autoAlpha: 0, ease: 'power2.in', duration: 0.32 }, 0.68);
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

      // ---- brand mask: African-mask illustration unveils via a clip-path
      //      curtain on scroll, then breathes with a slow float ----
      if (!reduce) {
        const mask = root.querySelector('.bp-mask-illus');
        if (mask) {
          gsap.fromTo(
            mask,
            { clipPath: 'inset(0 0 100% 0 round 24px)', opacity: 0, scale: 1.06 },
            {
              clipPath: 'inset(0 0 0% 0 round 24px)',
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: { trigger: mask, start: 'top 82%' },
            }
          );
          const maskImg = mask.querySelector('img');
          if (maskImg) {
            gsap.to(maskImg, { y: -16, duration: 4, ease: 'sine.inOut', repeat: -1, yoyo: true });
          }
        }
      }

      // ---- icon pops: feature + pillar icons spring in as their cards reveal ----
      if (!reduce) {
        ScrollTrigger.batch('.bp-feat-icon, .bp-pillar-icon', {
          start: 'top 92%',
          onEnter: (batch) =>
            gsap.from(batch, {
              scale: 0.2,
              opacity: 0,
              rotate: -25,
              duration: 0.6,
              ease: 'back.out(1.7)',
              stagger: 0.08,
              overwrite: true,
            }),
        });
      }

      // ---- breathing glow behind the hero product (all devices) ----
      if (!reduce) {
        const glow = root.querySelector('.bp-visual-glow');
        if (glow) {
          gsap.to(glow, {
            scale: 1.12,
            opacity: 0.75,
            duration: 4.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
        // On touch/small screens there's no pin to animate the hero, so give the
        // product a gentle float of its own.
        if (!canPin) {
          const heroImg = root.querySelector('.bp-hero-img');
          if (heroImg) {
            gsap.to(heroImg, { y: -12, duration: 3.6, ease: 'sine.inOut', repeat: -1, yoyo: true });
          }
        }
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

    // ---- cursor parallax: background orbs / ring / glow drift with the pointer
    //      to give the hero layered depth (desktop, non-touch only) ----
    let onParallax;
    if (!reduce && canPin) {
      const layers = [
        ['.bp-orb2', 34],
        ['.bp-visual-ring', 24],
        ['.bp-visual-glow', 16],
      ]
        .map(([sel, amt]) => {
          const el = root.querySelector(sel);
          return el && {
            x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }),
            y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3' }),
            amt,
          };
        })
        .filter(Boolean);

      if (layers.length) {
        onParallax = (e) => {
          const nx = (e.clientX / window.innerWidth - 0.5) * 2;
          const ny = (e.clientY / window.innerHeight - 0.5) * 2;
          layers.forEach((l) => {
            l.x(nx * l.amt);
            l.y(ny * l.amt);
          });
        };
        window.addEventListener('mousemove', onParallax);
      }
    }

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.clearTimeout(refreshTimer);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onOut);
      if (onParallax) window.removeEventListener('mousemove', onParallax);
      window.removeEventListener('load', onLoad);
      splits.forEach((s) => s.revert());
      ctx.revert();
    };
  }, [pinHero]);

  return null;
}
