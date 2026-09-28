import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
  title: 'Delete Your Account',
  description:
    'How to delete your Plectara account and associated data, in the app or by email, and what is deleted or kept.',
  path: '/delete-account',
});

const linkClass = 'font-medium text-link underline-offset-2 hover:underline';

export default function DeleteAccountPage() {
  const mailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Delete my Plectara account')}`;

  return (
    <main id="main">
      <section className="mx-auto max-w-[760px] px-4 py-16 text-base leading-7 text-muted sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-link">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
          Delete Your Plectara Account
        </h1>
        <p className="mt-4">
          This page explains how to delete your account for the Plectara app,
          published by {site.legalEntity}, and the data associated with it.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-deep-navy">
            Delete in the App
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Open Plectara and sign in.</li>
            <li>Go to Preferences → Account.</li>
            <li>Tap Delete Account and confirm.</li>
          </ol>
          <p className="mt-3">
            Deletion happens right away. If the app cannot reach our servers,
            it tells you the account was not deleted and keeps your diary, so
            you can try again or email us.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-deep-navy">
            Request Deletion by Email
          </h2>
          <p className="mt-3">
            If you no longer have the app, email{' '}
            <a href={mailto} className={linkClass}>
              {site.supportEmail}
            </a>{' '}
            from the email address you used to sign in, with the subject
            &ldquo;Delete my Plectara account.&rdquo; We may reply to confirm
            the request comes from the account owner. We complete requests
            within 30 days. Do not include health information in your email.
          </p>
          <a
            href={mailto}
            className="mt-6 inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
          >
            Email a Deletion Request
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-deep-navy">
            What Is Deleted
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Your sign-in account: email, name, and user ID.</li>
            <li>
              The record of your AI sharing choices and your daily AI usage
              counters on our cloud service.
            </li>
            <li>
              When you delete in the app, everything Plectara stores on that
              device: diary entries, meal photos, profile, medications, saved
              meals and activities, habits, AI chat, the Home Screen widget
              snapshot, the health-import connection, and reminders.
            </li>
          </ul>
          <p className="mt-3">
            Your diary is stored only on your device, never on our servers. An
            email request deletes your account and cloud records, but it cannot
            reach a device. To remove the diary from a device without the app
            open, uninstall Plectara from that device.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-deep-navy">
            What Is Kept, and for How Long
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Cloud service request logs (route, outcome, and timing, with no
              diary content, findings, or chat messages) are kept for about 30
              days.
            </li>
            <li>
              If you allowed AI explanation or chat, OpenAI may keep the
              findings and messages it received for up to 30 days for abuse
              monitoring, then deletes them.
            </li>
            <li>
              Files you exported with Export My Data stay wherever you saved or
              sent them.
            </li>
          </ul>
          <p className="mt-3">
            See the{' '}
            <Link href="/privacy" className={linkClass}>
              privacy policy
            </Link>{' '}
            for full details.
          </p>
        </section>
      </section>
    </main>
  );
}
