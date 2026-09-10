import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { StoreLinks } from '@/components/StoreLinks';
import { deviceShots, features, pillars, site, widgetShots } from '@/lib/site';
import { existsSync } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

function marketingSrc(file: string) {
  const onDisk = path.join(process.cwd(), 'public', 'marketing', file);
  return existsSync(onDisk) ? `/marketing/${file}` : undefined;
}

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
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-16 sm:px-6 min-h-[34rem] lg:min-h-[40rem] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16 xl:gap-x-24 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-fresh-lime">
              Personal health intelligence
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Your daily habits. A clearer picture of you.
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-8 text-white/85">
              What you eat, how you sleep, when you move, and how you feel are all part of
              your story. Plectara brings those everyday details together,
              helping you recognize patterns and take practical steps toward a
              healthier life.
            </p>
            <div className="mt-8">
              <Link
                href="#overview"
                className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
              >
                Explore Plectara
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            className="hidden justify-self-end lg:flex"
            frameClassName="origin-bottom rotate-[18deg] drop-shadow-2xl"
            label="Today tab on device"
            src={marketingSrc(deviceShots.hero)}
            priority
          />
        </div>
      </section>

      <section
        id="overview"
        aria-labelledby="overview-heading"
        className="scroll-mt-20 border-t border-divider bg-white"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20">
          <div>
            <h2
              id="overview-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Built around the way you live.
            </h2>
            <p className="mt-5 max-w-[760px] text-base leading-7 text-muted">
              A restless night. An afternoon slump. A day when you feel more like yourself.
              Looking at these moments alongside your meals, movement, and
              routines can help you understand what may be connected.
            </p>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              Start with what matters to you. As Plectara learns your routines, familiar
              things become easier to record—giving you more context to
              understand your patterns and decide what to try next.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {pillars.map((item) => (
                <li key={item.title}>
                  <h3 className="text-lg font-semibold text-deep-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder
            className="mx-auto"
            label="Timeline tab on device"
            src={marketingSrc(deviceShots.timeline)}
          />
        </div>
      </section>

      <section
        id="widgets"
        aria-labelledby="widgets-heading"
        className="scroll-mt-20 border-t border-divider"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2
            id="widgets-heading"
            className="text-3xl font-semibold tracking-tight text-deep-navy"
          >
            Capture the moment. Carry on with your day.
          </h2>
          <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
            A meal, a walk, a good night’s sleep. Plectara’s widgets make it easy to
            record everyday moments from your Home Screen, so the little
            details stay part of the bigger picture.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Familiar moments, fewer steps',
                body: 'Save a repeated activity with a tap, or go straight to the details you need. Spend less time logging and more time living.',
              },
              {
                title: 'Your routines, ready when you are',
                body: 'Keep favorites close and find suggestions based on your familiar habits, right when they’re likely to be useful.',
              },
              {
                title: 'Understanding, on your terms',
                body: 'Your widget keeps everyday logging handy. Open Plectara when you’re ready to explore your patterns and insights.',
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
          <div className="mt-14 border-t border-divider pt-12">
            <h3 className="text-2xl font-semibold tracking-tight text-deep-navy">
              Find your fit.
            </h3>
            <p className="mt-3 max-w-[640px] text-base leading-7 text-muted">
              Choose from three sizes to suit your Home Screen and your routine. Each keeps
              everyday capture within easy reach.
            </p>
            <div className="mt-10 flex flex-wrap items-end justify-center gap-8 lg:justify-start">
              {widgetShots.map((shot) => (
                <PhotoPlaceholder
                  key={shot.file}
                  aspect={shot.aspect}
                  label={shot.label}
                  src={marketingSrc(shot.file)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="scroll-mt-20 border-t border-divider bg-white"
      >
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr]">
            <PhotoPlaceholder
              className="mx-auto max-md:hidden"
              label="Insights tab on device"
              src={marketingSrc(deviceShots.insights)}
            />
            <div>
              <h2
                id="features-heading"
                className="text-3xl font-semibold tracking-tight text-deep-navy"
              >
                A fuller picture. A clearer next step.
              </h2>
              <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
                From a quick daily log to a closer look at a recurring pattern, Plectara helps
                you bring your experiences together and explore what matters
                to your well-being.
              </p>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    id={'id' in feature ? feature.id : undefined}
                    className="rounded-md border border-divider bg-canvas p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-deep-navy">
                        {feature.title}
                      </h3>
                      {'ai' in feature && feature.ai ? (
                        <span className="inline-flex items-center gap-1 rounded-sm bg-white px-2 py-0.5 text-xs font-semibold text-ai">
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
        className="scroll-mt-20 border-t border-divider"
      >
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <h2
              id="download-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Your next step toward a healthier whole.
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              Get to know your habits, discover your patterns, and find a way forward that
              fits your life. Plectara is coming soon to the App Store and
              Google Play.
            </p>
            <div className="mt-8">
              <StoreLinks />
            </div>
          </div>
          <div className="relative mx-auto flex min-h-[420px] w-full max-w-[480px] items-center justify-center">
            <PhotoPlaceholder
              className="absolute left-4 top-0 max-sm:hidden"
              label="Today tab on device"
              src={marketingSrc(deviceShots.today)}
            />
            <PhotoPlaceholder
              className="relative z-10 ml-16"
              label="Charts tab on device"
              src={marketingSrc(deviceShots.charts)}
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 border-t border-divider bg-white"
      >
        <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-deep-navy"
            >
              Let’s connect.
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              Have a question about Plectara, a press inquiry, or an idea for
              working together? We’d like to hear from you.
            </p>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-muted">
              For help with the app, visit{' '}
              <Link
                href="/support"
                className="font-medium text-link underline-offset-2 hover:underline"
              >
                product support
              </Link>
              .
            </p>
            <p className="mt-4 text-sm text-muted">
              Prefer email? Reach us at{' '}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium text-link underline-offset-2 hover:underline"
              >
                {site.contactEmail}
              </a>
              .
            </p>
          </div>
          <div className="rounded-lg border border-divider bg-canvas p-5 sm:p-6">
            <ContactForm
              submitLabel="Let’s talk!"
              privacyNote="Your message goes to the Plectara team. Please leave out sensitive health information. See our"
            />
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
            Plectara helps you understand the connections between your daily
            habits and how you feel. Its insights and optional AI chat are
            informational only. They do not diagnose, treat, or replace
            professional medical care. For urgent or worsening symptoms, seek
            professional attention.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Read our{' '}
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
