import { site } from '@/lib/site';

type StoreButtonProps = {
  href: string;
  label: string;
  store: string;
};

function StoreButton({ href, label, store }: StoreButtonProps) {
  const ready = href.length > 0;

  if (!ready) {
    return (
      <p className="flex min-h-12 items-center justify-center rounded-md border border-divider bg-white px-5 text-center">
        <span className="text-sm font-semibold text-deep-navy">{label}</span>
        <span className="ml-2 rounded-sm bg-canvas px-2 py-0.5 text-xs font-medium text-muted">
          Coming soon
        </span>
        <span className="sr-only"> {store} listing is not available yet.</span>
      </p>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-evergreen/90"
    >
      {label}
    </a>
  );
}

export function StoreLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <StoreButton
        href={site.appStoreUrl}
        label="Download on the App Store"
        store="Apple App Store"
      />
      <StoreButton
        href={site.playStoreUrl}
        label="Get it on Google Play"
        store="Google Play"
      />
    </div>
  );
}
