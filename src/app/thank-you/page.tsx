import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Message Sent',
  description: 'Your message to LifestyleIQ was submitted.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thank-you' },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-deep-navy">
        Message Sent
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">
        Thanks for writing. If you used the contact form, we will follow up at
        the email address you provided. This is not a medical service—if you
        need care, contact a clinician or emergency services.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-md bg-brand px-6 text-base font-semibold text-white"
        >
          Back to home
        </Link>
      </p>
    </main>
  );
}
