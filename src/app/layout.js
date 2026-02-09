import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header"; // will become client component
import Providers from "./providers";

import { getChannelPlaylists } from "@/lib/youtube";
import ClientWidgets from "./client-widgets";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

const siteUrl = "https://zaidahmaddev.com";
const ogImage = "https://ik.imagekit.io/zaid/tr:w-1200/zaid-ahmad-tranparent_ev1t3YP7b.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hire Expert Shopify, WordPress & MERN Stack Developer | Zaid Ahmad",
    template: "%s | Zaid Ahmad",
  },
  description:
    "Zaid Ahmad is a Full Stack Developer, Instructor, YouTuber and a Mentor with proficient skills in HTML, CSS, JavaScript, React, Node, Shopify, Wordpress and more.",
  keywords: [
    "Zaid Ahmad", "zaidahmaddev.com", "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS",
    "Shopify", "WordPress", "MERN Stack", "Frontend developer", "frontend mentorship",
  ],
  authors: [{ name: "Zaid Ahmad" }],
  creator: "Zaid Ahmad",
  alternates: { canonical: siteUrl },
  openGraph: {
    url: siteUrl,
    title: "Zaid Ahmad",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Zaid Ahmad — Shopify, WordPress & MERN Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zaidahmaddev",
    creator: "@zaidahmaddev",
    title: "Hire Expert Shopify, WordPress & MERN Stack Developer | Zaid Ahmad",
    description:
      "Build lightning-fast Shopify stores, WordPress sites & MERN apps with Zaid Ahmad. View portfolio & client testimonials.",
    images: [ogImage],
  },
  other: {
    "theme-color": "#f40097",
    "facebook-domain-verification": "px1gkk1g7ymkltuvbou1ju8djhfogc",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default async function RootLayout({ children }) {
  const courses = await getChannelPlaylists();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zaid Ahmad",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    sameAs: [
      "https://github.com/zaidahmaddev",
      "https://www.linkedin.com/in/zaidahmaddev",
      "https://twitter.com/zaidahmaddev",
    ],
    jobTitle: ["Shopify Developer", "WordPress Developer", "MERN Stack Developer"],
    knowsAbout: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Shopify", "WordPress"],
    description:
      "Hire Zaid Ahmad — expert in Shopify theme & app development, custom WordPress sites, and full-stack MERN solutions.",
    makesOffer: [
      { "@type": "Service", serviceType: "Shopify Development", provider: { "@type": "Person", name: "Zaid Ahmad" } },
      { "@type": "Service", serviceType: "WordPress Development", provider: { "@type": "Person", name: "Zaid Ahmad" } },
      { "@type": "Service", serviceType: "MERN Stack Development", provider: { "@type": "Person", name: "Zaid Ahmad" } },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I hire a MERN stack developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To hire me, a MERN stack Developer, just click the WhatsApp icon at https://zaidahmaddev.com/ or email me at contact@zaidahmaddev.com.",
        },
      },
      {
        "@type": "Question",
        name: "What’s your turnaround time for custom Shopify themes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 1–2 weeks, depending on scope—let’s discuss your requirements via the WhatsApp or Email.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${montserrat.className} ${poppins.className}`}>
      <head>
        {/* <link rel="icon" href="/favicon.png" /> */}
        <link rel="apple-touch-icon" sizes="120x120" href="/logo_transparent.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo_transparent.png" />
        <link rel="manifest" href="/manifest.json" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>

      <body>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <Providers initialCourses={courses}>
          <Header />
          {children}
          <Footer />
          <ClientWidgets />
        </Providers>
      </body>
    </html>
  );
}
