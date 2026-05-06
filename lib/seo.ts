import type { Metadata } from 'next';
import { site } from './site-data';

const defaultOg = `${site.domain}/images/social/og-default.png`;

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path = '/', keywords = [] }: SeoInput): Metadata {
  const url = `${site.domain}${path}`;

  return {
    metadataBase: new URL(site.domain),
    title,
    description,
    keywords: [...site.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: 'website',
      images: [
        {
          url: defaultOg,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOg],
    },
  };
}
