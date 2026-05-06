import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { bookingPages, getBookingPage, site } from '@/lib/site-data';
import CalEmbed from '@/components/shared/CalEmbed';

export function generateStaticParams() {
  return bookingPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getBookingPage(slug);

  if (!item) {
    return buildMetadata({
      title: 'Booking Page Not Found | Zaid Ahmad',
      description: 'The requested booking page could not be found.',
      path: `/book/${slug}`,
    });
  }

  return buildMetadata({
    title: `${item.title} | Zaid Ahmad`,
    description: item.excerpt,
    path: `/book/${item.slug}`,
  });
}

export default async function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getBookingPage(slug);
  const whatsappNumber = site.phone.replace(/\D/g, '');

  const calEvents: Record<string, { calLink: string; namespace: string }> = {
    'development-consultation': {
      calLink: 'zaidahmad/15-min-quick-discovery-call',
      namespace: '15-min-quick-discovery-call',
    },
    'tutoring-diagnostic': {
      calLink: 'zaidahmad/1-on-1-web-development-tutoring-session',
      namespace: '1-on-1-web-development-tutoring-session',
    },
  };

  const calEvent = calEvents[slug] ?? null;
  const selectorId = `cal-inline-${slug}`;

  if (!item) {
    notFound();
  }

  const isTutoring = slug === 'tutoring-diagnostic';
  const altPrimaryHref = isTutoring ? '/tutoring' : '/services';
  const altPrimaryLabel = isTutoring ? 'Browse tutoring' : 'Browse services';
  const whatsappMessage = isTutoring
    ? "Hi Zaid, I'd like to book a tutoring session."
    : "Hi Zaid, I'd like to book a call about my website project.";
  const bestFitItems = isTutoring
    ? [
        'React, JavaScript, Node.js, HTML, or CSS tutoring',
        'Shopify or WordPress mentorship for freelancers and juniors',
        'Project debugging, code review, or interview preparation',
      ]
    : [
        'Shopify theme customization or fixes',
        'WordPress development or speed optimization',
        'Technical support for an active website project',
      ];
  const prepItems = isTutoring
    ? [
        'Share your repo, code, or assignment ahead of time if possible',
        'Know what topic or blocker you want to cover',
        'Be ready to screen-share or pair on real code',
      ]
    : [
        'Have your website URL ready',
        'Know your main problem or goal',
        'Be ready to explain what kind of help you need',
      ];

  return (
    <main>
      <section className="bookingHero">
        <div className="container bookingHeroGrid">
          <div className="bookingHeroContent">
            <span className="eyebrow">{item.eyebrow}</span>

            <h1 className="bookingHeroTitle">{item.title}</h1>

            <p className="bookingHeroCopy">{item.hero}</p>

            <ul className="bookingHeroList">
              {item.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>

            <div className="bookingTrustBar">
              <span>✔ No pressure call</span>
              <span>✔ Clear next steps after we talk</span>
              <span>✔ Free to book</span>
            </div>

            <div className="bookingHeroActions">
              <a className="btn btnSecondary" href="/contact">
                Contact instead
              </a>
              <a className="btn btnGhost" href={altPrimaryHref}>
                {altPrimaryLabel}
              </a>
            </div>
          </div>

          <div className="card bookingSchedulerCard">
            <div className="bookingSchedulerTop">
              <span className="pill">Book now</span>
              <h2>Choose a time that works for you</h2>
              <p>
                Pick a time below to {isTutoring ? 'book your tutoring session' : 'book your discovery call'}.
                If you prefer, reach out by email or WhatsApp instead.
              </p>
              <p className="bookingMiniNote">
                No pressure, no obligation — just a quick conversation to see if we&rsquo;re a fit.
              </p>
            </div>

            {calEvent && (
              <CalEmbed
                calLink={calEvent.calLink}
                namespace={calEvent.namespace}
                selectorId={selectorId}
              />
            )}

            <div className="bookingAltActions">
              <a className="btn btnPrimary" href={`mailto:${site.email}`}>
                <Mail size={18} /> Email {site.email}
              </a>

              <a
                className="btn btnSecondary"
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} /> WhatsApp Me
              </a>

              <a className="btn btnSecondary" href="/contact">
                <MessageSquare size={18} /> Use contact form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bookingInfoSection">
        <div className="container">
          <div className="bookingInfoGrid">
            <div className="card bookingInfoCard">
              <span className="pill">What happens on the call</span>
              <h3>A simple 3-step conversation</h3>
              <ul className="bookingSimpleList">
                <li>You share your project, goal, or current blocker</li>
                <li>I ask a few questions to understand scope and priorities</li>
                <li>You leave with clarity on the best next step</li>
              </ul>
            </div>

            <div className="card bookingInfoCard">
              <span className="pill">Best fit</span>
              <h3>This call is ideal if you need:</h3>
              <ul className="bookingSimpleList">
                {bestFitItems.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>

            <div className="card bookingInfoCard">
              <span className="pill">Before the call</span>
              <h3>How to prepare</h3>
              <ul className="bookingSimpleList">
                {prepItems.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {item.faqs && item.faqs.length > 0 ? (
        <FaqAccordion
          faqs={item.faqs}
          eyebrow="Booking FAQ"
          title={`${item.title} questions`}
          description="Common questions about what to expect, how to prepare, and what happens after the call."
        />
      ) : null}
    </main>
  );
}
