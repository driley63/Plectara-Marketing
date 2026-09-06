import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <BrandMark reversed size="sm" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-light-gray">
            {site.tagline}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Site</h2>
          <ul className="mt-3 space-y-2 text-sm text-light-gray">
            <li>
              <Link href="/#overview" className="hover:text-white">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/#widgets" className="hover:text-white">
                Widgets
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#download" className="hover:text-white">
                Download
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-light-gray">
            <li>
              <Link href="/support" className="hover:text-white">
                Support
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-white">
                Disclaimers
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.contactEmail}`} className="hover:text-white">
                {site.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1120px] px-4 py-4 text-center text-xs text-light-gray sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Plectara is not a medical
          device and does not provide medical advice.
        </p>
      </div>
    </footer>
  );
}
