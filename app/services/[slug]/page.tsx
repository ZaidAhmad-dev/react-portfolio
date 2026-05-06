import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getService, services } from '@/lib/site-data';

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug);

  if (!item) {
    return buildMetadata({
      title: 'Service Not Found | Zaid Ahmad',
      description: 'The requested service page could not be found.',
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/services/${item.slug}`,
    keywords: [item.title, ...item.deliverables],
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getService(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.hero}
        primaryCta={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section">
        <div className="container grid grid2">
          <div>
            <SectionHeading
              eyebrow="What this includes"
              title="Practical deliverables tailored to real website priorities"
              description={item.excerpt}
            />
            <ul className="checkList">
              {item.deliverables.map((entry) => <li key={entry}>{entry}</li>)}
            </ul>
          </div>

          <div className="card infoCard">
            <span className="pill">Best fit</span>
            <h3>Good for businesses that need execution, not just advice</h3>
            <p>This page works best when you want focused implementation support around a clear Shopify or WordPress problem.</p>
            <div className="metaRow">
              {item.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt">
        <div className="container">
          <SectionHeading
            eyebrow="How the work usually goes"
            title="Simple, scoped, and built around priorities"
            description="A lightweight process that keeps projects moving without unnecessary back-and-forth or scope creep."
          />
          <div className="grid grid4">
            {item.process.map((step, index) => (
              <article className="card featureCard" key={step.title}>
                <span className="pill">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {item.faqs && item.faqs.length > 0 ? (
        <FaqAccordion
          faqs={item.faqs}
          eyebrow="FAQ"
          title={`${item.title} questions`}
          description={`Common questions about hiring a ${item.title.toLowerCase().includes('shopify') ? 'Shopify developer' : 'WordPress developer'} for ${item.title.toLowerCase()}.`}
        />
      ) : null}

      <CtaBanner
        eyebrow="Next step"
        title={`Ready to talk about ${item.title.toLowerCase()}?`}
        description="Use the consultation page to share your site, your goals, and the main technical problem you want solved."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'Browse all services', href: '/services' }}
      />
    </main>
  );
}
