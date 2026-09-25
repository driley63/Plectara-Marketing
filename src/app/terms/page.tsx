import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description:
    'Terms of use for the Plectara app: not medical care, account rules, and how privacy and optional AI work in this version.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-link">
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
        Plectara Terms of Use
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: 12 September 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <p>
          These terms govern your use of the Plectara mobile app. If you do not
          agree, do not use the app.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Not Medical Care
          </h2>
          <p className="mt-3">
            Plectara is a personal health diary. It is not a medical device and
            does not diagnose, treat, or replace professional medical care.
            Insights and optional AI explanations are informational only. Seek
            care for urgent or worsening symptoms. We do not claim ISO 27001,
            SOC 2, or HIPAA certification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Your Account</h2>
          <p className="mt-3">
            You may use Plectara with an account (email, Apple, or Google). Keep
            your credentials safe. You are responsible for activity on your
            account. Preferences → Account lets you log out or delete the
            account and on-device diary data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Acceptable Use
          </h2>
          <p className="mt-3">
            Use Plectara for your own personal logging. Do not attempt to break
            the service, scrape other people&apos;s data, or upload content you
            do not have the right to store. Do not use the app to provide
            clinical care to others.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Privacy</h2>
          <p className="mt-3">
            The{' '}
            <Link
              href="/privacy"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            describes how information is handled, including on-device diary
            storage, optional Health imports, optional findings-only AI, and
            planned cloud backup only after separate consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Intellectual Property
          </h2>
          <p className="mt-3">
            Plectara, its marks, and the app software are owned by Plectara. You
            keep the diary content you create.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Disclaimer</h2>
          <p className="mt-3">
            The app is provided as is. We disclaim warranties to the extent
            allowed by law. We are not liable for decisions you make based on
            insights or AI text.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Changes</h2>
          <p className="mt-3">
            We may update these terms. The new date will appear above. The
            hosted copy is{' '}
            <Link
              href="/terms"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              plectara.com/terms
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Contact</h2>
          <p className="mt-3">
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              {site.supportEmail}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
