import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaid Ahmad Dev',
    short_name: 'Zaid Ahmad',
    description: 'Shopify and WordPress development plus web development tutoring.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f6fff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
