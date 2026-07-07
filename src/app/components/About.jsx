import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Lock, Globe, Zap, Eye, Earth } from 'lucide-react';

const pillarIconMap = {
  security: Lock,
  global: Globe,
  speed: Zap,
  vision: Eye,
  impact: Earth,
};

export default async function About() {
  const t = await getTranslations('AboutPage');
  const storyBlocks = t.raw('story_blocks');
  const missionBlocks = t.raw('mission_blocks');
  const pillars = t.raw('pillars');
  const mid = Math.ceil(missionBlocks.length / 2);

  return (
    <section id="about" className="bp-about">
      <div className="bp-reveal bp-eyebrow" style={{ marginBottom: 18 }}>
        <span className="bp-eyebrow-rule" />
        <span className="bp-eyebrow-text bp-mont">{t('title')}</span>
      </div>
      <h2 className="bp-reveal bp-h2 bp-mont" style={{ marginBottom: 16, maxWidth: 720 }}>
        {t('empowering_financial')} {t('freedom')}
      </h2>
      <p className="bp-reveal bp-about-lead">{t('description')}</p>

      <div className="bp-about-grid">
        <div className="bp-reveal bp-about-illus">
          <Image
            src="/About.png"
            alt={t('image_alt')}
            width={560}
            height={560}
            className="w-full h-full"
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
            sizes="(max-width: 960px) 90vw, 420px"
          />
        </div>
        <div className="bp-reveal">
          <h3 className="bp-story-title bp-mont">{t('story_title')}</h3>
          <div className="bp-story-body">
            {storyBlocks.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bp-reveal bp-mission">
        <div className="bp-mission-left">
          <span className="bp-mission-eyebrow bp-mont">{t('mission_title')}</span>
          <h3 className="bp-mission-title bp-mont">{t('mission_headline')}</h3>
        </div>
        <div className="bp-mission-right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {missionBlocks.slice(0, mid).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {missionBlocks.slice(mid).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars */}
      <h3 className="bp-reveal bp-pillars-title bp-mont">{t('pillars_section_title')}</h3>
      <div className="bp-pillars">
        {pillars.map((pillar) => {
          const Icon = pillarIconMap[pillar.id] ?? Lock;
          return (
            <div key={pillar.id} className="bp-reveal bp-pillar">
              <div className="bp-pillar-icon">
                <Icon className="w-6 h-6" style={{ color: '#421904' }} strokeWidth={1.8} />
              </div>
              <h4 className="bp-mont">{pillar.title}</h4>
              <p>{pillar.summary}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
