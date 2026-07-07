'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const socials = [
  { href: 'https://www.facebook.com/BantuPayLTD?_rdc=1&_rdr', icon: '/facebook.svg', label: 'Facebook' },
  { href: 'https://www.instagram.com/bantu_pay/', icon: '/insta2.svg', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/bantu-payment/', icon: '/linkedin.svg', label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@bantu_pay', icon: '/tiktok2.svg', label: 'TikTok' },
];

export default function Footer() {
  const t = useTranslations('FooterPage');
  const locale = useLocale();

  return (
    <footer className="bp-footer">
      <div className="bp-footer-top">
        <div className="bp-footer-brand bp-mont">
          <Image src="/Logo.png" alt="BantuPay" width={36} height={36} style={{ height: 36, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
          <span>BantuPay</span>
        </div>

        <div className="bp-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="bp-social">
              <Image src={s.icon} alt="" width={17} height={17} style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} aria-hidden="true" />
            </a>
          ))}
          <a href="https://x.com/bantupayltd" target="_blank" rel="noopener noreferrer" aria-label="X" className="bp-social">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#F7F0E7" style={{ opacity: 0.85 }} aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bp-footer-bottom">
        <span>{t('rights')}</span>
        <div className="bp-footer-links">
          <Link href={`/${locale}/privacy-policy`}>{t('privacy')}</Link>
          <Link href={`/${locale}/terms-and-conditions`}>{t('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
