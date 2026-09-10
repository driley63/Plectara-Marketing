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
  submitLabel = 'Send message',
  privacyNote = `Messages are sent to ${toEmail}. Do not include sensitive health information. See the`,
}: ContactFormProps) {
  const action = `https://formsubmit.co/${encodeURIComponent(toEmail)}`;

  return (
    <form action={action} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${site.url}/thank-you`} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-deep-navy">
          Name <span className="font-normal text-muted">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 h-10 w-full rounded-md border border-divider bg-white px-3 text-deep-navy outline-none transition-shadow duration-[120ms] focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-deep-navy">
          Email <span className="font-normal text-muted">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 h-10 w-full rounded-md border border-divider bg-white px-3 text-deep-navy outline-none transition-shadow duration-[120ms] focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-deep-navy">
          Message <span className="font-normal text-muted">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-divider bg-white px-3 py-2 text-deep-navy outline-none transition-shadow duration-[120ms] focus:border-brand"
        />
      </div>

      <p className="text-sm text-muted">
        {privacyNote}{' '}
        <a href="/privacy" className="font-medium text-link underline-offset-2 hover:underline">
          privacy policy
        </a>
        .
      </p>

      <button
        type="submit"
        className="inline-flex h-12 min-w-11 items-center justify-center rounded-md bg-brand px-6 text-base font-semibold text-white transition-colors duration-[120ms] hover:bg-brand-hover"
      >
        {submitLabel}
      </button>
    </form>
  );
}
