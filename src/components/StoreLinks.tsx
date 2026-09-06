import { site } from '@/lib/site';

/**
 * Official store badges, used as provided.
 * Apple: preferred black US/UK “Download on the App Store” (min 40px).
 * Google: “Get it on Google Play” (min 28px; at least as large as the App Store badge).
 * Do not recolor, overlay, or crop the badge artwork. Transparent canvas around
 * the Play PNG was removed so both badges can share the same 40px height.
 */
const badges = [
  {
    href: site.appStoreUrl,
    src: '/store/download-on-the-app-store.svg',
    alt: 'Download on the App Store',
    store: 'Apple App Store',
    width: 120,
    height: 40,
  },
  {
    href: site.playStoreUrl,
    src: '/store/get-it-on-google-play.png',
    alt: 'Get it on Google Play',
    store: 'Google Play',
    width: 564,
    height: 168,
  },
] as const;

export function StoreLinks() {
  return (
    <div>
      <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
        {badges.map((badge) => {
          const ready = badge.href.length > 0;
          const image = (
            // Official artwork: render as-is, without Next.js image transforms.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={badge.src}
              alt={ready ? badge.alt : ''}
              width={badge.width}
              height={badge.height}
              className="h-10 w-auto"
            />
          );

          return (
            <figure
              key={badge.store}
              className="m-0 flex flex-col items-center p-2.5"
            >
              {ready ? (
                <a
                  href={badge.href}
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  {image}
                </a>
              ) : (
                <div>
                  {image}
                  <span className="sr-only">
                    {badge.store} listing is not available yet.
                  </span>
                </div>
              )}
              {ready ? null : (
                <figcaption className="mt-2 text-center text-xs font-medium text-muted">
                  Coming soon
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
      <p className="mt-3 max-w-[40rem] text-xs leading-5 text-muted">
        Apple, the Apple logo, and App Store are trademarks of Apple Inc.,
        registered in the U.S. and other countries. Google Play and the Google
        Play logo are trademarks of Google LLC.
      </p>
    </div>
  );
}
