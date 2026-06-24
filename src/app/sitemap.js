const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bantupay.com';

const routes = ['', '/privacy-policy', '/terms-and-conditions'];
const locales = ['en', 'fr'];

export default function sitemap() {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.5,
    }))
  );
}
