import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa6';
import { site, services, tutoringItems } from '@/lib/site-data';
import styles from './Footer.module.css';

export default function Footer() {
  const socialLinks = [
    { href: site.socials.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: site.socials.youtube, label: 'YouTube', icon: FaYoutube },
    { href: site.socials.github, label: 'GitHub', icon: FaGithub },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>{site.name}</h3>
            <p>{site.description}</p>

            <ul className={styles.socials} aria-label="Social profiles">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className={styles.links}>
              {services.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Tutoring</h4>
            <ul className={styles.links}>
              {tutoringItems.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link href={`/tutoring/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/book/development-consultation">Book a Call</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {site.shortName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
