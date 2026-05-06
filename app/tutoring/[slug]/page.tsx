import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getTutoring, tutoringItems } from '@/lib/site-data';

export function generateStaticParams() {
  return tutoringItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getTutoring(slug);

  if (!item) {
    return buildMetadata({
      title: 'Tutoring Page Not Found | Zaid Ahmad',
      description: 'The requested tutoring page could not be found.',
      path: `/tutoring/${slug}`,
    });
  }

  return buildMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/tutoring/${item.slug}`,
    keywords: [item.title, ...item.topics],
  });
}

export default async function TutoringDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getTutoring(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.hero}
        primaryCta={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <section className="section">
        <div className="container grid grid2">
          <div>
            <SectionHeading
              eyebrow="What we can cover"
              title="Hands-on tutoring around real blockers"
              description={item.excerpt}
            />
            <ul className="checkList">
              {item.topics.map((entry) => <li key={entry}>{entry}</li>)}
            </ul>
          </div>

          <div className="card infoCard">
            <span className="pill">Who it helps</span>
            <h3>Students, juniors, career switchers, and working developers</h3>
            <p>These tutoring pages are designed to support people who want project-based guidance instead of generic course-style teaching.</p>
            <div className="metaRow">
              {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt">
        <div className="container">
          <SectionHeading
            eyebrow="Session format"
            title="How sessions actually run"
            description="Live, hands-on sessions over Google Meet or Zoom with screen sharing and VS Code Live Share when we pair on code. Each session is structured around your real project, not a fixed curriculum."
          />
          <div className="grid grid3">
            <article className="card featureCard">
              <span className="pill">Before session</span>
              <h3>Share your code or blocker</h3>
              <p>Send your repo, assignment, or the specific issue you&rsquo;re stuck on ahead of time. The more context I have, the more we get done in the session.</p>
            </article>
            <article className="card featureCard">
              <span className="pill">During session</span>
              <h3>Debug and explain in real time</h3>
              <p>We work through the actual problem together — fixing the bug, refactoring the component, or implementing the feature — and I explain the thinking behind every decision.</p>
            </article>
            <article className="card featureCard">
              <span className="pill">After session</span>
              <h3>Leave with clear next steps</h3>
              <p>You get a short recap of what we covered, what to practice next, and any references that&rsquo;ll help between sessions. Recordings are available on request.</p>
            </article>
          </div>
        </div>
      </section>

      {item.faqs && item.faqs.length > 0 ? (
        <FaqAccordion
          faqs={item.faqs}
          eyebrow="FAQ"
          title={`${item.title} questions`}
          description={`Common questions about booking 1:1 ${item.title.toLowerCase()} sessions.`}
        />
      ) : null}

      <CtaBanner
        eyebrow="Next step"
        title={`Want help with ${item.title.toLowerCase()}?`}
        description="Start with a tutoring session and bring your questions, project, or current blocker."
        primary={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
        secondary={{ label: 'Browse all tutoring', href: '/tutoring' }}
      />
    </main>
  );
}
