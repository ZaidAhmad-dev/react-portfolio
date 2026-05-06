'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type CalFn = ((...args: unknown[]) => void) & {
  ns: Record<string, CalFn>;
  loaded?: boolean;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

type CalEmbedProps = {
  calLink: string;
  namespace: string;
  selectorId: string;
};

const CAL_LOADER = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
`;

export default function CalEmbed({ calLink, namespace, selectorId }: CalEmbedProps) {
  useEffect(() => {
    const mount = document.getElementById(selectorId);
    if (mount) mount.innerHTML = '';

    const init = () => {
      const Cal = window.Cal;
      if (!Cal) return false;

      Cal('init', namespace, { origin: 'https://app.cal.com' });
      Cal.ns[namespace]('inline', {
        elementOrSelector: `#${selectorId}`,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink,
      });
      Cal.ns[namespace]('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      return true;
    };

    if (init()) {
      return () => {
        const n = document.getElementById(selectorId);
        if (n) n.innerHTML = '';
      };
    }

    const interval = window.setInterval(() => {
      if (init()) window.clearInterval(interval);
    }, 250);

    return () => {
      window.clearInterval(interval);
      const n = document.getElementById(selectorId);
      if (n) n.innerHTML = '';
    };
  }, [calLink, namespace, selectorId]);

  return (
    <>
      <Script id="cal-loader" strategy="afterInteractive">
        {CAL_LOADER}
      </Script>
      <div id={selectorId} className="calEmbed" />
    </>
  );
}
