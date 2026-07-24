import { Inter, Sora, Arimo } from 'next/font/google';

// Body / UI text
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

// Display / headings, kickers, buttons, brand — the site's primary voice
export const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sora',
  preload: true,
});

// Clean Arial-metric sans for section subtitles
export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-arimo',
  preload: true,
});
