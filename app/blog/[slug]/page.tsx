import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBanner from '@/components/shared/CtaBanner';
import JsonLd from '@/components/shared/JsonLd';
import { blogPosts, getBlogPost, getRelatedBlogPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return buildMetadata({
      title: 'Article not found | Zaid Ahmad',
      description: 'The requested article could not be found.',
      path: `/blog/${slug}`,
    });
  }

  const base = buildMetadata({
    title: `${post.title} | ${site.shortName}`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });

  const heroImageUrl = post.heroImage.startsWith('http')
    ? post.heroImage
    : `${site.domain}${post.heroImage}`;

  return {
    ...base,
    authors: [{ name: site.shortName, url: site.domain }],
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate ?? post.publishedDate,
      authors: [site.domain],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      ...base.twitter,
      images: [heroImageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const Body = post.body;
  const related = getRelatedBlogPosts(post.slug);
  const url = `${site.domain}/blog/${post.slug}`;
  const heroImageUrl = post.heroImage.startsWith('http')
    ? post.heroImage
    : `${site.domain}${post.heroImage}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    image: [heroImageUrl],
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate ?? post.publishedDate,
    inLanguage: 'en',
    author: { '@id': `${site.domain}/#person` },
    publisher: { '@id': `${site.domain}/#person` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    wordCount: post.readingMinutes * 200,
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${site.domain}/blog`,
      },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <article className="articleWrap">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">{post.category}</li>
            </ol>
          </nav>

          <header className="articleHeader">
            <div className="articleMeta">
              <span className="pill">{post.category}</span>
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>

            <h1>{post.title}</h1>

            <p className="articleSubtitle">{post.description}</p>

            <div className="articleAuthor">
              <Image
                src={site.profileImage}
                alt={`${site.shortName} — author`}
                width={48}
                height={48}
                className="articleAuthorAvatar"
              />
              <div>
                <strong>{site.shortName}</strong>
                <span>Shopify &amp; WordPress developer · 1:1 web dev tutor</span>
              </div>
            </div>
          </header>

          <figure className="articleHero">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              width={1200}
              height={630}
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </figure>

          <div className="articleBody">
            <Body />
          </div>

          <footer className="articleFooter">
            <div className="articleTags" aria-label="Tags">
              {post.tags.map((tag) => (
                <span className="pill pillSubtle" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>

            <p className="articleShare">
              Found this useful? Share it on{' '}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{' '}
              or{' '}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </footer>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section pageSectionAlt">
          <div className="container">
            <h2 className="sectionTitle">More articles</h2>
            <div className="grid grid2">
              {related.map((item) => (
                <article className="card featureCard" key={item.slug}>
                  <span className="pill">{item.category}</span>
                  <h3>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.excerpt}</p>
                  <Link className="btn btnGhost" href={`/blog/${item.slug}`}>
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        eyebrow="Next step"
        title="Want help applying this to your own store?"
        description="Book a free 15-minute call and I'll review your Shopify or WordPress site and tell you exactly where to start."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'View Shopify speed service', href: '/services/shopify-speed-optimization' }}
      />

      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
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
