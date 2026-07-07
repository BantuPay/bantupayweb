import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Intro() {
  const t = await getTranslations('IntroPage');

  return (
    <section id="top" className="bp-hero">
      <div className="bp-copy">
        <div className="bp-rv bp-eyebrow">
          <span className="bp-eyebrow-rule" />
          <span className="bp-eyebrow-text bp-mont">{t('badge')}</span>
        </div>

        <h1 className="bp-h1 bp-mont">
          <span className="bp-line-mask">
            <span className="bp-title-line">{t('headline_1')}</span>
          </span>
          <span className="bp-line-mask">
            <span className="bp-title-line">{t('headline_2')}</span>
          </span>
          <span className="bp-line-mask">
            <span className="bp-title-line bp-accent-text">{t('headline_3')}</span>
          </span>
        </h1>

        <p className="bp-rv bp-lead">{t('description')}</p>

        <div className="bp-rv bp-cta-row">
          <button type="button" className="magnetic bp-btn-primary bp-cta bp-mont">
            <span>{t('cta_primary')}</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" className="magnetic bp-btn-ghost bp-mont">
            <span>{t('cta_secondary')}</span>
          </button>
        </div>

        <div className="bp-rv bp-stats">
          <div>
            <div className="bp-count bp-stat-num bp-mont" data-count="50" data-suffix="K+">50K+</div>
            <div className="bp-stat-label">{t('stat_users')}</div>
          </div>
          <div className="bp-stat-divider" />
          <div>
            <div className="bp-count bp-stat-num bp-mont" data-count="99.9" data-decimals="1" data-suffix="%">99.9%</div>
            <div className="bp-stat-label">{t('stat_uptime')}</div>
          </div>
          <div className="bp-stat-divider" />
          <div>
            <div className="bp-stat-num bp-mont">24/7</div>
            <div className="bp-stat-label">{t('stat_support')}</div>
          </div>
        </div>
      </div>

      <div className="bp-visual">
        <div className="bp-visual-glow" />
        <div className="bp-visual-ring" />
        <Image
          src="/Artboard.webp"
          alt={`BantuPay – ${t('headline_1')} ${t('headline_2')} ${t('headline_3')}`}
          width={900}
          height={700}
          priority
          fetchPriority="high"
          className="bp-hero-img"
          sizes="(max-width: 860px) 90vw, 50vw"
          quality={82}
        />
      </div>

      <div className="bp-scroll bp-mont">
        <span className="bp-scroll-label">Scroll</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ animation: 'bpChev 1.8s ease-in-out infinite' }}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
