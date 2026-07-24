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
  const missionLeft = t.raw('mission_left');
  const missionRight = t.raw('mission_right');
  const pillars = t.raw('pillars');

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
        <div className="bp-about-illus bp-mask-illus">
          <Image
            src="/HDlogo.jpg"
            alt={t('image_alt')}
            width={2000}
            height={1400}
            className="w-full"
            style={{
              height: 'auto',
              borderRadius: 20,
              boxShadow: '0 22px 50px rgba(0,0,0,0.50), 0 6px 18px rgba(0,0,0,0.32)',
            }}
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
            {missionLeft.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {missionRight.map((p, i) => (
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
