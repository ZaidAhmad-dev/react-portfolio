import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Zaid Ahmad',
  description: 'How Zaid Ahmad Dev collects, uses, and protects your information when you use this website, contact me, or download a free resource.',
  path: '/privacy-policy',
});

const lastUpdated = 'May 2026';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy policy"
        title="How your information is handled on this website"
        description={`Last updated: ${lastUpdated}. This page explains what data is collected, why, and your rights over it.`}
      />

      <section className="section">
        <div className="container privacyContent">
          <h2>1. Who this policy is from</h2>
          <p>
            This website ({site.domain}) is operated by {site.shortName} (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo;).
            For privacy questions or requests, email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>2. What information is collected</h2>
          <p>I collect only the information you actively provide or that&rsquo;s needed to make the site work:</p>
          <ul>
            <li>
              <strong>Contact form submissions</strong> — name, email, optional website URL, service type,
              optional budget, and your message. Used only to respond to your inquiry.
            </li>
            <li>
              <strong>Lead magnet signups</strong> — email address and the resource you requested.
              Used to deliver the resource and, if you opt in, to send occasional related updates.
            </li>
            <li>
              <strong>Booking information</strong> — when you book a call through Cal.com, Cal collects
              your name, email, time-zone, and any answers you provide on their booking form.
              That data is processed by Cal.com under their privacy policy.
            </li>
            <li>
              <strong>Analytics</strong> — Google Analytics collects anonymous usage data such as page
              views, browser type, referrer, and approximate location. It uses cookies to do so.
              No personally identifiable information is collected by Analytics on this site.
            </li>
            <li>
              <strong>Server logs</strong> — the hosting platform may automatically log standard request
              data (IP address, user-agent, timestamps) for security and abuse prevention.
            </li>
          </ul>

          <h2>3. Third-party services used</h2>
          <p>The site relies on the following processors. Each has its own privacy policy:</p>
          <ul>
            <li>
              <strong>Resend</strong> — sends contact-form and lead-magnet emails on my behalf.
              See <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">resend.com/legal/privacy-policy</a>.
            </li>
            <li>
              <strong>Cal.com</strong> — handles call scheduling and booking confirmations.
              See <a href="https://cal.com/privacy" target="_blank" rel="noreferrer noopener">cal.com/privacy</a>.
            </li>
            <li>
              <strong>Google Analytics</strong> — provides anonymous traffic analytics.
              See <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">policies.google.com/privacy</a>.
            </li>
            <li>
              <strong>Hosting provider</strong> — serves the website and stores standard request logs.
            </li>
          </ul>

          <h2>4. How your data is used</h2>
          <ul>
            <li>To respond to messages you send through the contact form</li>
            <li>To deliver the free resources you request</li>
            <li>To run scheduled calls and tutoring sessions you book</li>
            <li>To understand site traffic patterns at an aggregate, anonymized level</li>
            <li>To prevent spam and abuse</li>
          </ul>
          <p>
            Your data is <strong>never sold</strong> and is not shared with third parties beyond the
            processors listed above.
          </p>

          <h2>5. Cookies</h2>
          <p>
            This site uses a small number of cookies, primarily set by Google Analytics for anonymous
            traffic measurement. You can disable cookies in your browser settings or use a privacy
            extension to block analytics scripts — the site will continue to work normally.
          </p>

          <h2>6. Data retention</h2>
          <ul>
            <li>Contact-form messages are kept in my inbox until they&rsquo;re no longer relevant, typically up to two years.</li>
            <li>Lead-magnet email addresses are kept until you unsubscribe or request deletion.</li>
            <li>Analytics data is retained according to Google Analytics defaults.</li>
            <li>Server logs are retained per the hosting provider&rsquo;s policy (typically 30&ndash;90 days).</li>
          </ul>

          <h2>7. Your rights</h2>
          <p>Wherever you live, you can ask me to:</p>
          <ul>
            <li>Confirm what personal data I hold about you</li>
            <li>Send you a copy of that data</li>
            <li>Correct anything that&rsquo;s inaccurate</li>
            <li>Delete your data (subject to any legal retention requirements)</li>
            <li>Stop sending you marketing emails (every email also has an unsubscribe link)</li>
          </ul>
          <p>
            To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a> from
            the address you used to contact the site. Requests are typically handled within 30 days.
          </p>

          <h2>8. International transfers</h2>
          <p>
            Some of the processors listed in section 3 are based in the United States or other countries.
            By using this website, you understand that your information may be transferred to and processed
            in those countries under standard contractual safeguards.
          </p>

          <h2>9. Security</h2>
          <p>
            Reasonable technical measures are used to protect data in transit (HTTPS) and at rest with
            the third-party processors above. No internet-based service can be guaranteed 100% secure,
            but no payment information or sensitive personal data is collected directly by this site.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            This policy may be updated as the site evolves or as legal requirements change. The
            &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent version.
            Material changes will be communicated via the website.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about this policy or about how your data is handled? Email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or use the{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
