import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-[760px] px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-deep-navy">
        Page not found
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">
        That URL is not part of the LifestyleIQ site.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-md bg-brand px-6 text-base font-semibold text-white"
        >
          Back to home
        </Link>
      </p>
    </main>
  );
}
