import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';
import JsonLd from '@/components/shared/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site-data';
import './globals.css';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Shopify & WordPress Developer and Web Development Tutor | Zaid Ahmad',
    description: site.description,
    path: '/',
  }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1f6fff',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.domain}/#website`,
        url: site.domain,
        name: site.name,
        publisher: {
          '@id': `${site.domain}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${site.domain}/#person`,
        name: site.shortName,
        url: site.domain,
        image: site.profileImage,
        jobTitle: 'Shopify & WordPress Developer and Web Development Tutor',
        description: site.description,
        knowsAbout: site.keywords,
        sameAs: [site.socials.linkedin, site.socials.youtube, site.socials.github],
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteJsonLd} />
        <Header />
        {children}
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <SpeedInsights />
      </body>
    </html>
  );
}
