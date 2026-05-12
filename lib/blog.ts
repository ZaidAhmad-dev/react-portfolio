import type { ComponentType } from 'react';
import type { BlogPostMeta } from './types';
import ShopifyLcpFixOrderArticle from '@/content/blog/shopify-lcp-fix-order';

export type BlogPost = BlogPostMeta & {
  body: ComponentType;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'shopify-lcp-fix-order',
    title:
      "Why Your Shopify Store's LCP Is Still Over 3 Seconds (And the Fix Order I Use)",
    description:
      "Most Shopify speed optimization advice tells you to compress images. After 50+ stores, here's the real LCP triage order that actually moves Core Web Vitals.",
    excerpt:
      "Compressing images isn't usually the fix. Here's the real Shopify LCP triage order I follow after 50+ storefronts — from audit, to app bloat, to hero images, Liquid, and fonts.",
    publishedDate: '2026-05-12',
    readingMinutes: 6,
    tags: ['Shopify', 'Performance', 'Core Web Vitals', 'LCP'],
    keywords: [
      'shopify lcp',
      'shopify speed optimization',
      'shopify core web vitals',
      'shopify performance',
      'shopify largest contentful paint',
    ],
    heroImage: '/images/blog/shopify-lcp-performance.png',
    heroImageAlt:
      'Shopify store LCP performance optimization — Core Web Vitals fix order',
    category: 'Performance',
    body: ShopifyLcpFixOrderArticle,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return getSortedBlogPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}
