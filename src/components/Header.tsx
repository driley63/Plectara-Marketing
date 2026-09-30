import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';

const nav = [
  { href: '/#overview', label: 'Overview' },
  { href: '/#features', label: 'Features' },
  { href: '/#widgets', label: 'Widgets' },
  { href: '/#watch', label: 'Watch' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-[140px] shrink-0 rounded-md" aria-label="Plectara">
          <BrandMark reversed size="sm" priority />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors duration-[120ms] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#download"
            className="inline-flex h-10 min-w-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
          >
            Get the App
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="flex h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-md px-3 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="site-header-menu absolute right-0 mt-2 w-48 rounded-lg p-3">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#download"
                className="mt-1 inline-flex h-10 items-center justify-center rounded-md bg-brand px-3 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                Get the App
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
