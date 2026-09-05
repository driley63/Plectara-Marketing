import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { StoreLinks } from '@/components/StoreLinks';
import { features, site } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <Image
          src="/marketing/hero-daily-habits.jpg"
          alt="A person walking a sunlit forest path at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-deep-navy/35"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-16 sm:px-6 min-h-[34rem] lg:min-h-[40rem] lg:grid-cols-[1fr_auto] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-fresh-lime">
              Personal health intelligence
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Translating Daily Habits into a Plan Towards Optimal Health.
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-8 text-white/85">
              Plectara helps you understand how daily habits affect
              health—then turns those signals into a plan you can actually
              follow. It is a diary with pattern spotting, not a doctor, not a
              chatbot, and not a generic tracker.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#download"
                className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
              >
                Get the App
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 min-w-11 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-white/20"
              >
                See Features
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            className="mx-auto max-lg:hidden"
            label="Today tab on device"
          />
        </div>
      </section>

      <section
        id="overview"
        aria-labelledby="overview-heading"
        className="border-t border-divider bg-white"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Built Around Daily Life, Not Data Collection
            </h2>
            <p className="mt-5 max-w-[760px] text-base leading-7 text-muted">
              Most health apps ask you to track more. Plectara asks you to
              understand more. Log the parts of your day that matter—meals,
              movement, sleep, symptoms, vitals, medications—and the app looks
              for patterns you can use.
            </p>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              AI is the engine, not the identity. Recommendations stay
              practical and plain. The system does not diagnose conditions, and
              it will not pretend otherwise.
            </p>
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
                  title: 'Stay in Control',
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
          <PhotoPlaceholder className="mx-auto" label="Timeline tab on device" />
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="border-t border-divider"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
            <PhotoPlaceholder
              className="mx-auto max-md:hidden"
              label="Insights tab on device"
            />
            <div>
              <h2
                id="features-heading"
                className="text-3xl font-semibold tracking-tight text-deep-navy"
              >
                What You Can Do in Plectara
              </h2>
              <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
                A focused health diary for iOS and Android, with insights that
                stay honest about their limits.
              </p>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-md border border-divider bg-white p-5"
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
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {feature.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="download"
        aria-labelledby="download-heading"
        className="border-t border-divider bg-white"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <h2
              id="download-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Get Plectara
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              App Store and Google Play listings will appear here when the app
              is ready for public download. Store links are placeholders for
              now.
            </p>
            <div className="mt-8">
              <StoreLinks />
            </div>
          </div>
          <div className="relative mx-auto flex min-h-[420px] w-full max-w-[480px] items-center justify-center">
            <PhotoPlaceholder
              className="absolute left-4 top-0 max-sm:hidden"
              label="Today tab on device"
            />
            <PhotoPlaceholder
              className="relative z-10 ml-16"
              label="Insights tab on device"
            />
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
              Questions about Plectara, press, or partnership? Send a
              message. For help with the app, use{' '}
              <Link
                href="/support"
                className="font-medium text-link underline-offset-2 hover:underline"
              >
                product support
              </Link>
              . These forms are for general inquiries, not medical emergencies
              or clinical advice.
            </p>
            <p className="mt-4 text-sm text-muted">
              You can also email{' '}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium text-link underline-offset-2 hover:underline"
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
            Not Medical Advice
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Plectara is a personal log with pattern spotting. Insights are
            informational only. They do not diagnose, treat, or replace
            professional medical care. Urgent or worsening symptoms deserve
            professional attention—do not wait on an app insight. Read the{' '}
            <Link
              href="/legal"
              className="font-medium text-link underline-offset-2 hover:underline"
            >
              full legal disclaimers
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="font-medium text-link underline-offset-2 hover:underline"
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
