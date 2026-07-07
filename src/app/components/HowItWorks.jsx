import { getTranslations } from 'next-intl/server';

export default async function HowItWorks() {
  const t = await getTranslations('HowPage');

  const steps = [
    { num: '01', title: t('step1_title'), text: t('step1_description') },
    { num: '02', title: t('step2_title'), text: t('step2_description') },
    { num: '03', title: t('step3_title'), text: t('step3_description') },
  ];

  return (
    <section id="how" className="bp-how">
      <div className="bp-how-head">
        <span className="bp-eyebrow-rule" />
        <span className="bp-eyebrow-text bp-mont">{t('badge')}</span>
      </div>
      <div className="bp-how-grid">
        {steps.map((step) => (
          <div key={step.num} className="bp-step-card">
            <div className="bp-step-num bp-mont">{step.num}</div>
            <h3 className="bp-step-title bp-mont">{step.title}</h3>
            <p className="bp-step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
