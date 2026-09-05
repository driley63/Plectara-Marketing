import { site } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${site.url}/support`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${site.url}/legal`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
