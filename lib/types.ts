export type NavItem = {
  label: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  benefits: string[];
  deliverables: string[];
  process: ProcessStep[];
  faqs?: FaqItem[];
};

export type TutoringItem = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  topics: string[];
  faqs?: FaqItem[];
};

export type TestimonialItem = {
  name: string;
  role: string;
  service: string;
  quote: string;
  rating?: number;
};

export type CaseStudyItem = {
  slug: string;
  title: string;
  client: string;
  platform: string;
  category: string;
  siteUrl: string;
  image: string;
  eyebrow: string;
  excerpt: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  focus: string;
  highlights: string[];
  focusAreas: string[];
  stack: string[];
  faqs?: FaqItem[];
};

export type BookingItem = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  hero: string;
  checks: string[];
  faqs?: FaqItem[];
};

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  tag: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedDate: string;
  modifiedDate?: string;
  readingMinutes: number;
  tags: string[];
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  category: string;
};

export type SiteData = {
  site: {
    name: string;
    shortName: string;
    domain: string;
    email: string;
    phone: string;
    location: string;
    description: string;
    tagline: string;
    profileImage: string;
    keywords: string[];
    socials: {
      linkedin: string;
      youtube: string;
      github: string;
    };
  };
  nav: NavItem[];
  services: ServiceItem[];
  tutoring: TutoringItem[];
  caseStudies: CaseStudyItem[];
  booking: BookingItem[];
  resources: ResourceItem[];
  faqs: FaqItem[];
  pageFaqs?: Record<string, FaqItem[]>;
  testimonials: TestimonialItem[];
};
