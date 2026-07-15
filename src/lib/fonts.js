import { Inter, Sora, Dancing_Script } from 'next/font/google';

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

// Expressive script accent for section subtitles
export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dancing',
  preload: true,
});
