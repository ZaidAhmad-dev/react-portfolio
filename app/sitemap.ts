import type { MetadataRoute } from 'next';
import { getSortedBlogPosts } from '@/lib/blog';
import { bookingPages, caseStudies, services, site, tutoringItems } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/tutoring', '/case-studies', '/resources', '/blog', '/about', '/contact', '/privacy-policy'];

  const now = new Date();
  const blogPosts = getSortedBlogPosts();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.domain}${route || '/'}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...services.map((item) => ({
      url: `${site.domain}/services/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...tutoringItems.map((item) => ({
      url: `${site.domain}/tutoring/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...caseStudies.map((item) => ({
      url: `${site.domain}/case-studies/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...bookingPages.map((item) => ({
      url: `${site.domain}/book/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.domain}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedDate ?? post.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
