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
    default: `${site.name} — Personal health intelligence`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'LifestyleIQ',
    'personal health intelligence',
    'health diary',
    'habit tracking',
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
    title: `${site.name} — Personal health intelligence`,
    description: site.description,
    images: [
      {
        url: '/brand/lifestyleiq_app_icon_1024.png',
        width: 1024,
        height: 1024,
        alt: 'LifestyleIQ app icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — Personal health intelligence`,
    description: site.description,
    images: ['/brand/lifestyleiq_app_icon_1024.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/brand/lifestyleiq-icon.svg', type: 'image/svg+xml' },
      { url: '/brand/lifestyleiq_app_icon_512.png', sizes: '512x512' },
    ],
    apple: [{ url: '/brand/lifestyleiq_app_icon_512.png', sizes: '512x512' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#16AA8D',
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
