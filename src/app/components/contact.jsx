'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import useReveal from './useReveal';

export default function ContactForm() {
  const t = useTranslations('ContactPages');
  const ref = useRef(null);
  useReveal(ref);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:admin@bantu-pay.com?subject=Contact%20Form%20Message&body=Name:%20${encodeURIComponent(
      form.name
    )}%0AEmail:%20${encodeURIComponent(form.email)}%0APhone:%20${encodeURIComponent(
      form.phone
    )}%0AMessage:%20${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="bp-contact">
      <div className="bp-contact-grid">
        <div className="bp-reveal">
          <div className="bp-eyebrow" style={{ marginBottom: 18 }}>
            <span className="bp-eyebrow-rule" />
            <span className="bp-eyebrow-text bp-mont">{t('badge')}</span>
          </div>
          <h2 className="bp-h2 bp-mont" style={{ marginBottom: 16 }}>{t('title')}</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#6B5B4F', maxWidth: 420 }}>{t('description')}</p>
        </div>

        <form className="bp-reveal bp-contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bp-input bp-input--cream"
            placeholder={t('name')}
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            required
          />
          <input
            type="email"
            className="bp-input bp-input--cream"
            placeholder={t('email')}
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            required
          />
          <input
            type="tel"
            className="bp-input bp-input--cream bp-col-span"
            placeholder={t('phone')}
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
          <textarea
            className="bp-input bp-input--cream bp-col-span"
            placeholder={t('message')}
            rows={5}
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            style={{ resize: 'vertical' }}
          />
          <button type="submit" className="magnetic bp-btn-primary bp-mont">
            <span>{t('buttonMsg')}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
