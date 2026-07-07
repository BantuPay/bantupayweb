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

      const canPin = !reduce && track.scrollWidth > window.innerWidth;

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
            <Image
              key={src}
              src={src}
              alt={`${t('title')} ${index + 1}`}
              width={300}
              height={450}
              className="bp-shot"
              sizes="300px"
              quality={80}
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
