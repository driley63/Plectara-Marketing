/**
 * Public site configuration.
 * Store URLs stay empty until listings exist; the UI then shows Coming soon.
 */
export const site = {
  name: 'Plectara',
  tagline: 'A healthier whole.',
  description:
    'Plectara is a personal health intelligence platform that turns everyday habits into understandable patterns—so you can act with more clarity. Capture from the Home Screen, learn routines as habits, and ask about your patterns. Not a diagnostic product.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://plectara.com',
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@plectara.com',
  supportEmail: 'support@plectara.com',
  legalEntity: 'VesperIQ LLC',
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '',
} as const;

export const pillars = [
  {
    title: 'Capture',
    body: 'Bring the details of your day together. Record meals, sleep, movement, symptoms, and more, with room for what matters to you.',
  },
  {
    title: 'Habits',
    body: 'Let familiar routines make logging easier. Plectara learns what you repeat and puts useful shortcuts within reach.',
  },
  {
    title: 'Insights',
    body: 'Explore connections between your habits and how you feel, with clear explanations and practical next steps to consider.',
  },
] as const;

export const features = [
  {
    title: 'Log from your Home Screen',
    body: 'Keep everyday capture a tap away. Record familiar activities or jump straight into a new entry, then get back to your day.',
  },
  {
    title: 'Shortcuts that learn your routine',
    body: 'The things you do regularly become easier to record. Plectara learns repeated activities and suggests useful shortcuts, with control to pin, rename, hide, or remove them.',
  },
  {
    title: 'Explore your patterns in conversation',
    id: 'chat',
    ai: true,
    body: 'Ask questions about what you’re noticing. Optional AI-assisted chat helps you explore your recent insights and consider what to record next.',
  },
  {
    title: 'See what may be connected',
    id: 'insights',
    ai: true,
    body: 'Explore relationships between your habits and how you feel. Plectara brings patterns into focus, with explanations and practical next steps to consider.',
  },
  {
    title: 'Capture what matters to you',
    body: 'Keep meals, sleep, movement, symptoms, vitals, and more in one daily record. Build a picture that reflects your life and the details you want to understand.',
  },
  {
    title: 'Keep medications and supplements organized',
    body: 'Save names, dosages, and usual times in one reusable schedule. Optional reminders help you keep up with your routine.',
  },
  {
    title: 'Look back with perspective',
    body: 'Review your day, explore recent weeks, or revisit an entry on your timeline. Bring useful context to a change in routine or a conversation about your health.',
  },
] as const;

export const deviceShots = {
  hero: 'hero-phone.png',
  today: 'today-tab.png',
  timeline: 'timeline-tab.png',
  charts: 'charts-tab.png',
  insights: 'insights-tab.png',
} as const;

export const widgetShots = [
  {
    aspect: 'widget-small' as const,
    label: 'Small widget — one-tap capture',
    file: 'widget-small.png',
  },
  {
    aspect: 'widget-medium' as const,
    label: 'Medium widget — habits and suggestions',
    file: 'widget-medium.png',
  },
  {
    aspect: 'widget-large' as const,
    label: 'Large widget — capture actions',
    file: 'widget-large.png',
  },
] as const;
