import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { site } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Personal Health Intelligence`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'Plectara',
    'personal health intelligence',
    'health diary',
    'habit tracking',
    'home screen widget',
    'health patterns',
    'wellness',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Personal Health Intelligence`,
    description: site.description,
    images: [
      {
        url: '/brand/plectara-social-card.png',
        width: 1200,
        height: 630,
        alt: 'Plectara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Personal Health Intelligence`,
    description: site.description,
    images: ['/brand/plectara-social-card.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/brand/plectara-symbol.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon.ico' },
      { url: '/brand/plectara-512.png', sizes: '512x512' },
    ],
    apple: [{ url: '/brand/plectara-512.png', sizes: '512x512' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#287E80',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
