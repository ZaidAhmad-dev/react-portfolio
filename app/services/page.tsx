import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getPageFaqs, services } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Shopify & WordPress Services | Zaid Ahmad',
  description: 'Shopify and WordPress development services including customization, speed optimization, bug fixes, and implementation support.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Shopify and WordPress development services built for practical outcomes"
        description="Choose a focused service page based on what you need most: customization, speed improvements, WordPress support, or performance cleanup."
        primaryCta={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service pages"
            title="Focused offers across Shopify and WordPress"
            description="Pick the service that matches what your website needs most. Not sure which one? Book a quick call and we&rsquo;ll figure out the right next step together."
          />

          <div className="grid grid2">
            {services.map((item) => (
              <article className="card featureCard" key={item.slug}>
                <span className="pill">{item.eyebrow}</span>
                <h3><Link href={`/services/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.excerpt}</p>
                <ul className="checkList">
                  {item.deliverables.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
                <Link className="btn btnPrimary" href={`/services/${item.slug}`}>View service</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('services')}
        eyebrow="Service FAQ"
        title="Hiring a Shopify developer or WordPress developer"
        description="Common questions about scope, timelines, and how to choose the right service for your business."
      />

      <CtaBanner
        eyebrow="Need help choosing?"
        title="Start with a development consultation"
        description="If you are not sure which service best fits your website, use the consultation page and bring your biggest blocker."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'See case studies', href: '/case-studies' }}
      />
    </main>
  );
}
