/**
 * Public site configuration.
 * Store URLs stay empty until listings exist; the UI then shows Coming soon.
 */
export const site = {
  name: 'LifestyleIQ',
  tagline: 'Translating daily habits into a plan towards optimal health.',
  description:
    'LifestyleIQ is a personal health intelligence platform that turns everyday habits into understandable patterns—so you can act with more clarity. Not a diagnostic product.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lifestyleiq.io',
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'dustin@dustinriley.io',
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '',
} as const;

export const features = [
  {
    title: 'Daily Habit Logging',
    body: 'Log meals, sleep, activity, vitals, symptoms, and bowel movements in a few taps—so the picture of your day stays complete without becoming a chore.',
  },
  {
    title: 'Medication and Supplement Schedule',
    body: 'Keep names, dosages, and typical times in one reusable schedule. Optional reminders help you stay consistent without logging every dose by hand.',
  },
  {
    title: 'Pattern Insights',
    id: 'insights',
    ai: true,
    body: 'LifestyleIQ looks across your diary to surface correlations and practical next steps. Insights are informational only. They do not diagnose, treat, or replace professional care.',
  },
  {
    title: 'Track What Matters to You',
    body: 'Choose the areas you want help logging—then add conditions, goals, and ongoing symptoms so later entries and assessments stay relevant to your life.',
  },
  {
    title: 'On-Device Diary',
    body: 'Entries stay on your device today. Future cloud features will require explicit consent. Your health log is yours to keep.',
  },
  {
    title: 'A Timeline You Can Review',
    body: 'See today at a glance, scan a 14-day snapshot, and filter the full timeline when you want to look back before a visit or a change in routine.',
  },
] as const;
