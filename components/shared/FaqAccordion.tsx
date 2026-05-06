'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import type { FaqItem } from '@/lib/types';
import JsonLd from './JsonLd';

type FaqAccordionProps = {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  altBackground?: boolean;
  withSchema?: boolean;
};

export default function FaqAccordion({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description = 'Quick answers to questions visitors ask most often.',
  altBackground = true,
  withSchema = true,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const sectionClass = altBackground
    ? 'section pageSectionAlt'
    : 'section';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className={sectionClass} id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="sectionHeading">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="sectionTitle" id="faq-title">{title}</h2>
          <p className="sectionCopy">{description}</p>
        </div>

        <div className="faqWrap" role="list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const triggerId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <article
                className={`card faqItem${isOpen ? ' faqItemOpen' : ''}`}
                key={item.question}
                role="listitem"
              >
                <h3 className="faqQuestion">
                  <button
                    type="button"
                    id={triggerId}
                    className="faqToggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((current) => (current === idx ? null : idx))
                    }
                  >
                    <span className="faqQuestionText">{item.question}</span>
                    <span className="faqIcon" aria-hidden="true">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="faqAnswer"
                >
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>

        {withSchema ? <JsonLd data={schema} /> : null}
      </div>
    </section>
  );
}
