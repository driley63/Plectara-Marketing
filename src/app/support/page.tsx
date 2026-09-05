import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Support',
  description:
    'Get help with Plectara: how to reach us, common app questions, and how to manage your on-device diary.',
  alternates: { canonical: '/support' },
};

const faqs = [
  {
    title: 'How Do I Contact Plectara?',
    body: (
      <>
        Use the form on this page or email{' '}
        <a
          href={`mailto:${site.supportEmail}`}
          className="font-medium text-link underline-offset-2 hover:underline"
        >
          {site.supportEmail}
        </a>
        . Please include your device type (iPhone or Android) and a short
        description of what you need. Do not send sensitive health information,
        photos of medical records, or diary contents.
      </>
    ),
  },
  {
    title: 'Where Is My Diary Stored?',
    body: (
      <>
        Plectara stores your log on this device. There is no Plectara cloud
        account yet. Future cloud sync will require a separate, explicit
        consent. See the{' '}
        <Link
          href="/privacy"
          className="font-medium text-link underline-offset-2 hover:underline"
        >
          privacy policy
        </Link>{' '}
        for details.
      </>
    ),
  },
  {
    title: 'How Do I Connect or Disconnect Apple Health or Health Connect?',
    body: (
      <>
        Connecting is optional. You can skip it during onboarding and connect or
        disconnect later in Preferences. Disconnecting stops new imports.
        Entries already copied into Plectara stay until you delete them or
        remove the app. You can also revoke access in the Health or Health
        Connect apps on your device.
      </>
    ),
  },
  {
    title: 'How Do I Delete My Data?',
    body: (
      <>
        Edit or delete individual diary entries in the app. Uninstalling
        Plectara removes local data on that device. If GDPR applies to you and
        you need help with an access or erasure request, email{' '}
        <a
          href={`mailto:${site.supportEmail}`}
          className="font-medium text-link underline-offset-2 hover:underline"
        >
          {site.supportEmail}
        </a>
        .
      </>
    ),
  },
  {
    title: 'Is Plectara Medical Advice?',
    body: (
      <>
        No. Plectara is a personal health diary with optional pattern spotting.
        It does not diagnose, treat, or replace professional care. Urgent or
        worsening symptoms deserve a clinician or emergency services. Read the{' '}
        <Link
          href="/legal"
          className="font-medium text-link underline-offset-2 hover:underline"
        >
          legal disclaimers
        </Link>
        .
      </>
    ),
  },
] as const;

export default function SupportPage() {
  return (
    <main id="main">
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
              <section key={faq.title}>
                <h2 className="text-xl font-semibold text-deep-navy">
                  {faq.title}
                </h2>
                <p className="mt-3">{faq.body}</p>
              </section>
            ))}
          </div>

          <div className="rounded-lg border border-divider bg-white p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-deep-navy">
              Send a Message
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Product questions, store listing issues, and bug reports are
              welcome. We will follow up at the email address you provide.
            </p>
            <div className="mt-6">
              <ContactForm
                subject="Plectara product support"
                toEmail={site.supportEmail}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
