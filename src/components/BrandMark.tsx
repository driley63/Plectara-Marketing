import Image from 'next/image';

type BrandMarkProps = {
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
};

const sizes = {
  sm: { icon: 28, type: 'text-xl' },
  md: { icon: 36, type: 'text-2xl' },
  lg: { icon: 48, type: 'text-[2rem]' },
} as const;

/**
 * Horizontal lockup: product icon + Inter wordmark.
 * Wordmark colors follow LIQ OS: Lifestyle Deep Navy (or white on dark), IQ Evergreen.
 * https://liq-os.lifestyleiq.io/specs/01-brand/logo-system/
 */
export function BrandMark({
  reversed = false,
  size = 'md',
  priority = false,
}: BrandMarkProps) {
  const { icon, type } = sizes[size];
  const lifestyle = reversed ? 'text-white' : 'text-deep-navy';

  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/brand/lifestyleiq_app_icon_512.png"
        alt=""
        width={icon}
        height={icon}
        className="rounded-[22%]"
        priority={priority}
      />
      <span
        className={`${type} font-semibold tracking-tight ${lifestyle}`}
        aria-hidden="true"
      >
        Lifestyle<span className="text-evergreen">IQ</span>
      </span>
      <span className="sr-only">LifestyleIQ</span>
    </span>
  );
}
