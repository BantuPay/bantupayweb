'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitch() {
  const router = useRouter();
  const localActive = useLocale();

  const setLocale = (locale) => {
    if (locale !== localActive) router.replace(`/${locale}`);
  };

  return (
    <div
      className="bp-lang bp-mont"
      role="group"
      aria-label="Language"
    >
      <span
        role="button"
        tabIndex={0}
        aria-pressed={localActive === 'en'}
        className={localActive === 'en' ? 'bp-lang-active' : ''}
        onClick={() => setLocale('en')}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLocale('en')}
      >
        EN
      </span>
      <span
        role="button"
        tabIndex={0}
        aria-pressed={localActive === 'fr'}
        className={localActive === 'fr' ? 'bp-lang-active' : ''}
        onClick={() => setLocale('fr')}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLocale('fr')}
      >
        FR
      </span>
    </div>
  );
}
