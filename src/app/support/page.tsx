import { FaqPageJsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  title: 'Product Support',
  description:
    'Get help with Plectara: how to reach us, common app questions, and how to manage your diary and privacy controls.',
  path: '/support',
});

type FaqPart = string | { label: string; href: string };

const supportEmailLink = {
  label: site.supportEmail,
  href: `mailto:${site.supportEmail}`,
};

// One source for the visible FAQs and the FAQPage JSON-LD, so they cannot drift.
const faqs: readonly { question: string; parts: readonly FaqPart[] }[] = [
  {
    question: 'How Do I Contact Plectara?',
    parts: [
      'Email ',
      supportEmailLink,
      '. Please include your device type (iPhone, iPad, or Android) and a short description of what you need. Do not send sensitive health information, photos of medical records, or diary contents.',
    ],
  },
  {
    question: 'Where Is My Diary Stored?',
    parts: [
      'This version keeps your diary on this device. Signing in does not sync your log to Plectara servers. Health import and optional cloud AI are separate and require their own permission. See the ',
      { label: 'privacy policy', href: '/privacy' },
      ' for details.',
    ],
  },
  {
    question: 'How Do I Connect or Disconnect Apple Health or Health Connect?',
    parts: [
      'Connecting is optional. You can skip it during onboarding and connect or disconnect later in Preferences. Disconnecting stops new imports. Entries already copied into Plectara stay in your diary until you delete them. You can also revoke access in the Health or Health Connect apps on your device.',
    ],
  },
  {
    question: 'How Do I Delete My Data?',
    parts: [
      'Edit or delete individual diary entries in the app. Delete Account (Preferences → Account) deletes your Plectara sign-in account and removes diary data on this device. Uninstalling Plectara also removes local data on that device. Email ',
      supportEmailLink,
      ' for questions about your account, or if Delete Account could not finish.',
    ],
  },
  {
    question: 'Is Plectara Medical Advice?',
    parts: [
      'No. Plectara is a personal health diary with optional pattern spotting and optional AI that explains findings. It does not diagnose, treat, or replace professional care. Urgent or worsening symptoms deserve a clinician or emergency services. Read the ',
      { label: 'legal disclaimers', href: '/legal' },
      '.',
    ],
  },
];

const linkClass = 'font-medium text-link underline-offset-2 hover:underline';

function FaqAnswer({ parts }: { parts: readonly FaqPart[] }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return part;
    return part.href.startsWith('/') ? (
      <Link key={i} href={part.href} className={linkClass}>
        {part.label}
      </Link>
    ) : (
      <a key={i} href={part.href} className={linkClass}>
        {part.label}
      </a>
    );
  });
}

const faqEntries = faqs.map((faq) => ({
  question: faq.question,
  answer: faq.parts
    .map((part) => (typeof part === 'string' ? part : part.label))
    .join(''),
}));

export default function SupportPage() {
  const mailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Plectara product support')}`;

  return (
    <main id="main">
      <FaqPageJsonLd path="/support" faqs={faqEntries} />
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-link">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
          Product Support
        </h1>
        <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
          This page is for help with the Plectara app and this website. It is
          not a medical service. If you need care, contact a clinician or
          emergency services.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-8 text-base leading-7 text-muted">
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h2 className="text-xl font-semibold text-deep-navy">
                  {faq.question}
                </h2>
                <p className="mt-3">
                  <FaqAnswer parts={faq.parts} />
                </p>
              </section>
            ))}
          </div>

          <div className="rounded-lg border border-divider bg-white p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-deep-navy">
              Email Support
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Product questions, store listing issues, and bug reports are
              welcome. We reply at the address you send from. Do not include
              sensitive health information.
            </p>
            <p className="mt-4 text-base font-medium text-deep-navy">
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-link underline-offset-2 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
            <a
              href={mailto}
              className="mt-6 inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
            >
              Email Support
            </a>
            <p className="mt-4 text-sm text-muted">
              If your mail app does not open, copy the address above. See the{' '}
              <Link
                href="/privacy"
                className="font-medium text-link underline-offset-2 hover:underline"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
