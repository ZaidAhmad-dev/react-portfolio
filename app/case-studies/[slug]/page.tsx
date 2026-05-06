import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import { buildMetadata } from '@/lib/seo';
import { caseStudies, getCaseStudy, getPageFaqs } from '@/lib/site-data';

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    return buildMetadata({
      title: 'Case Study Not Found | Zaid Ahmad',
      description: 'The requested case study could not be found.',
      path: `/case-studies/${slug}`,
    });
  }

  return buildMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/case-studies/${item.slug}`,
    keywords: [item.client, item.platform, item.category, ...item.focusAreas],
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.hero}
        primaryCta={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'View all case studies', href: '/case-studies' }}
      />

      <section className="section">
        <div className="container caseStudyDetailGrid">
          <article className="card caseStudyVisual">
            <div className="caseStudyImageWrap">
              <Image
                src={item.image}
                alt={`${item.client} website screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </article>

          <aside className="card caseStudyFacts">
            <div className="caseStudyFactsInner">
              <div className="portfolioTopRow">
                <span className="pill">{item.platform}</span>
                <span className="portfolioCategory">{item.category}</span>
              </div>

              <h2 className="caseStudyClient">{item.client}</h2>
              <p className="caseStudyIntro">{item.excerpt}</p>

              <ul className="caseFactsList">
                <li>
                  <strong>Platform:</strong> {item.platform}
                </li>
                <li>
                  <strong>Category:</strong> {item.category}
                </li>
                <li>
                  <strong>Live site:</strong>{' '}
                  <a href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                    Visit website
                  </a>
                </li>
              </ul>

              <div className="caseStudyActions">
                <a
                  className="btn btnPrimary"
                  href={item.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section pageSectionAlt">
        <div className="container grid grid2">
          <article className="card featureCard">
            <span className="pill">Project snapshot</span>
            <h3>About this website</h3>
            <p>{item.overview}</p>
          </article>

          <article className="card featureCard">
            <span className="pill">How to position it</span>
            <h3>What this work should communicate</h3>
            <p>{item.focus}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid2">
          <article className="card featureCard">
            <span className="pill">What this project showcases</span>
            <h3>Strengths you can highlight</h3>
            <ul className="checkList">
              {item.highlights.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>

          <article className="card featureCard">
            <span className="pill">Focus areas</span>
            <h3>Relevant website areas</h3>
            <div className="metaRow">
              {item.focusAreas.map((entry) => (
                <span key={entry}>{entry}</span>
              ))}
            </div>

            <span className="pill" style={{ marginTop: '20px' }}>Stack</span>
            <div className="metaRow">
              {item.stack.map((entry) => (
                <span key={entry}>{entry}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('caseStudyDetail')}
        eyebrow="Project FAQ"
        title={`Working with a ${item.platform} developer on a project like this`}
        description={`Common questions about hiring a ${item.platform} developer to build or improve a ${item.category.toLowerCase()} website.`}
      />

      <CtaBanner
        eyebrow="Interested in something similar?"
        title="Let’s talk about your project"
        description="If you need Shopify or WordPress help, book a quick discovery call and I’ll help you identify the best next step."
        primary={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondary={{ label: 'Contact', href: '/contact' }}
      />
    </main>
  );
}