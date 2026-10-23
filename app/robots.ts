import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
        ],
        allow: ['/', '/plots-in-dharwad', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/admin/'],
      },
      {
        userAgent: '*',
        allow: ['/', '/plots-in-dharwad', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/admin/'],
      },
    ],
    sitemap: [
      'https://theaurorahills.com/sitemap.xml',
    ],
    host: 'https://theaurorahills.com',
  };
}

