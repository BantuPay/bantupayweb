const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bantupay.com';

export default function JsonLd({ locale, description }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bantu Pay',
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/Logo.png`,
    description,
    sameAs: [
      'https://www.facebook.com/BantuPayLTD',
      'https://x.com/bantupayltd',
      'https://www.instagram.com/bantu_pay/',
      'https://www.linkedin.com/company/bantu-payment/',
      'https://www.tiktok.com/@bantu_pay',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'French'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
