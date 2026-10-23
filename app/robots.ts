import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/plots-in-dharwad'],
        disallow: ['/admin/', '/api/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/plots-in-dharwad'],
        disallow: ['/admin/', '/api/admin/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/admin/'],
      },
    ],
    sitemap: [
      'https://theaurorahills.com/sitemap.xml',
    ],
    host: 'https://theaurorahills.com',
  };
}
