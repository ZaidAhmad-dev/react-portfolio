import rawData from './site-data.json';
import type {
  BookingItem,
  CaseStudyItem,
  FaqItem,
  NavItem,
  ResourceItem,
  ServiceItem,
  SiteData,
  TestimonialItem,
  TutoringItem,
} from './types';

const data = rawData as SiteData;

export const site = data.site;
export const navItems = data.nav as NavItem[];
export const services = data.services as ServiceItem[];
export const tutoringItems = data.tutoring as TutoringItem[];
export const caseStudies = data.caseStudies as CaseStudyItem[];
export const bookingPages = data.booking as BookingItem[];
export const resources = data.resources as ResourceItem[];
export const faqs = data.faqs as FaqItem[];
export const pageFaqs = (data.pageFaqs ?? {}) as Record<string, FaqItem[]>;
export const testimonials = data.testimonials as TestimonialItem[];

export function getPageFaqs(key: string): FaqItem[] {
  return pageFaqs[key] ?? [];
}

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getTutoring(slug: string) {
  return tutoringItems.find((item) => item.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getBookingPage(slug: string) {
  return bookingPages.find((item) => item.slug === slug);
}
