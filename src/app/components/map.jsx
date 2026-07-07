'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useReveal from './useReveal';

export default function Coverage() {
  const t = useTranslations('MapPages');
  const regions = t.raw('regions');
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="coverage" ref={ref} className="bp-coverage">
      <div className="bp-reveal bp-eyebrow" style={{ justifyContent: 'center', marginBottom: 18 }}>
        <span className="bp-eyebrow-rule" />
        <span className="bp-eyebrow-text bp-mont">{t('badge')}</span>
      </div>
      <h2 className="bp-reveal bp-h2 bp-mont" style={{ marginBottom: 14 }}>{t('title')}</h2>
      <p className="bp-reveal bp-about-lead" style={{ margin: '0 auto 28px' }}>{t('description')}</p>

      <div className="bp-reveal bp-chips">
        {regions.map((region) => (
          <span key={region} className="bp-chip bp-mont">{region}</span>
        ))}
      </div>

      <Image
        src="/map.webp"
        alt="BantuPay coverage map"
        width={960}
        height={540}
        loading="lazy"
        className="bp-reveal bp-map-img"
        sizes="(max-width: 1000px) 92vw, 960px"
      />
    </section>
  );
}
