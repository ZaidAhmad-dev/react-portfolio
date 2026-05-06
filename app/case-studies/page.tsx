import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { caseStudies, getPageFaqs } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Case Studies | Zaid Ahmad',
  description: 'Selected Shopify and WordPress work across ecommerce, SaaS, AI, and niche product websites.',
  path: '/case-studies',
});

function ProjectGrid({ items }: { items: typeof caseStudies }) {
  return (
    <div className="portfolioGrid">
      {items.map((item) => (
        <article className="card portfolioCard" key={item.slug}>
          <Link href={`/case-studies/${item.slug}`} className="portfolioThumbLink">
            <div className="portfolioThumb">
              <Image
                src={item.image}
                alt={`${item.client} website screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Link>

          <div className="portfolioContent">
            <div className="portfolioTopRow">
              <span className="pill">{item.platform}</span>
              <span className="portfolioCategory">{item.category}</span>
            </div>

            <h3>
              <Link href={`/case-studies/${item.slug}`}>{item.title}</Link>
            </h3>

            <p>{item.excerpt}</p>

            <div className="metaRow">
              {item.focusAreas.slice(0, 3).map((entry) => (
                <span key={entry}>{entry}</span>
              ))}
            </div>

            <div className="caseStudyActions">
              <Link className="btn btnPrimary" href={`/case-studies/${item.slug}`}>
                View project
              </Link>

              <a
                className="btn btnSecondary"
                href={item.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CaseStudiesPage() {
  const shopifyProjects = caseStudies.filter((item) => item.platform === 'Shopify');
  const wordpressProjects = caseStudies.filter((item) => item.platform === 'WordPress');

  return (
    <main>
      <PageHero
        eyebrow="Selected work"
        title="Shopify and WordPress projects that strengthen trust"
        description="Use this section as social proof for serious leads. The goal is simple: show range, show quality, and make it easy for visitors to explore your work."
        primaryCta={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Shopify projects"
            title="Selected ecommerce work"
            description="Storefronts across consumer brands, custom-product ecommerce, education, and wellness — built or improved with theme customization, performance work, and conversion-focused layouts."
          />
          <ProjectGrid items={shopifyProjects} />
        </div>
      </section>

      <section className="section pageSectionAlt">
        <div className="container">
          <SectionHeading
            eyebrow="WordPress projects"
            title="Selected marketing and product websites"
            description="SaaS marketing sites, AI product pages, niche B2B platforms, and catalog-style websites — focused on clean structure, fast load, and clear conversion paths."
          />
          <ProjectGrid items={wordpressProjects} />
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('caseStudies')}
        eyebrow="Case study FAQ"
        title="About these Shopify and WordPress projects"
        description="Common questions about scope, timelines, and whether a Shopify developer or WordPress developer can build something similar for you."
      />

      <CtaBanner
        eyebrow="Next step"
        title="Want a site that looks this polished and sells clearly?"
        description="Book a discovery call and let’s talk about your Shopify or WordPress project."
        primary={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondary={{ label: 'View services', href: '/services' }}
      />
    </main>
  );
}