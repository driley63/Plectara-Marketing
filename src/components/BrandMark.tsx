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
 * Full color always keeps the jade head and original strand colors.
 * Light: ink lettering on ivory/white. Reversed: white lettering on ink.
 * Do not recreate the wordmark with a font.
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
          ? '/brand/plectara-horizontal-reversed.svg'
          : '/brand/plectara-horizontal.svg'
      }
      alt="Plectara"
      width={width}
      height={height}
      className="h-auto"
      style={{ width }}
      priority={priority}
      unoptimized
    />
  );
}
