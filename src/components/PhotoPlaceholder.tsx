import Image from 'next/image';

const aspects = {
  phone: 'aspect-[498/1024]',
  'widget-small': 'aspect-[531/530]',
  'widget-medium': 'aspect-[1134/530]',
  'widget-large': 'aspect-[1136/1183]',
} as const;

const widths = {
  phone: 'w-[220px] sm:w-[240px]',
  'widget-small': 'w-[158px]',
  'widget-medium': 'w-[280px] sm:w-[338px]',
  'widget-large': 'w-[240px] sm:w-[280px]',
} as const;

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  frameClassName?: string;
  aspect?: keyof typeof aspects;
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
  src,
  alt,
  priority = false,
}: PhotoPlaceholderProps) {
  const framedShot = Boolean(src);

  return (
    <figure className={`flex shrink-0 flex-col ${widths[aspect]} ${className}`}>
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
                ? '240px'
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
