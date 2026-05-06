import Link from 'next/link';

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export default function CtaBanner({ eyebrow, title, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="ctaShell">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="sectionTitle">{title}</h2>
          <p className="sectionCopy centeredText">{description}</p>
          <div className="ctaActions">
            <Link className="btn btnPrimary" href={primary.href}>
              {primary.label}
            </Link>
            {secondary ? (
              <Link className="btn btnSecondary" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
