import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section">
      <div className="container card infoCard">
        <span className="eyebrow">404</span>
        <h1 className="sectionTitle">Page not found</h1>
        <p className="sectionCopy">The page you requested does not exist or may have moved.</p>
        <div className="heroActions" style={{ marginTop: '20px' }}>
          <Link className="btn btnPrimary" href="/">Go home</Link>
          <Link className="btn btnSecondary" href="/contact">Contact</Link>
        </div>
      </div>
    </main>
  );
}
