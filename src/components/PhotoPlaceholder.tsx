type PhotoPlaceholderProps = {
  label: string;
  className?: string;
};

/** Empty slot for a camera photo of the app on a real phone. */
export function PhotoPlaceholder({ label, className = '' }: PhotoPlaceholderProps) {
  return (
    <figure
      className={`flex w-[220px] shrink-0 flex-col sm:w-[240px] ${className}`}
    >
      <div className="flex aspect-[9/19] items-center justify-center rounded-lg border border-dashed border-divider bg-canvas px-4 text-center">
        <p className="text-sm font-medium text-muted">Photo Coming Soon</p>
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">{label}</figcaption>
    </figure>
  );
}
