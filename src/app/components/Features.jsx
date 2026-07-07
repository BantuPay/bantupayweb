import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const features = [
  { img: '/smartphone.png', title: 'feature1_title', description: 'feature1_description' },
  { img: '/money-transfer-1.png', title: 'feature2_title', description: 'feature2_description' },
  { img: '/customer-service.png', title: 'feature3_title', description: 'feature3_description' },
  { img: '/smartphone-1.png', title: 'feature4_title', description: 'feature4_description' },
  { img: '/store.png', title: 'feature5_title', description: 'feature5_description' },
  { img: '/transaction.png', title: 'feature6_title', description: 'feature6_description' },
  { img: '/payment.png', title: 'feature7_title', description: 'feature7_description' },
  { img: '/payment-method.png', title: 'feature8_title', description: 'feature8_description' },
];

export default async function FeaturesSection() {
  const t = await getTranslations('FeaturesPage');

  return (
    <section id="features" className="bp-features">
      <div className="bp-features-inner">
        <div className="bp-features-head">
          <div className="bp-reveal bp-feat-badge">
            <span className="dot" />
            <span className="txt bp-mont">{t('badge')}</span>
          </div>
          <h2 className="bp-reveal bp-h2 bp-h2-light bp-mont">{t('title')}</h2>
          <p className="bp-reveal bp-features-sub">{t('subtitle')}</p>
        </div>

        <div className="bp-features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="bp-reveal bp-feat">
              <div className="bp-feat-icon">
                <Image src={feature.img} alt="" width={34} height={34} loading="lazy" style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="bp-mont">{t(feature.title)}</h3>
              <p>{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
