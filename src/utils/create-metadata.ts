import type { Metadata } from 'next';

export const createMetadata = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata => ({
  metadataBase: new URL('https://ratelimit.znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords: 'ratelimit, rate limit, rate-limit, upstash, redis, @upstash/ratelimit, @upstash/redis',

  colorScheme: 'light',

  title,
  description,

  applicationName: 'Upstash Rate Limiter test',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: `https://ratelimit.znagy.hu${path}`,
    title,
    description,
    siteName: 'Upstash Rate Limiter test',
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title,
    description,
  },
});
