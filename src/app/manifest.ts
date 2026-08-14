import { site } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'browser',
    background_color: '#F7FAFB',
    theme_color: '#16AA8D',
    icons: [
      {
        src: '/brand/lifestyleiq_app_icon_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
