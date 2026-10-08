import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Plectara handles diary data, accounts, Apple Health and Health Connect, and optional OpenAI explanations.',
  path: '/privacy',
});

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
      <p className="mt-4 text-sm text-muted">Last updated: 8 October 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <p>
          This policy describes how Plectara handles information in the app and
          on this website. It is written for users in the United States and is
          also intended to meet the spirit of the EU GDPR for health data.
          Using Plectara requires an account. This version does not sync your
          diary to Plectara servers. Health import and optional cloud AI each
          require their own permission.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Who We Are</h2>
          <p className="mt-3">
            Plectara is a personal health diary and pattern tool. It is not a
            medical device and does not diagnose or treat conditions. Insights
            and optional AI are informational only. We do not claim ISO 27001,
            SOC 2, or HIPAA certification.
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
              Diary entries you log — meals, beverages (water, caffeine, or
              alcohol, if you track them), symptoms, sleep, activity, vitals,
              weight, medications and supplements, bowel movements, period days
              (if you track your cycle), Daily Check-In ratings, notes, and
              similar logs we add
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
              Medication start dates and other changes you choose to compare
              symptoms around (such as a diet change, with its name and start
              date)
            </li>
            <li>
              Account identifiers from sign-in (see Account and Sign-In)
            </li>
          </ul>
          <p className="mt-3">
            The on-device health database is encrypted at rest. Optional photos
            you attach to saved meals are encrypted at rest in the app sandbox.
            Those encryption keys are stored in the platform secure store (iOS
            Keychain / Android Keystore). Sensitive health-adjacent preferences
            also use that store. The encrypted diary and saved-meal photos are
            excluded from iCloud Backup on iOS and from Android Auto Backup and
            device-to-device transfer. Minimized Home Screen widget snapshots,
            including a small decoded meal thumbnail when a saved meal is
            pinned, are not inside the encrypted database and can still be
            included in device backup.
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
            the phone. Signing in does not sync your diary in this version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Online Backup and Cloud SQL (Not in This Version)
          </h2>
          <p className="mt-3">
            This version does not sync your diary to Plectara servers. Online
            backup is optional and is not required to use the app. A future
            cloud backup, after a separate, explicit, revocable consent, may
            store diary records in production Google Cloud SQL so you can
            restore or use another device. Meal photos stay on the device
            unless we later add photo backup and update this policy. Until you
            consent to that backup, diary data stays on this device.
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
            Pattern Insights are computed on this device from your diary.
            Insights are not diagnoses. Optional cloud AI is off until you
            allow it on a dedicated in-app permission screen. The medical
            disclaimer does not grant this permission.
          </p>
          <p className="mt-3">
            When you tap Allow, Plectara may send structured on-device findings
            — codes, labels, metrics, a care-urgency label, and the local
            summary — to Plectara’s cloud service (Google Cloud). Before
            anything leaves your device, names you gave meals, activities,
            symptoms, medications, doses, and conditions are replaced with
            generic placeholders such as “Food 1” or “Symptom 2”; the app swaps
            the real names back in on your device when it shows the reply. That
            service then sends the same findings to OpenAI, a third-party AI
            provider, so OpenAI can write a plain-language explanation at most
            once per day when you open the app. AI chat about recent findings
            uses the same findings-only context and also sends the question you
            type and recent chat turns, with names Plectara recognizes replaced
            the same way. Words you type that Plectara does not recognize as one
            of your logged names are sent as written. We do not send your full
            diary, notes, photos, password, any cycle tracking data, or your
            Energy, Mood, and Stress ratings. Findings about alcohol stay on
            this device unless you also turn on Include Alcohol in AI Insights,
            which is off by default.
            Before-and-after comparisons around other changes you add (such as
            a diet change) stay on this device and are never sent, including
            the names you give those changes. Comparisons around a medication
            start date may be sent with the medication name replaced by a
            placeholder.
          </p>
          <p className="mt-3">
            Those explanations are labeled AI-assisted. On-device Insights
            still run if you tap Don’t Allow. You can change explanation and
            chat later in Preferences → AI Insights. Delete Account removes
            on-device AI artifacts and clears the stored permission. OpenAI
            processes this data as our subprocessor under its API terms. We do
            not use it for advertising or sell it. Under OpenAI’s current API
            data-usage policy, API inputs are not used to train OpenAI models.
            OpenAI’s privacy policy is at{' '}
            <a
              href="https://openai.com/policies/privacy-policy"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              openai.com/policies/privacy-policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Cycle Tracking
          </h2>
          <p className="mt-3">
            Cycle tracking is optional and offered only when your profile&apos;s
            sex assigned at birth is female. If you turn it on, Plectara stores
            period days, the flow level you choose, and whether you use
            hormonal birth control or have reached menopause, on this device
            only. Cycle findings and next-period estimates are worked out on
            this device and are never sent to Plectara&apos;s cloud service or
            OpenAI, even when AI explanation or chat is on. Next-period
            estimates appear only inside the app, never as notifications. The
            Home Screen widget tile for cycle tracking shows a neutral label
            you can rename (default &ldquo;Daily Log&rdquo;) and never shows
            period or flow wording. If you change your profile so cycle
            tracking no longer applies, the tracker is hidden and your logged
            period days stay until you delete them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Beverages</h2>
          <p className="mt-3">
            Beverage tracking is optional. If you turn it on, you choose
            whether to track water, caffeine, or alcohol. Plectara stores each
            serving&apos;s amount and time (or, for amounts you add to a
            day&apos;s total, just the day) in your encrypted diary on this
            device, and includes them when you export your data. Water and
            caffeine are stored as volume; alcohol is stored as a count of
            drinks. Meals you tag Caffeine or Alcohol also count as one
            serving. Patterns Plectara finds, such as caffeine late in the day
            before poor sleep, are observations, not diagnoses. Water and
            caffeine findings follow the same AI sharing choice as other
            findings. Alcohol findings are worked out on this device and are
            never sent to Plectara&apos;s cloud service or OpenAI unless you
            turn on Include Alcohol in AI Insights (Preferences → AI Insights),
            which is off by default. The Home Screen widget and watch apps
            never show alcohol.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Energy, Mood, and Stress
          </h2>
          <p className="mt-3">
            If you choose More Energy, Better Mood, or Less Stress as a goal,
            the Daily Check-In offers optional 0–10 ratings for Energy, Mood,
            and Stress. You can skip any of them. These ratings are stored in
            your encrypted diary on this device and included when you export
            your data. The patterns Plectara finds in them, and the names of
            these goals, are worked out on this device and are never sent to
            Plectara&apos;s cloud service or OpenAI, even when AI explanation
            or chat is on. Plectara does not diagnose mood or mental health
            conditions. If your ratings stay very low for Mood or very high for
            Stress, Insights may suggest reaching out to someone you trust or a
            clinician; that suggestion is shown only on this device.
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
            Plectara, and only while the matching log is turned on:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Sleep sessions, while sleep tracking is on</li>
            <li>
              Workouts and activities (including distance when available),
              while activity tracking is on
            </li>
            <li>Body weight, while weight tracking is on</li>
            <li>
              Resting heart rate and blood pressure, while vitals tracking is
              on
            </li>
            <li>Menstrual flow, only while cycle tracking is on</li>
          </ul>
          <p className="mt-3">
            Turning a log off stops new imports of that data. Logs already
            saved stay until you delete them. Turning the log back on includes
            it again from the date you started using Plectara. We do not delete
            imported logs when you disconnect Apple Health or Health Connect.
          </p>
          <p className="mt-3">
            We do not import continuous heart-rate streams, meals, medications,
            bowel logs, clinical records, or other Health categories.
          </p>
          <p className="mt-3">
            Imported rows become Plectara diary entries. They count toward
            logging, streaks, and insights the same as entries you type in.
            They are labeled so you can see they came from Apple Health or
            Health Connect. Connecting is optional and skippable. Imported rows
            stay on this device in this version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Consent</h2>
          <p className="mt-3">
            Health import, live cloud AI, and AI chat are each optional.
            Account sign-in is required to use Plectara; diary sync is not part
            of this version. You can skip Health during onboarding and change
            Health and AI later in Preferences. Cloud AI asks Allow or Don’t
            Allow on a dedicated screen that names OpenAI before any findings
            are sent. Disconnecting Health stops new imports. Copies already in
            Plectara stay until you delete those entries or close your
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
            Analytics and diagnostic logs, if enabled, may send operational
            event names and coded parameters to Firebase Analytics. They must
            not include diary contents, medication names, notes, photos, or
            similar health free text. Firebase also records screen views and
            sessions, a random ID for each app install, and an approximate
            region worked out from your IP address; Plectara does not ask for
            your location. Plectara turns off Firebase&apos;s collection of
            your device&apos;s advertising ID. We do not sell health data. We
            do not use Apple Health, Health Connect, or diary data for
            advertising.
          </p>
          <p className="mt-3">
            If you email support from this website, we receive the address and
            message you send so we can reply. Do not send sensitive health
            information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Service Providers
          </h2>
          <p className="mt-3">
            We use processors only to run Plectara: Auth0 for sign-in; Google
            Cloud to host the API; OpenAI for optional AI explanations and chat
            after you allow it; Apple and Google for Health platforms and Sign
            In; and Firebase for optional analytics, distribution, or abuse
            checks that do not include diary contents. They are not given your
            data to market their own products to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Retention</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Diary data, meal photos, profile, and settings stay on your device
              until you delete them, delete your account, or uninstall the app.
              This version does not keep a synced diary copy.
            </li>
            <li>
              Your sign-in account (Auth0), the daily AI usage counters, and a
              record of your AI sharing choices (on or off, and which consent
              version) on our cloud service are kept until you delete your
              account. The cloud service refuses AI requests unless that record
              shows you allowed sharing.
            </li>
            <li>
              Our cloud service keeps request logs (route, outcome, timing),
              which do not contain diary content, findings text, or chat
              messages, for about 30 days.
            </li>
            <li>
              If you allow AI explanation or chat, OpenAI may keep the findings
              and messages it receives for up to 30 days for abuse monitoring
              under its API data policy, then deletes them.
            </li>
            <li>
              An exported file is kept wherever you choose to save or send it.
              Plectara removes its temporary copy after sharing, or the next
              time the app opens.
            </li>
            <li>Website messages are kept as needed to respond.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Your Rights</h2>
          <p className="mt-3">
            You can edit or delete individual diary entries in the app.
          </p>
          <p className="mt-3">
            <strong>Export:</strong> Export My Data (Preferences → Account)
            creates one JSON file with your diary entries, profile (including
            changes you compare), medications (including start dates), saved
            meals and activities, habits, AI chat, consents, and settings,
            and opens your device&apos;s share sheet so you can save or send it.
            Meal photos are not included. The file is not encrypted, so anyone
            you share it with can read it. Plectara removes its temporary copy
            after sharing, or the next time the app opens.
          </p>
          <p className="mt-3">
            <strong>Delete:</strong> Delete Account (Preferences → Account)
            deletes the Auth0 sign-in account and removes diary data, meal
            photos, the Home Screen widget snapshot, health-import connection,
            on-device AI artifacts, and reminder schedules on this device. It
            does not delete files you already exported. The same email can be
            used to create a new account. If deletion cannot reach Auth0, the
            app does not say the account was deleted. Without the app, follow
            the steps on{' '}
            <Link
              href="/delete-account"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              plectara.com/delete-account
            </Link>
            .
          </p>
          <p className="mt-3">
            Email{' '}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              {site.supportEmail}
            </a>{' '}
            to request access to, correction of, or deletion of personal data
            we hold on our servers, including GDPR requests, or if Delete
            Account could not reach Auth0. After cloud backup ships, export and
            deletion will also cover identifiable Cloud SQL rows linked to your
            account.
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
