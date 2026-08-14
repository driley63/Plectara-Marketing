import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { StoreLinks } from '@/components/StoreLinks';
import { features, site } from '@/lib/site';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="mx-auto max-w-[1120px] px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-evergreen">
          Personal health intelligence
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-deep-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-[760px] text-lg leading-8 text-muted">
          LifestyleIQ helps you understand how daily habits affect health—then
          turns those signals into a plan you can actually follow. It is a
          diary with pattern spotting, not a doctor, not a chatbot, and not a
          generic tracker.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#download"
            className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-evergreen/90"
          >
            Get the app
          </Link>
          <Link
            href="#features"
            className="inline-flex h-12 min-w-11 items-center justify-center rounded-md border border-divider bg-white px-6 text-base font-semibold text-deep-navy transition-colors duration-[120ms] hover:border-slate-blue/40"
          >
            See features
          </Link>
        </div>
      </section>

      <section
        id="overview"
        aria-labelledby="overview-heading"
        className="border-t border-divider bg-white"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-[760px]">
            <h2
              id="overview-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Built around daily life, not data collection
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Most health apps ask you to track more. LifestyleIQ asks you to
              understand more. Log the parts of your day that matter—meals,
              movement, sleep, symptoms, vitals, medications—and the app looks
              for patterns you can use.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              AI is the engine, not the identity. Recommendations stay
              practical and plain. The system does not diagnose conditions, and
              it will not pretend otherwise.
            </p>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Understand',
                body: 'See how habits, symptoms, and routines relate across days—not just a list of entries.',
              },
              {
                title: 'Act',
                body: 'Turn patterns into a calmer next step: what to log, what to watch, and when to talk to a clinician.',
              },
              {
                title: 'Stay in control',
                body: 'Your diary stays on your device for now. You choose what to track, and you can change it as life changes.',
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="text-lg font-semibold text-deep-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="border-t border-divider"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-[760px]">
            <h2
              id="features-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              What you can do in LifestyleIQ
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              A focused health diary for iOS and Android, with insights that
              stay honest about their limits.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-md border border-divider bg-white p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-deep-navy">
                    {feature.title}
                  </h3>
                  {'ai' in feature && feature.ai ? (
                    <span className="inline-flex items-center gap-1 rounded-sm bg-canvas px-2 py-0.5 text-xs font-semibold text-ai">
                      <span aria-hidden="true">●</span>
                      AI-assisted
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="download"
        aria-labelledby="download-heading"
        className="border-t border-divider bg-white"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2
            id="download-heading"
            className="text-3xl font-semibold tracking-tight text-deep-navy"
          >
            Get LifestyleIQ
          </h2>
          <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
            App Store and Google Play listings will appear here when the app is
            ready for public download. Store links are placeholders for now.
          </p>
          <div className="mt-8">
            <StoreLinks />
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="border-t border-divider"
      >
        <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Contact
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              Questions about LifestyleIQ, press, or partnership? Send a
              message. This form is for general inquiries, not medical
              emergencies or clinical advice.
            </p>
            <p className="mt-4 text-sm text-muted">
              You can also email{' '}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium text-evergreen underline-offset-2 hover:underline"
              >
                {site.contactEmail}
              </a>
              .
            </p>
          </div>
          <div className="rounded-lg border border-divider bg-white p-5 sm:p-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <aside
        aria-labelledby="disclaimer-heading"
        className="border-t border-divider bg-white"
      >
        <div className="mx-auto max-w-[760px] px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id="disclaimer-heading"
            className="text-lg font-semibold text-deep-navy"
          >
            Not medical advice
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            LifestyleIQ is a personal log with pattern spotting. Insights are
            informational only. They do not diagnose, treat, or replace
            professional medical care. Urgent or worsening symptoms deserve
            professional attention—do not wait on an app insight. Read the{' '}
            <Link
              href="/legal"
              className="font-medium text-evergreen underline-offset-2 hover:underline"
            >
              full legal disclaimers
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="font-medium text-evergreen underline-offset-2 hover:underline"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
      </aside>
    </main>
  );
}
