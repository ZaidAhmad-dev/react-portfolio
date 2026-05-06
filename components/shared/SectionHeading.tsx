type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'sectionHeading sectionHeadingCentered' : 'sectionHeading'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionCopy">{description}</p>
    </div>
  );
}
