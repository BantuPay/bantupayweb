import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { inter, sora, arimo } from '@/lib/fonts';
import JsonLd from '@/app/components/JsonLd';
import "@/app/globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bantupay.com';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Bantu Pay – Mobile Banking',
      template: '%s | Bantu Pay',
    },
    description: t('description'),
    keywords: [
      'Bantu Pay',
      'mobile banking',
      'money transfer',
      'DRC Congo',
      'e-wallet',
      'digital payments',
    ],
    authors: [{ name: 'Bantu Pay' }],
    openGraph: {
      title: 'Bantu Pay – Your Mobile Banking Who Assures',
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Bantu Pay',
      images: [
        {
          url: '/Artboard.webp',
          width: 900,
          height: 700,
          alt: 'Bantu Pay mobile banking',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bantu Pay',
      description: t('description'),
      images: ['/Artboard.webp'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sora.variable} ${arimo.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="preload"
          href="/Artboard.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="font-sohne antialiased">
        <JsonLd locale={locale} description={t('description')} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
