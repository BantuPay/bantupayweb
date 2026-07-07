'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import useReveal from './useReveal';

export default function PreSignUpForm() {
  const t = useTranslations('SignupPages');
  const ref = useRef(null);
  useReveal(ref);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', accountType: '' });

  const accountOptions = [
    { value: 'diaspora', label: t('account_options.diaspora') },
    { value: 'business', label: t('account_options.business') },
    { value: 'startup', label: t('account_options.startup') },
    { value: 'premium', label: t('account_options.premium') },
    { value: 'basic_student', label: t('account_options.basic_student') },
    { value: 'agent', label: t('account_options.agent') },
  ];

  const handleChange = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = accountOptions.find((o) => o.value === formData.accountType)?.label || 'N/A';
    window.location.href = `mailto:admin@bantu-pay.com?subject=New SignUp Form&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAccount Type: ${account}`;
  };

  return (
    <section id="signup" ref={ref} className="bp-signup">
      <div className="bp-signup-inner">
        <div className="bp-reveal">
          <span className="bp-mission-eyebrow bp-mont">{t('badge')}</span>
          <h2 className="bp-h2 bp-h2-light bp-mont" style={{ margin: '14px 0 16px' }}>{t('pre_signup_title')}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: '#EDE0D4' }}>{t('pre_signup_description')}</p>
        </div>

        <form className="bp-reveal bp-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bp-input"
            placeholder={t('name_placeholder')}
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
          <input
            type="email"
            className="bp-input"
            placeholder={t('email_placeholder')}
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
          <input
            type="tel"
            className="bp-input"
            placeholder={t('phone_placeholder')}
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          <select
            className="bp-input"
            value={formData.accountType}
            onChange={(e) => handleChange('accountType', e.target.value)}
            style={{ color: formData.accountType ? '#2D1810' : '#8b7355' }}
          >
            <option value="">{t('account_placeholder')}</option>
            {accountOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <button type="submit" className="magnetic bp-btn-primary bp-mont" style={{ marginTop: 4 }}>
            <span>{t('signup_button')}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
