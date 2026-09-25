import { site } from '@/lib/site';

type FaqEntry = { question: string; answer: string };

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  // Escape `<` so answer text can never close the script tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalEntity,
        url: site.url,
        email: site.contactEmail,
        logo: `${site.url}/brand/plectara-1024.png`,
        description: site.description,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: site.supportEmail,
            url: `${site.url}/support`,
            availableLanguage: 'English',
          },
          {
            '@type': 'ContactPoint',
            contactType: 'technical support',
            email: site.supportEmail,
            url: `${site.url}/support`,
            availableLanguage: 'English',
          },
        ],
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

  return <JsonLdScript data={data} />;
}

export function FaqPageJsonLd({
  path,
  faqs,
}: {
  path: string;
  faqs: readonly FaqEntry[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${site.url}${path}#faq`,
    url: `${site.url}${path}`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return <JsonLdScript data={data} />;
}
