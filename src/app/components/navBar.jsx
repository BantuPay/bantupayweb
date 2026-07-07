import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import LangSwitch from './ui/lang-switcher';

export default async function Navbar() {
  const t = await getTranslations('IntroPage');

  return (
    <nav className="bp-nav" aria-label="Main navigation">
      <div className="bp-nav-inner">
        <a href="#top" className="bp-brand">
          <Image src="/Logo.png" alt="BantuPay" width={40} height={40} priority sizes="40px" style={{ height: 40, width: 'auto' }} />
          <span className="bp-brand-name bp-mont">BantuPay</span>
        </a>

        <div className="bp-nav-links bp-font-b">
          <a href="#features">{t('nav_features')}</a>
          <a href="#pricing">{t('nav_pricing')}</a>
          <a href="#about">{t('nav_about')}</a>
          <a href="#contact">{t('nav_contact')}</a>
        </div>

        <div className="bp-nav-actions">
          <LangSwitch />
          <button
            type="button"
            className="magnetic bp-btn-primary bp-cta bp-nav-cta bp-mont"
            style={{ fontSize: 14, borderRadius: 999, padding: '11px 22px', boxShadow: '0 6px 18px rgba(86,35,21,0.22)' }}
          >
            <span>{t('get_app')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
