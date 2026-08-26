import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theaurorahills.in';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // We can add more URLs here if there are sub-pages (e.g. /about, /gallery).
    // For a single-page marketing site, this single entry is perfectly fine.
  ];
}
