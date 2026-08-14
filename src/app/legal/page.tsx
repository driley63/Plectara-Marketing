import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal disclaimers',
  description:
    'LifestyleIQ legal disclaimers: not medical advice, not a diagnostic product, and not a substitute for professional care.',
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-evergreen">
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-deep-navy">
        Legal disclaimers
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: August 14, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Not medical advice
          </h2>
          <p className="mt-3">
            LifestyleIQ is a personal health diary with optional pattern
            spotting. Content in the app and on this website is for information
            and self-tracking only. It is not medical advice, a diagnosis, a
            treatment plan, or a substitute for consultation with a qualified
            clinician.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Not a diagnostic product
          </h2>
          <p className="mt-3">
            LifestyleIQ does not diagnose, treat, cure, or prevent any disease
            or condition. Insights may highlight correlations in your own logs.
            Correlation is not causation. Do not change medications, diet, or
            care based solely on an in-app insight.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Seek care when needed
          </h2>
          <p className="mt-3">
            Urgent, severe, or worsening symptoms deserve professional medical
            attention. Do not wait on an app notification or insight. If you
            think you may be having a medical emergency, call emergency services
            or go to the nearest emergency department.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            No guarantee of outcomes
          </h2>
          <p className="mt-3">
            LifestyleIQ does not promise weight loss, symptom resolution, or any
            specific health outcome. Features that mention goals or suggestions
            are meant to support understanding and routine—not to certify
            results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">
            Website and store listings
          </h2>
          <p className="mt-3">
            App Store and Google Play buttons on this site may be placeholders
            until public listings are live. Availability, pricing, and platform
            requirements can change. This website may contain draft or
            pre-release descriptions of product behavior.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-deep-navy">Contact</h2>
          <p className="mt-3">
            Questions about these disclaimers can be sent through the{' '}
            <Link href="/#contact" className="font-medium text-evergreen hover:underline">
              contact form
            </Link>{' '}
            or the{' '}
            <Link href="/privacy" className="font-medium text-evergreen hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
