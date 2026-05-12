import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import JsonLd from '@/components/shared/JsonLd';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { getSortedBlogPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Blog | Shopify, WordPress, and Web Development Articles — Zaid Ahmad',
  description:
    'Practical write-ups on Shopify speed optimization, WordPress development, and web development tutoring — from real client and tutoring work.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.domain}/blog#blog`,
    url: `${site.domain}/blog`,
    name: `${site.shortName} — Blog`,
    description:
      'Practical articles on Shopify speed optimization, WordPress development, and web development tutoring.',
    author: { '@id': `${site.domain}/#person` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${site.domain}/blog/${post.slug}#article`,
      headline: post.title,
      url: `${site.domain}/blog/${post.slug}`,
      datePublished: post.publishedDate,
      dateModified: post.modifiedDate ?? post.publishedDate,
      author: { '@id': `${site.domain}/#person` },
    })),
  };

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Notes on Shopify, WordPress, and web development tutoring"
        description="Real lessons from client and tutoring work — written so you can apply them on your own projects. No fluff, no listicles."
        primaryCta={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'View services', href: '/services' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest posts"
            title="What I&rsquo;ve been writing about"
            description="Short, practical articles from real projects. New posts go up here first, then get cross-posted to Dev.to and Hashnode with canonical tags pointing back to this site."
          />

          <div className="blogGrid">
            {posts.map((post) => (
              <article className="card blogCard" key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blogCardImageLink"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="blogCardImage">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                </Link>

                <div className="blogCardBody">
                  <div className="blogCardMeta">
                    <span className="pill">{post.category}</span>
                    <time dateTime={post.publishedDate}>
                      {formatDate(post.publishedDate)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>

                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p>{post.excerpt}</p>

                  <div className="metaRow">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link className="btn btnGhost" href={`/blog/${post.slug}`}>
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Want help instead?"
        title="Need a Shopify or WordPress developer for your project?"
        description="If reading articles isn't enough, book a free 15-minute call and we'll talk about your specific website."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'See case studies', href: '/case-studies' }}
      />

      <JsonLd data={blogJsonLd} />
    </main>
  );
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
