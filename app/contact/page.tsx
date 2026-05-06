import ContactForm from '@/components/shared/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { getPageFaqs, site } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Contact | Zaid Ahmad',
  description: 'Get in touch about Shopify and WordPress development, website improvements, or one-on-one tutoring.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in touch about your website or your learning goals"
        description="Use this page if you already know what you need and want a direct way to reach out."
        primaryCta={{ label: 'Book a development call', href: '/book/development-consultation' }}
        secondaryCta={{ label: 'Book tutoring', href: '/book/tutoring-diagnostic' }}
      />

      <section className="section">
        <div className="container contactGrid">
          <div className="card infoCard">
            <SectionHeading
              eyebrow="Direct contact"
              title="How to reach me"
              description="The fastest way to get a clear answer is the contact form or WhatsApp. Email works for anything that needs a paper trail or detailed brief."
            />
            <ul className="checkList">
              <li>Email: {site.email}</li>
              <li>Phone / WhatsApp: {site.phone}</li>
              <li>Location: {site.location} (working US, UK, and EU hours)</li>
              <li>Response time: usually within one business day</li>
            </ul>
          </div>

          <div className="card infoCard">
            <h2>Send a message</h2>
            <p>
              Tell me about your Shopify, WordPress, or tutoring needs and I&rsquo;ll get back to you.
            </p>

            <div className="card" style={{ padding: "28px", marginTop: "24px" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={getPageFaqs('contact')}
        eyebrow="Contact FAQ"
        title="Reaching out about Shopify, WordPress, or tutoring"
        description="Common questions about response times and whether to message about Shopify developer projects, WordPress developer projects, or React, HTML, and Shopify tutor sessions."
      />
    </main>
  );
}
