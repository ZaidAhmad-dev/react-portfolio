import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getPageFaqs, resources } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Free Resources | Zaid Ahmad',
  description: 'Free guides for store owners and developers — Shopify speed checklist and React debugging cheatsheet, delivered straight to your inbox.',
  path: '/resources',
});

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free resources"
        title="Practical guides for store owners and developers"
        description="Pick the resource that matches your goal. Each one is short, actionable, and delivered to your inbox the moment you submit."
        primaryCta={{ label: 'Book a Call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Book tutoring', href: '/book/tutoring-diagnostic' }}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What you can grab"
            title="Two short, focused guides"
            description="Both resources are written from real client and tutoring work. No fluff, no signup walls beyond your email."
          />

          <div className="grid grid2">
            {resources.map((item) => (
              <article className="card resourceCard" key={item.slug}>
                <span className="pill">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="btn btnSecondary" href={`#get-resource`}>
                  Get this resource
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt" id="get-resource">
        <div className="container">
          <div className="resourceShell">
            <div className="resourceIntro">
              <SectionHeading
                eyebrow="Send it to my inbox"
                title="Pick a resource and enter your email"
                description="The selected guide will be emailed to you right away. You can unsubscribe any time."
              />
            </div>

            <form className="leadFormEnhanced" action="/subscribe" method="post">
              <div className="resourceOptions">
                {resources.map((item, index) => (
                  <label className="resourceOptionCard" key={item.slug}>
                    <input
                      type="radio"
                      name="resource"
                      value={item.slug}
                      defaultChecked={index === 0}
                    />
                    <div className="resourceOptionBody">
                      <span className="resourceOptionEyebrow">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="leadFormRow">
                <label htmlFor="resource-email" className="srOnly">
                  Email address
                </label>
                <input
                  id="resource-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button className="btn btnPrimary" type="submit">
                  Send Me the Resource
                </button>
              </div>

              <input
                type="text"
                name="company"
                className="srOnly"
                tabIndex={-1}
                autoComplete="off"
              />
            </form>

            <p className="formNote">
              You&rsquo;ll receive the file in your inbox. Check your spam folder if you don&rsquo;t see it within a couple of minutes.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('resources')}
        eyebrow="Resource FAQ"
        title="Using these guides alongside tutoring or development work"
        description="Common questions about how the free Shopify, WordPress, and React resources fit into Shopify tutor, React tutor, and HTML tutoring sessions."
      />

      <CtaBanner
        eyebrow="Next step"
        title="Need custom help instead of a resource?"
        description="If the issue is urgent or specific, a call or tutoring session will move faster than a guide."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
      />
    </main>
  );
}
