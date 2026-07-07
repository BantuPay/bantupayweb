// design-sync bundle entry — named re-exports of the app's default-exported
// section components (esbuild `export *` drops default exports), plus the
// i18n provider the client components read from context.
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../messages/en.json';

export function DsProvider({ children }) {
  return React.createElement(
    NextIntlClientProvider,
    { locale: 'en', messages, timeZone: 'UTC' },
    children,
  );
}

export { default as SectionHeader } from '../src/app/components/SectionHeader.jsx';
export { default as FullWidthCarousel } from '../src/app/components/carousel.jsx';
export { default as ContactForm } from '../src/app/components/contact.jsx';
export { default as Map } from '../src/app/components/map.jsx';
export { default as PreSignUpForm } from '../src/app/components/signup.jsx';
export { default as Navbar } from '../src/app/components/navBar.jsx';
export { default as LangSwitch } from '../src/app/components/ui/lang-switcher.jsx';
export { default as HomeBelowFold } from '../src/app/components/HomeBelowFold.jsx';
export { default as About } from '../src/app/components/About.jsx';
export { default as FeaturesSection } from '../src/app/components/Features.jsx';
export { default as Intro } from '../src/app/components/Intro.jsx';
export { default as Pricing } from '../src/app/components/Pricingss.jsx';
