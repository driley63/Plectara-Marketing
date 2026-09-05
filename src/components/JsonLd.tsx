import { site } from '@/lib/site';

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.contactEmail,
        logo: `${site.url}/brand/plectara-1024.png`,
        description: site.description,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${site.url}/#app`,
        name: site.name,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        url: site.url,
        description: site.description,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/PreOrder',
        },
        publisher: { '@id': `${site.url}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
