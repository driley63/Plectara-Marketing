import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LifestyleIQ stores diary data on your device, optional Apple Health and Health Connect imports, and your rights.',
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
        LifestyleIQ Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: 18 August 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <p>
          This policy describes how LifestyleIQ handles information on your
          device. It is written for users in the United States and is also
          intended to meet the spirit of the EU GDPR for health data.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Who We Are</h2>
          <p className="mt-3">
            LifestyleIQ is a personal health diary. It is not a medical device
            and does not diagnose or treat conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">What We Store</h2>
          <p className="mt-3">
            Diary entries you log (including meals, symptoms, sleep, activity,
            vitals, weight, medications, and notes), optional photos you attach
            to saved meals, preferences, and onboarding choices are stored on
            this device. We do not operate a LifestyleIQ cloud account yet.
            Future cloud sync will require a separate, explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Apple Health and Health Connect
          </h2>
          <p className="mt-3">
            If you choose to connect Apple Health (iOS) or Health Connect
            (Android), LifestyleIQ reads — and does not write — the following
            data from that store, only from the date you started using
            LifestyleIQ:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Sleep sessions</li>
            <li>Workouts and activities (including distance when available)</li>
            <li>Body weight</li>
            <li>Resting heart rate</li>
            <li>Blood pressure</li>
          </ul>
          <p className="mt-3">
            We do not import continuous heart-rate streams, meals, medications,
            bowel logs, clinical records, or other Health categories.
          </p>
          <p className="mt-3">
            Imported rows become LifestyleIQ diary entries. They count toward
            logging, streaks, and insights the same as entries you type in. They
            are labeled so you can see they came from Apple Health or Health
            Connect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Consent</h2>
          <p className="mt-3">
            Connecting is optional and skippable during onboarding. You can
            connect or disconnect later in Preferences. Disconnecting stops new
            imports. Copies already in LifestyleIQ stay until you delete those
            entries or remove the app. After disconnect we will not query Apple
            Health or Health Connect again. You can also revoke LifestyleIQ in
            the Health or Health Connect apps on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Your Rights</h2>
          <p className="mt-3">
            You can edit or delete individual diary entries in the app.
            Uninstalling LifestyleIQ removes local data on that device. If GDPR
            applies to you, you may request access or erasure of personal data
            we hold by emailing{' '}
            <a
              href="mailto:dustin@dustinriley.io"
              className="font-medium text-evergreen underline-offset-2 hover:underline"
            >
              dustin@dustinriley.io
            </a>
            . Because v1 stores data on-device, erasure on this phone is done by
            deleting entries or the app.
          </p>
          <p className="mt-3">
            We do not sell health data. We do not use Apple Health or Health
            Connect data for advertising. Analytics, if enabled, must not
            include diary contents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Children</h2>
          <p className="mt-3">
            LifestyleIQ is not directed at children under 16.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Changes</h2>
          <p className="mt-3">
            We will update this policy when our practices change and show the
            new date above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Contact</h2>
          <p className="mt-3">
            <a
              href="mailto:driley@vesperiq.io"
              className="font-medium text-evergreen underline-offset-2 hover:underline"
            >
              driley@vesperiq.io
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
