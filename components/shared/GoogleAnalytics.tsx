import Script from 'next/script';
import { Suspense } from 'react';
import GoogleAnalyticsTracker from './GoogleAnalyticsTracker';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>

      <Suspense fallback={null}>
        <GoogleAnalyticsTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
