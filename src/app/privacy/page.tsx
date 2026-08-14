import { site } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LifestyleIQ handles website contact messages and on-device diary data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-evergreen">
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: August 14, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Scope</h2>
          <p className="mt-3">
            This policy covers the LifestyleIQ marketing website and, at a high
            level, the current LifestyleIQ mobile app. It is written for a
            pre-launch product and will be updated before public store release.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Website Contact Form
          </h2>
          <p className="mt-3">
            If you send a message through the contact form, we collect your
            name, email address, and message so we can reply. Messages are
            delivered to {site.contactEmail}. Please do not include passwords,
            medical record numbers, or detailed health information in a website
            inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            App Diary Data
          </h2>
          <p className="mt-3">
            In the current app, diary entries are stored on your device. We do
            not operate a cloud sync service for health logs at this time.
            Future cloud features will require explicit consent before any
            diary data leaves the device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Analytics and Cookies
          </h2>
          <p className="mt-3">
            This marketing site does not use advertising cookies or a third-party
            analytics pixel. Hosting providers may collect standard server logs
            such as IP address, browser type, and request time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Your Choices</h2>
          <p className="mt-3">
            You can email {site.contactEmail} to ask what contact-form
            information we hold, or to request that we delete an inquiry you
            sent. Device diary data is controlled on the device until you
            uninstall the app or use in-app deletion tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Changes</h2>
          <p className="mt-3">
            We will update this page when data practices change, especially
            before launching cloud sync, accounts, or store listings.
          </p>
        </section>
      </div>
    </main>
  );
}
