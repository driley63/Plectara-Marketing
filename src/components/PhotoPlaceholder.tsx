import Image from 'next/image';

const aspects = {
  phone: 'aspect-[870/1772]',
  'widget-medium': 'aspect-[691/326]',
  'widget-large': 'aspect-[691/722]',
} as const;

const widths = {
  phone: 'w-[220px] sm:w-[240px]',
  'widget-medium': 'w-[280px] sm:w-[338px]',
  'widget-large': 'w-[240px] sm:w-[280px]',
} as const;

const heroPhoneWidth = 'w-[300px] xl:w-[320px]';

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  frameClassName?: string;
  aspect?: keyof typeof aspects;
  phoneSize?: 'standard' | 'hero';
  /** When set, renders the screenshot. Leave unset to keep the dashed stub. */
  src?: string;
  alt?: string;
  priority?: boolean;
};

/**
 * Slot for a device or widget screenshot. Pass `src` under `/marketing/`
 * once the file exists; until then the dashed frame stays.
 */
export function PhotoPlaceholder({
  label,
  className = '',
  frameClassName = '',
  aspect = 'phone',
  phoneSize = 'standard',
  src,
  alt,
  priority = false,
}: PhotoPlaceholderProps) {
  const framedShot = Boolean(src);
  const widthClass = aspect === 'phone' && phoneSize === 'hero' ? heroPhoneWidth : widths[aspect];

  return (
    <figure className={`flex shrink-0 flex-col ${widthClass} ${className}`}>
      <div
        className={`relative ${aspects[aspect]} ${
          framedShot
            ? ''
            : 'overflow-hidden rounded-lg border border-dashed border-divider bg-canvas'
        } ${frameClassName}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes={
              aspect === 'phone'
                ? phoneSize === 'hero'
                  ? '(min-width: 1280px) 320px, 300px'
                  : '240px'
                : aspect === 'widget-medium'
                  ? '338px'
                  : '280px'
            }
            className="object-contain"
            priority={priority}
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center">
            <p className="text-sm font-medium text-muted">Screenshot Coming Soon</p>
          </div>
        )}
      </div>
    </figure>
  );
}
