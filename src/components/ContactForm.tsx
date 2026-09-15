import { site } from '@/lib/site';

type ContactFormProps = {
  subject?: string;
  toEmail?: string;
  submitLabel?: string;
  privacyNote?: string;
};

export function ContactForm({
  subject = 'Plectara website inquiry',
  toEmail = site.contactEmail,
  submitLabel = 'Email Us',
  privacyNote = `Messages are sent to ${toEmail}. Do not include sensitive health information. See the`,
}: ContactFormProps) {
  const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="space-y-5">
      <p className="text-base font-medium text-deep-navy">
        <a
          href={`mailto:${toEmail}`}
          className="text-link underline-offset-2 hover:underline"
        >
          {toEmail}
        </a>
      </p>
      <p className="text-sm text-muted">
        {privacyNote}{' '}
        <a
          href="/privacy"
          className="font-medium text-link underline-offset-2 hover:underline"
        >
          privacy policy
        </a>
        .
      </p>
      <a
        href={mailto}
        className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
      >
        {submitLabel}
      </a>
    </div>
  );
}
