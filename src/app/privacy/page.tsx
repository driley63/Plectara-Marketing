import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Plectara handles diary data, required accounts and online sync, Apple Health and Health Connect, and AI insights.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-link">
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
        Plectara Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: 6 September 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <p>
          This policy describes how Plectara handles information in the app and
          on this website. It is written for users in the United States and is
          also intended to meet the spirit of the EU GDPR for health data.
          Using Plectara requires an account, and your diary syncs to our
          servers as part of the service. Health imports and optional cloud AI
          still have their own consent. Turning those on is separate from
          sync.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Who We Are</h2>
          <p className="mt-3">
            Plectara is a personal health diary and pattern tool. It is not a
            medical device and does not diagnose or treat conditions. Insights
            and optional AI are informational only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Information We Store
          </h2>
          <p className="mt-3">
            Depending on what you use, Plectara may store:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Diary entries you log — meals, symptoms, sleep, activity, vitals,
              weight, medications and supplements, bowel movements, notes, and
              similar logs we add (for example drink intake)
            </li>
            <li>Optional photos you attach to saved meals</li>
            <li>
              Preferences, onboarding choices, demographics you provide, tracked
              conditions, and learned or pinned habits
            </li>
            <li>
              Medication schedules, reminders you enable, streaks, and badges
            </li>
            <li>
              Account identifiers from sign-in (see Account and Sign-In)
            </li>
          </ul>
          <p className="mt-3">
            The on-device health database is encrypted at rest. The encryption
            key is stored in the platform secure store (iOS Keychain / Android
            Keystore). Sensitive health-adjacent preferences also use that
            store. Meal photos on disk and minimized Home Screen widget
            snapshots are not inside the encrypted database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Account and Sign-In
          </h2>
          <p className="mt-3">
            Using Plectara requires an account. We use a sign-in provider
            (Auth0) with Apple, Google, or email as available. We receive a
            user identifier and, when the provider supplies them, an email
            address and name (including Apple Hide My Email). We use this to
            create and recognize your Plectara account — not for advertising.
          </p>
          <p className="mt-3">
            We may add other sign-in methods later (including enterprise
            single sign-on). They attach to the same account model and this
            policy.
          </p>
          <p className="mt-3">
            Device unlock such as Face ID or the device passcode, if offered,
            stays on the device. Biometric templates are not sent to Plectara
            or the sign-in provider. They only unlock credentials already on
            the phone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Online Sync</h2>
          <p className="mt-3">
            Online sync is part of the service. It is not optional. Diary
            entries, preferences, habits, and related health records under your
            account are sent to Plectara servers so the app can back up,
            restore, and work across devices. That includes rows imported from
            Apple Health or Health Connect that became diary entries. Synced
            health data is linked to your account.
          </p>
          <p className="mt-3">
            We also collect this synced diary so we can later run de-identified
            or aggregated analysis — for example to improve Insights and the
            product. Those analysis sets are not used to advertise to you or
            sold as health data. Until a record is de-identified or aggregated,
            it remains linked to your account. Meal photos stay on the device
            unless we later add photo backup and update this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Home Screen Widgets
          </h2>
          <p className="mt-3">
            Quick Log widgets keep a small, privacy-aware snapshot on the
            device so you can capture without opening the app. Widget content
            is limited. Medication names are off by default. Widget snapshots
            are not a cloud backup.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Notifications
          </h2>
          <p className="mt-3">
            Reminders (for example medications or sleep) are optional and
            controlled in the app. Lock-screen and banner text should not
            expose sensitive diary detail. We may send account or sync status
            messages. Product email, if we add it, is for account and product
            notices — not health advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Insights and AI
          </h2>
          <p className="mt-3">
            Pattern Insights are computed from your diary. The diary syncs with
            your account. Insights are not diagnoses. Optional cloud AI, if you
            consent, is the only time structured findings are sent to a
            language-model provider.
          </p>
          <p className="mt-3">
            Optional live cloud AI (Settings → AI insights) is off by default.
            A separate consent is required. When both live AI and consent are
            on, Plectara may send structured on-device findings — codes,
            labels, metrics, and a care-urgency label — to a Plectara service
            so a contracted language-model provider can write a plain-language
            explanation. That explanation is labeled AI-assisted. We do not
            send your full diary, notes, or photos for this.
          </p>
          <p className="mt-3">
            Optional AI chat about recent findings has its own consent, also
            off by default. It uses the same findings-only context. Chat is not
            a clinician, does not replace Insights, and does not diagnose or
            prescribe. The medical disclaimer is separate and does not grant AI
            consent. You can turn live AI, narrative consent, and chat consent
            off at any time. Revoking chat consent clears the on-device thread.
            We do not keep long-lived chat transcripts on our servers for
            product history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Apple Health and Health Connect
          </h2>
          <p className="mt-3">
            If you choose to connect Apple Health (iOS) or Health Connect
            (Android), Plectara reads — and does not write — the following
            data from that store, only from the date you started using
            Plectara:
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
            Imported rows become Plectara diary entries. They count toward
            logging, streaks, and insights the same as entries you type in.
            They are labeled so you can see they came from Apple Health or
            Health Connect. Imported rows are included in the synced diary
            under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Consent</h2>
          <p className="mt-3">
            Health import, live cloud AI, and AI chat are each optional.
            Account and online sync are required to use Plectara. You can skip
            Health during onboarding and change Health and AI later in
            Preferences. Disconnecting Health stops new imports. Copies already
            in Plectara stay until you delete those entries or close your
            account. After disconnect we will not query Apple Health or Health
            Connect again. You can also revoke Plectara in the Health or Health
            Connect apps on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Analytics, Diagnostics, and This Website
          </h2>
          <p className="mt-3">
            Analytics and diagnostic logs, if enabled, must not include diary
            contents, medication names, notes, photos, or similar health free
            text — only operational codes and similar non-content metadata. We
            do not sell health data. We do not use Apple Health, Health
            Connect, or diary data for advertising.
          </p>
          <p className="mt-3">
            If you use a contact or support form on this website, we receive
            the name, email, and message you submit, via FormSubmit, so we can
            reply. Do not send sensitive health information through those
            forms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Service Providers
          </h2>
          <p className="mt-3">
            We use processors only to run Plectara: Auth0 for sign-in; Google
            Cloud to host the API and synced data; a contracted
            language-model provider for optional AI explanations and chat;
            Apple and Google for Health platforms and Sign In; Firebase for
            optional analytics, distribution, or abuse checks that do not
            include diary contents; and FormSubmit for website messages. They
            are not given your data to market their own products to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Retention</h2>
          <p className="mt-3">
            On-device data stays until you delete entries or uninstall the app.
            Synced account data stays until you delete those records or close
            the account. After de-identification or aggregation for product
            analysis, we do not re-attach those analysis sets to your account.
            Optional AI requests are processed to produce a response; we keep
            privacy-safe operational logs (route, outcome, timing), not full
            findings text or chat messages, for product history. Website
            messages are kept as needed to respond.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Your Rights</h2>
          <p className="mt-3">
            You can edit or delete individual diary entries in the app.
            Uninstalling Plectara removes local data on that device. It does
            not by itself erase your synced account. Email{' '}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              {site.supportEmail}
            </a>{' '}
            to request access, export, or erasure of identifiable data we hold,
            including GDPR requests. We will also delete or de-identify
            associated AI artifacts we control. Already aggregated analysis
            sets are not re-attached to your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Children</h2>
          <p className="mt-3">
            Plectara is not directed at children under 16.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Changes</h2>
          <p className="mt-3">
            We will update this policy when our practices change — including
            photo backup, additional sign-in methods, new AI uses, or when
            de-identified analysis actually begins — and show the new date
            above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Contact</h2>
          <p className="mt-3">
            Privacy questions:{' '}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              {site.supportEmail}
            </a>
            . For help using the app, visit{' '}
            <Link
              href="/support"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              product support
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
