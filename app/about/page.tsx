import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getPageFaqs, site } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'About Zaid Ahmad | Shopify & WordPress Developer',
  description: 'Learn about Zaid Ahmad, a Shopify and WordPress developer who also offers practical 1:1 web development tutoring.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Shopify & WordPress developer who also teaches"
        description="I build and improve Shopify and WordPress websites for businesses, and run 1:1 tutoring sessions for developers learning React, JavaScript, Node.js, HTML, Shopify, and WordPress."
        primaryCta={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Book tutoring', href: '/book/tutoring-diagnostic' }}
      />

      <section className="section">
        <div className="container aboutIntro">
          <div className="aboutPortrait">
            <Image
              src={site.profileImage}
              alt={`${site.shortName} — Shopify and WordPress developer and 1:1 web development tutor`}
              width={420}
              height={420}
              priority
              sizes="(max-width: 900px) 70vw, 420px"
            />
          </div>

          <div className="aboutIntroBody">
            <SectionHeading
              eyebrow="Approach"
              title="Technical help that stays practical"
              description="Whether you&rsquo;re hiring me to build something or to teach you, the goal is the same: make a real, measurable difference in your project or your skills — without overcomplicating it."
            />
            <p className="sectionCopy">
              I&rsquo;m {site.shortName}, a Shopify and WordPress developer who also runs 1:1 tutoring sessions
              for developers. I&rsquo;ve worked across Shopify storefronts (theme customization, performance
              work, conversion-focused builds) and WordPress sites (custom themes, plugin troubleshooting,
              speed optimization) for over 200 clients and students. Tutoring grew out of that work — the
              same patterns that improve client websites are the ones I teach developers to apply on their own projects.
            </p>

            <div className="card infoCard aboutInfoCard">
              <span className="pill">What I focus on</span>
              <ul className="checkList">
                <li>Shopify theme customization and storefront performance</li>
                <li>WordPress development, custom themes, and speed work</li>
                <li>1:1 tutoring in React, JavaScript, Node.js, and HTML</li>
                <li>Practical Shopify and WordPress tutoring for freelancers</li>
                <li>Remote collaboration with clients across the US, UK, and Europe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt">
        <div className="container">
          <SectionHeading
            eyebrow="Where to next"
            title="Pick the path that fits your goal"
            description="Whether you&rsquo;re hiring a developer or looking for a tutor, every page below ends with a clear next step."
          />
          <div className="grid grid3">
            <article className="card featureCard">
              <span className="pill">Businesses</span>
              <h3>Development services</h3>
              <p>Hire me to improve your Shopify or WordPress website — theme customization, speed optimization, fixes, and ongoing implementation support.</p>
              <Link className="btn btnPrimary" href="/services">View services</Link>
            </article>
            <article className="card featureCard">
              <span className="pill">Learners</span>
              <h3>Tutoring pages</h3>
              <p>Book 1:1 sessions in React, JavaScript, Node.js, HTML, Shopify, or WordPress — built around your real project or learning goal.</p>
              <Link className="btn btnPrimary" href="/tutoring">View tutoring</Link>
            </article>
            <article className="card featureCard">
              <span className="pill">Direct contact</span>
              <h3>Contact page</h3>
              <p>Already know what you need? Send a message via the contact form or WhatsApp and I&rsquo;ll get back to you within a business day.</p>
              <Link className="btn btnPrimary" href="/contact">Contact</Link>
            </article>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('about')}
        eyebrow="About FAQ"
        title="More about working with me"
        description="Common questions about my background as a Shopify developer and WordPress developer, and why I run React, HTML, and Shopify tutoring alongside client work."
      />
    </main>
  );
}
