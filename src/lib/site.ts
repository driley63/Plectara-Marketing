/**
 * Public site configuration.
 * Store URLs stay empty until listings exist; the UI then shows Coming soon.
 */
export const site = {
  name: 'Plectara',
  tagline: 'Translating daily habits into a plan towards optimal health.',
  description:
    'Plectara is a personal health intelligence platform that turns everyday habits into understandable patterns—so you can act with more clarity. Capture from the Home Screen, learn routines as habits, and ask about your patterns. Not a diagnostic product.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://plectara.com',
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@plectara.com',
  supportEmail: 'support@plectara.com',
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '',
} as const;

export const pillars = [
  {
    title: 'Capture',
    body: 'Record what happened with the least interruption possible—from the Home Screen widget or a few taps in the app.',
  },
  {
    title: 'Habits',
    body: 'When you repeat a log, Plectara can learn it and surface it when it is useful. The product should fit your routine.',
  },
  {
    title: 'Insights',
    body: 'See how habits, symptoms, and routines relate—then ask about those findings in a bounded, optional chat.',
  },
] as const;

export const features = [
  {
    title: 'Habits That Fit Your Life',
    body: 'Repeated logs can become learned habits. Plectara may promote them on the widget and in Quick Log when they are likely to help—without making you design every shortcut first. You can pin, hide, rename, or remove what it learned.',
  },
  {
    title: 'Ask About Your Patterns',
    id: 'chat',
    ai: true,
    body: 'A bounded chat over your recent findings: what the diary is showing, what to log next, and how habits may relate. It does not diagnose, prescribe, or replace Insights. Chat is optional, AI-labeled, and separately consented.',
  },
  {
    title: 'Pattern Insights',
    id: 'insights',
    ai: true,
    body: 'Plectara looks across your diary to surface correlations and practical next steps. Insights are informational only. They do not diagnose, treat, or replace professional care.',
  },
  {
    title: 'Daily Capture',
    body: 'Log meals, sleep, activity, vitals, symptoms, and bowel movements in a few taps—or from Quick Log. One tap can save a repeated action; guided capture opens only when a detail is actually needed.',
  },
  {
    title: 'Medication and Supplement Schedule',
    body: 'Keep names, dosages, and typical times in one reusable schedule. Optional reminders help you stay consistent without logging every dose by hand.',
  },
  {
    title: 'A Timeline You Can Review',
    body: 'See today at a glance, scan a 14-day snapshot, and filter the full timeline when you want to look back before a visit or a change in routine.',
  },
] as const;

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
