import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getPageFaqs, tutoringItems } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Web Development Tutoring | Zaid Ahmad',
  description: '1:1 tutoring in React, JavaScript, Node.js, Shopify, and WordPress for project help, debugging, and practical learning progress.',
  path: '/tutoring',
});

export default function TutoringPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tutoring"
        title="1:1 tutoring for practical coding progress"
        description="Whether you need debugging help, project support, or a clearer path to improve, the tutoring pages below are organized by subject."
        primaryCta={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Subjects"
            title="Choose the subject that matches your current goal"
            description="React, JavaScript, Node.js, plus a combined Shopify and WordPress track. Each page covers what you&rsquo;ll learn, who it&rsquo;s for, and how sessions run."
          />

          <div className="grid grid2">
            {tutoringItems.map((item) => (
              <article className="card featureCard" key={item.slug}>
                <span className="pill">{item.eyebrow}</span>
                <h3><Link href={`/tutoring/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.excerpt}</p>
                <ul className="checkList">
                  {item.topics.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
                <Link className="btn btnPrimary" href={`/tutoring/${item.slug}`}>View tutoring page</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('tutoring')}
        eyebrow="Tutoring FAQ"
        title="React tutor, HTML tutor, and Shopify tutor questions"
        description="Common questions about 1:1 sessions, beginner-friendly paths, and how online tutoring works."
      />

      <CtaBanner
        eyebrow="Get unstuck"
        title="Start with a tutoring diagnostic session"
        description="The first session can be used to review your level, fix blockers, and decide what to work on next."
        primary={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
        secondary={{ label: 'See resources', href: '/resources' }}
      />
    </main>
  );
}
