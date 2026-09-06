import Image from 'next/image';

const aspects = {
  phone: 'aspect-[9/19]',
  'widget-small': 'aspect-square',
  'widget-medium': 'aspect-[338/158]',
  'widget-large': 'aspect-[338/354]',
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
};

/**
 * Slot for a real-device photo. Pass `src` under `/marketing/` once the
 * screenshot exists; until then the dashed frame stays.
 */
export function PhotoPlaceholder({
  label,
  className = '',
  frameClassName = '',
  aspect = 'phone',
  src,
  alt,
}: PhotoPlaceholderProps) {
  return (
    <figure className={`flex shrink-0 flex-col ${widths[aspect]} ${className}`}>
      <div
        className={`relative overflow-hidden rounded-lg border ${aspects[aspect]} ${
          src ? 'border-divider bg-canvas' : 'border-dashed border-divider bg-canvas'
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
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center">
            <p className="text-sm font-medium text-muted">Screenshot Coming Soon</p>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">{label}</figcaption>
    </figure>
  );
}
