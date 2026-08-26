import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/admin/'], // Protect admin routes from being crawled
    },
    sitemap: 'https://theaurorahills.in/sitemap.xml',
  };
}
