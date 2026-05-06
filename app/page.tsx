import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqAccordion from '@/components/shared/FaqAccordion';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { caseStudies, faqs, resources, services, site, testimonials, tutoringItems } from '@/lib/site-data';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'Shopify & WordPress Developer and Web Development Tutor | Zaid Ahmad',
  description: site.description,
  path: '/',
});

export default function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="container heroWrap">
          <div>
            <span className="eyebrow">Shopify • WordPress • Tutoring</span>
            <h1>{site.tagline}</h1>
            <p>
              I help businesses improve Shopify and WordPress websites with customization, optimization,
              and technical fixes. I also offer 1:1 tutoring for React, JavaScript, Node.js, Shopify,
              and WordPress for students, juniors, and working developers.
            </p>

            <div className="heroActions">
              <Link className="btn btnPrimary" href="/book/development-consultation">
                Book a Development Call
              </Link>
              <Link className="btn btnSecondary" href="/tutoring">
                Explore Tutoring
              </Link>
            </div>

            <ul className="heroPoints" aria-label="Highlights">
              <li><span className="dot" /> Shopify theme customization</li>
              <li><span className="dot" /> WordPress speed optimization</li>
              <li><span className="dot" /> React & JavaScript tutoring</li>
            </ul>
          </div>

          <aside className="heroCard" aria-label="Quick overview">
            <h2>Choose the right path</h2>
            <p>
              Whether you need a better Shopify or WordPress website or personalized coding support,
              the site is built to guide you to the right next step quickly.
            </p>

            <div className="heroActions">
              <Link className="btn btnPrimary" href="/services">View Services</Link>
              <Link className="btn btnSecondary" href="/book/tutoring-diagnostic">Book Tutoring</Link>
            </div>

            <div className="heroMiniGrid">
              <div className="heroMini">
                <strong>200+</strong>
                <span>Clients & students served</span>
              </div>
              <div className="heroMini">
                <strong>1:1</strong>
                <span>Hands-on project support</span>
              </div>
              <div className="heroMini">
                <strong>Remote</strong>
                <span>US-friendly collaboration</span>
              </div>
              <div className="heroMini">
                <strong>Fast</strong>
                <span>Clear next steps and execution</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="trustStrip sectionSm" aria-label="Proof">
        <div className="container">
          <div className="trustGrid">
            <div className="trustItem"><strong>200+</strong><span>Clients and students helped</span></div>
            <div className="trustItem"><strong>Shopify + WP</strong><span>Core development focus</span></div>
            <div className="trustItem"><strong>React / JS / Node</strong><span>Subjects available for tutoring</span></div>
            <div className="trustItem"><strong>Remote support</strong><span>Flexible async and live collaboration</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="start-here">
        <div className="container">
          <SectionHeading
            eyebrow="Start here"
            title="Two clear paths, one focused website"
            description="If you run a business that needs Shopify or WordPress help, head to services. If you&rsquo;re a developer or student wanting hands-on tutoring, head to the tutoring pages."
          />

          <div className="grid grid2">
            <article className="card pathCard">
              <span className="pill">For business owners</span>
              <h3>Hire me for Shopify & WordPress development</h3>
              <p>Best for businesses that need website improvements, speed work, bug fixes, theme changes, and ongoing implementation support.</p>
              <ul className="checkList">
                <li>Shopify theme customization</li>
                <li>Shopify speed optimization</li>
                <li>WordPress development and maintenance</li>
                <li>Performance fixes and UX improvements</li>
              </ul>
              <Link className="btn btnPrimary" href="/services">Explore Services</Link>
            </article>

            <article className="card pathCard">
              <span className="pill">For students & developers</span>
              <h3>Learn with 1:1 web development tutoring</h3>
              <p>Best for learners who want live guidance, debugging support, project help, interview prep, or a structured plan to improve faster.</p>
              <ul className="checkList">
                <li>React tutoring</li>
                <li>JavaScript tutoring</li>
                <li>Node.js tutoring</li>
                <li>Shopify and WordPress help</li>
              </ul>
              <Link className="btn btnSecondary" href="/tutoring">Explore Tutoring</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt" id="featured-services">
        <div className="container">
          <SectionHeading
            eyebrow="Featured services"
            title="Development services built around real business needs"
            description="Focused offers across Shopify and WordPress — theme customization, speed optimization, and ongoing implementation support for active websites."
          />

          <div className="grid grid2">
            {services.map((item) => (
              <article className="card featureCard" key={item.slug}>
                <span className="pill">Service</span>
                <h3><Link href={`/services/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.excerpt}</p>
                <div className="metaRow">
                  {item.benefits.slice(0, 3).map((benefit) => <span key={benefit}>{benefit}</span>)}
                </div>
                <Link className="btn btnGhost" href={`/services/${item.slug}`}>View {item.title} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="featured-tutoring">
        <div className="container">
          <SectionHeading
            eyebrow="Featured tutoring"
            title="1:1 tutoring for practical coding progress"
            description="Hands-on sessions for React, JavaScript, Node.js, HTML, Shopify, and WordPress — built around your real project and your real questions."
          />

          <div className="grid grid2">
            {tutoringItems.map((item) => (
              <article className="card featureCard" key={item.slug}>
                <span className="pill">Tutoring</span>
                <h3><Link href={`/tutoring/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.excerpt}</p>
                <div className="metaRow">
                  {item.topics.slice(0, 3).map((topic) => <span key={topic}>{topic}</span>)}
                </div>
                <Link className="btn btnGhost" href={`/tutoring/${item.slug}`}>View {item.title} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pageSectionAlt" id="case-studies">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent Shopify and WordPress projects"
            description="A snapshot of recent ecommerce, SaaS, and product websites. Click through to see the full project or visit the live site."
          />

          <div className="portfolioGrid">
            {caseStudies.slice(0, 4).map((item) => (
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
                      Visit live site
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link className="btn btnSecondary" href="/case-studies">
              View all case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients and students say"
            description="Short, specific feedback from Shopify and WordPress clients, plus React, JavaScript, MERN, and HTML tutoring students."
          />
          <div className="grid grid3">
            {testimonials.map((item) => (
              <article
                className="card testimonialCard"
                key={`${item.name}-${item.service}`}
              >
                <div className="testimonialTop">
                  {item.rating ? (
                    <div
                      className="testimonialStars"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {"★".repeat(item.rating)}
                    </div>
                  ) : null}

                  <span className="pill">{item.service}</span>
                </div>

                <blockquote>“{item.quote}”</blockquote>

                <div className="testimonialAuthor">
                  {item.name}
                  <span className="testimonialRole">{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resource-offer">
        <div className="container">
          <div className="resourceShell">
            <div className="resourceIntro">
              <SectionHeading
                eyebrow="Free resource"
                title="Get a free checklist or debugging cheatsheet"
                description="Choose the resource that matches your goal. Great for business owners who want a faster Shopify store, or developers who want help debugging React projects."
              />
            </div>

            <form className="leadFormEnhanced" action="/subscribe" method="post">
              <div className="resourceOptions">
                <label className="resourceOptionCard">
                  <input
                    type="radio"
                    name="resource"
                    value="shopify-speed-checklist"
                    defaultChecked
                  />
                  <div className="resourceOptionBody">
                    <span className="resourceOptionEyebrow">For store owners</span>
                    <h3>Shopify Speed Checklist</h3>
                    <p>
                      A practical checklist to help you spot common speed issues,
                      performance bottlenecks, and storefront friction.
                    </p>
                  </div>
                </label>

                <label className="resourceOptionCard">
                  <input
                    type="radio"
                    name="resource"
                    value="react-debugging-cheatsheet"
                  />
                  <div className="resourceOptionBody">
                    <span className="resourceOptionEyebrow">For developers</span>
                    <h3>React Debugging Cheatsheet</h3>
                    <p>
                      A quick-reference guide for tracking bugs, fixing component issues,
                      and debugging React projects more confidently.
                    </p>
                  </div>
                </label>
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
              The selected file will download immediately after submit.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={faqs}
        eyebrow="FAQ"
        title="Shopify, WordPress, and tutoring questions"
        description="Quick answers about hiring me as a Shopify developer or WordPress developer, and booking React tutor, HTML tutor, or Shopify tutor sessions."
      />

      <CtaBanner
        eyebrow="Next step"
        title="Ready to improve your website or get 1:1 coding help?"
        description="Choose the path that fits your goal. Businesses should start with a development call. Students and developers can start with tutoring."
        primary={{ label: 'Book a Development Call', href: '/book/development-consultation' }}
        secondary={{ label: 'Book a Tutoring Session', href: '/book/tutoring-diagnostic' }}
      />
    </main>
  );
}
