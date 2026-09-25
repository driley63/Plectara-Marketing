import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const socialCard = {
  url: '/brand/plectara-social-card.png',
  width: 1200,
  height: 630,
  alt: 'Plectara',
} as const;

type SocialMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Next.js replaces (does not merge) the parent `openGraph` and `twitter`
 * objects, so every page that overrides them must supply the full set.
 */
export function socialMetadata({
  title,
  description,
  path,
}: SocialMetadataInput): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: new URL(path, site.url).toString(),
      siteName: site.name,
      title,
      description,
      images: [socialCard],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialCard.url],
    },
  };
}

export function pageMetadata({
  title,
  description,
  path,
}: SocialMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMetadata({
      title: `${title} · ${site.name}`,
      description,
      path,
    }),
  };
}
