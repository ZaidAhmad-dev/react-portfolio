"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/site-data';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navWrap}`}>
        <Link href="/" className={styles.brand} aria-label="Zaid Ahmad Dev home">
          <Image
            src="/images/logo/zaid-logo-transparent-2026.png"
            alt="Zaid Ahmad logo"
            width={180}
            height={48}
            priority
            style={{ height: 'auto' }}
          />
        </Link>

        <button
          className={styles.toggle}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary">
          <div className={styles.navLinks}>
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Link className={`btn btnPrimary ${styles.navCta}`} href="/book/development-consultation">
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
