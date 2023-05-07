import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://ratelimit.znagy.hu',
  sitemap: 'https://ratelimit.znagy.hu/sitemap.xml',
});

export default robots;
