import Image from 'next/image';

type BrandMarkProps = {
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
};

const sizes = {
  sm: { width: 140, height: 44 },
  md: { width: 166, height: 52 },
  lg: { width: 204, height: 64 },
} as const;

/**
 * Plectara horizontal lockup (woven person + outlined wordmark).
 * Light: ink lettering on ivory/white. Reversed: white lockup on ink.
 * Do not recreate the wordmark with a font.
 * https://liq-os.lifestyleiq.io/specs/01-brand/logo-usage/
 */
export function BrandMark({
  reversed = false,
  size = 'md',
  priority = false,
}: BrandMarkProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src={
        reversed
          ? '/brand/plectara-horizontal-reversed.png'
          : '/brand/plectara-horizontal.png'
      }
      alt="Plectara"
      width={width}
      height={height}
      className="h-auto w-auto"
      priority={priority}
    />
  );
}
