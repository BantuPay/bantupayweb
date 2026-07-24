import { getTranslations } from 'next-intl/server';

const plans = [
  { name: 'GOLD', price: '3.00 USD', features: [true, true, true, true, true, true, true, true, true], popular: false },
  { name: 'DIASPORA+', price: '3.00 USD', features: [true, true, false, true, true, true, true, true, true], popular: false },
  { name: 'PREMIUM', price: '2.00 USD', features: [true, true, false, true, true, true, true, false, false], popular: false },
  { name: 'SILVER', price: '1.00 USD', features: [true, true, false, true, false, true, true, false, false], popular: false },
  { name: 'DIASPORA', price: '0.00 USD', features: [true, true, false, true, true, false, true, true, false], popular: false },
  { name: 'BASIC', price: '0.00 USD', features: [true, true, false, true, false, true, true, false, false], popular: false },
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#1F8A5B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Pricing() {
  const t = await getTranslations('PricingPage');
  const featuresList = t.raw('features');

  return (
    <section id="pricing" className="bp-pricing">
      <div className="bp-pricing-head">
        <div className="bp-reveal bp-eyebrow" style={{ justifyContent: 'center' }}>
          <span className="bp-eyebrow-rule" />
          <span className="bp-eyebrow-text bp-mont">{t('header_badge')}</span>
        </div>
        <h2 className="bp-reveal bp-h2 bp-mont" style={{ marginTop: 16, marginBottom: 16 }}>{t('title')}</h2>
        <p className="bp-reveal bp-about-lead" style={{ margin: '0 auto' }}>{t('description')}</p>
      </div>

      <div className="bp-reveal bp-pricing-scroll">
        <div className="bp-pricing-row">
          {/* label column */}
          <div className="bp-plan-labels">
            <div className="bp-label-head bp-mont">{t('features_header')}</div>
            {featuresList.map((feature, i) => (
              <div key={i} className="bp-label-cell">{feature}</div>
            ))}
            <div className="bp-label-foot bp-mont">{t('pricing_header')}</div>
          </div>

          {/* plan columns */}
          {plans.map((plan) => (
            <div key={plan.name} className={`bp-plan${plan.popular ? ' bp-plan-popular' : ''}`}>
              {plan.popular && <div className="bp-plan-badge bp-mont">★ {t('most_popular')}</div>}
              <div className="bp-plan-head bp-mont">{plan.name}</div>
              {plan.features.map((included, i) => (
                <div key={i} className="bp-cell">
                  {included ? <Check /> : <span className="bp-dash">—</span>}
                </div>
              ))}
              <div className="bp-plan-foot bp-mont">{plan.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
