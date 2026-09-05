import { site } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'browser',
    background_color: '#FAF8F4',
    theme_color: '#287E80',
    icons: [
      {
        src: '/brand/plectara-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
