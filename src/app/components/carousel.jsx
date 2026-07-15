'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [
  '/carousel.webp',
  '/carousel2.webp',
  '/carousel3.webp',
  '/carousel5.webp',
  '/carousel6.webp',
  '/carousel7.webp',
  '/carousel%208.webp',
  '/carousel9.webp',
];

/**
 * A single app screenshot wrapped in an inline iPhone frame SVG: the screenshot
 * fills the body, and the vector bezel (with a cut-out screen, Dynamic Island,
 * titanium rim and side buttons) is layered on top. Keeps the `.bp-shot` class
 * on the wrapper so the coverflow GSAP driver transforms the whole device.
 */
function PhoneShot({ src, alt, eager, index }) {
  const uid = `bp-phone-${index}`;
  return (
    <div className="bp-shot bp-phone">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="300px"
        quality={80}
        className="bp-phone-img"
        loading={eager ? 'eager' : 'lazy'}
      />
      <svg className="bp-phone-frame" viewBox="0 0 300 446" fill="none" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <mask id={`${uid}-screen`}>
            <rect width="300" height="446" rx="44" fill="#fff" />
            <rect x="10" y="12" width="280" height="422" rx="32" fill="#000" />
          </mask>
          <linearGradient id={`${uid}-bezel`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#26262a" />
            <stop offset="0.5" stopColor="#0c0c0e" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
        </defs>
        {/* bezel with the screen cut out so the screenshot shows through */}
        <rect width="300" height="446" rx="44" fill={`url(#${uid}-bezel)`} mask={`url(#${uid}-screen)`} />
        {/* titanium rim highlights */}
        <rect x="1" y="1" width="298" height="444" rx="43" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
        <rect x="4.5" y="4.5" width="291" height="437" rx="39.5" stroke="rgba(0,0,0,0.55)" strokeWidth="1" />
        {/* side buttons */}
        <rect x="0" y="150" width="2.5" height="34" rx="1.25" fill="#1a1a1c" />
        <rect x="0" y="196" width="2.5" height="34" rx="1.25" fill="#1a1a1c" />
        <rect x="297.5" y="176" width="2.5" height="58" rx="1.25" fill="#1a1a1c" />
        {/* Dynamic Island */}
        <rect x="113" y="23" width="74" height="23" rx="11.5" fill="#000" />
      </svg>
    </div>
  );
}

export default function ScreenshotsCarousel() {
  const t = useTranslations('CarouselPages');
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const bar = barRef.current;
      if (!section || !track) return;

      const cards = gsap.utils.toArray(track.querySelectorAll('.bp-shot'));
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Coverflow focus: centered card at full scale/opacity, neighbours recede.
      const focus = () => {
        const mid = window.innerWidth / 2;
        cards.forEach((img) => {
          const r = img.getBoundingClientRect();
          const c = r.left + r.width / 2;
          const d = Math.min(1, Math.abs(c - mid) / (window.innerWidth * 0.55));
          const scale = 1 - 0.18 * d;
          const op = 1 - 0.55 * d;
          const ry = ((c - mid) / mid) * -9;
          const ty = d * 18;
          img.style.transform = `perspective(1200px) rotateY(${ry}deg) scale(${scale}) translateY(${ty}px)`;
          img.style.opacity = op;
          img.style.boxShadow = `0 ${18 + (1 - d) * 22}px ${40 + (1 - d) * 30}px rgba(86,35,21,${0.14 + (1 - d) * 0.12})`;
          img.style.zIndex = String(Math.round((1 - d) * 10));
        });
      };

      // Pin + horizontal scrub is a desktop flourish; on small/touch screens fall
      // back to native horizontal swipe so the page never feels "stuck".
      const isDesktop =
        window.matchMedia('(min-width: 861px)').matches &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const canPin = !reduce && isDesktop && track.scrollWidth > window.innerWidth;

      if (!canPin) {
        // Fallback: native horizontal scroll, no coverflow transforms.
        section.classList.add('is-static');
        return;
      }

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 32),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + (track.scrollWidth - window.innerWidth + 200),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar) bar.style.width = 8 + self.progress * 92 + '%';
            focus();
          },
          onRefresh: focus,
        },
      });
      focus();
    },
    { scope: sectionRef }
  );

  return (
    <section id="screenshots" ref={sectionRef} className="bp-shots">
      <div className="bp-shots-head">
        <div className="bp-eyebrow" style={{ marginBottom: 16 }}>
          <span className="bp-eyebrow-rule" />
          <span className="bp-eyebrow-text bp-mont">{t('badge')}</span>
        </div>
        <h2 className="bp-h2 bp-mont" style={{ maxWidth: 560 }}>{t('title')}</h2>
        <div className="bp-shots-progress">
          <div className="bp-shots-bar-wrap">
            <div ref={barRef} className="bp-shots-bar" />
          </div>
          <span className="bp-shots-hint bp-mont">{t('scroll_hint')} →</span>
        </div>
      </div>

      <div className="bp-shots-viewport">
        <div ref={trackRef} className="bp-shots-track">
          {images.map((src, index) => (
            <PhoneShot
              key={src}
              src={src}
              alt={`${t('title')} ${index + 1}`}
              index={index}
              eager={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
