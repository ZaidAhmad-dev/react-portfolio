import Link from 'next/link';

export default function ShopifyLcpFixOrderArticle() {
  return (
    <>
      <p className="articleLede">
        Most &ldquo;<Link href="/services/shopify-speed-optimization">Shopify speed optimization</Link>&rdquo;
        advice tells you to compress images and call it done. After working on
        50+ Shopify storefronts, I can tell you images are rarely the problem.
        The real LCP killers are usually further down the stack &mdash; and you
        have to fix them in the right order, or you waste hours on changes that
        don&rsquo;t move the needle.
      </p>

      <p>Here&rsquo;s the exact triage order I follow.</p>

      <nav className="articleToc" aria-label="On this page">
        <p className="articleTocTitle">Jump to</p>
        <ol>
          <li><a href="#audit">Audit, don&rsquo;t guess</a></li>
          <li><a href="#app-audit">App audit &mdash; the 80/20 of Shopify performance</a></li>
          <li><a href="#hero-image">Fix the hero image properly</a></li>
          <li><a href="#liquid-render">Liquid render time</a></li>
          <li><a href="#fonts">Fonts</a></li>
        </ol>
      </nav>

      <h2 id="audit">1. Audit, don&rsquo;t guess</h2>

      <p>
        Before touching anything, run the page through{' '}
        <a
          href="https://pagespeed.web.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PageSpeed Insights
        </a>{' '}
        <strong>and</strong>{' '}
        <a
          href="https://www.webpagetest.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebPageTest
        </a>
        . PageSpeed Insights gives you the{' '}
        <a
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Core Web Vitals
        </a>{' '}
        numbers Google actually uses for ranking. WebPageTest gives you a
        waterfall that tells you <em>why</em> the page is slow.
      </p>

      <p>Look for these in the waterfall:</p>

      <ul>
        <li>Render-blocking scripts in the <code>&lt;head&gt;</code></li>
        <li>
          Large hero images without{' '}
          <a
            href="https://web.dev/articles/fetch-priority"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>fetchpriority=&quot;high&quot;</code>
          </a>
        </li>
        <li>
          Third-party scripts loaded synchronously &mdash; the usual suspects:
          chat widgets, review apps, and analytics stacks
        </li>
      </ul>

      <h2 id="app-audit">2. App audit &mdash; the 80/20 of Shopify performance</h2>

      <p>
        Open your theme&rsquo;s <code>theme.liquid</code> and search for every{' '}
        <code>&lt;script&gt;</code> tag injected by an app. Each one is a
        candidate for removal or deferral.
      </p>

      <p>
        A pattern I see constantly: stores running 4&ndash;5 review apps, 2
        popup apps, and 3 &ldquo;AI personalization&rdquo; apps. Each one loads
        ~50&ndash;200&nbsp;KB of JavaScript on every page. <strong>That&rsquo;s
        your problem.</strong>
      </p>

      <p>What I actually do:</p>

      <ul>
        <li>Uninstall apps that aren&rsquo;t generating revenue you can measure</li>
        <li>
          For apps you keep, ask the dev support team if they have an async or
          deferred loading option (about half do; you just have to ask)
        </li>
        <li>
          Move non-critical scripts to load on{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>requestIdleCallback</code>
          </a>{' '}
          or after the first user interaction
        </li>
      </ul>

      <h2 id="hero-image">3. Fix the hero image properly</h2>

      <p>
        If the LCP element is a hero image (it usually is on Shopify):
      </p>

      <ul>
        <li>
          Add <code>loading=&quot;eager&quot;</code> and{' '}
          <code>fetchpriority=&quot;high&quot;</code> on the{' '}
          <code>&lt;img&gt;</code>
        </li>
        <li>Serve it as WebP at the actual display dimensions, not the source size</li>
        <li>
          Preload it in <code>&lt;head&gt;</code>:
        </li>
      </ul>

      <pre><code>{`<link
  rel="preload"
  as="image"
  href="/path/to/hero.webp"
  fetchpriority="high"
/>`}</code></pre>

      <p>
        This alone usually drops{' '}
        <a
          href="https://web.dev/articles/lcp"
          target="_blank"
          rel="noopener noreferrer"
        >
          LCP
        </a>{' '}
        by 600&ndash;1,200&nbsp;ms on a typical{' '}
        <a
          href="https://shopify.dev/docs/storefronts/themes/architecture"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dawn
        </a>
        -based theme.
      </p>

      <h2 id="liquid-render">4. Liquid render time</h2>

      <p>
        The often-missed one. If your collection or product page is slow even on
        a fast connection, your Liquid is doing too much work per request.
        Common culprits:
      </p>

      <ul>
        <li>
          Nested <code>for</code> loops over <code>all_products</code>
        </li>
        <li>Unbounded metafield iteration</li>
        <li>Custom snippets that re-render the same data on every section</li>
      </ul>

      <p>
        Use the{' '}
        <a
          href="https://shopify.dev/docs/storefronts/themes/tools/theme-inspector"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shopify Theme Inspector
        </a>{' '}
        to find slow blocks. Cache what you can in section data, and look hard
        at any snippet that touches <code>all_products</code> or queries
        metafields in a loop.
      </p>

      <h2 id="fonts">5. Fonts</h2>

      <p>Self-host critical fonts. Three rules:</p>

      <ul>
        <li>
          Use{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>font-display: swap</code>
          </a>{' '}
          so text renders immediately
        </li>
        <li>Subset to the characters you actually use</li>
        <li>
          Preload only the one or two weights used above the fold &mdash;
          preloading every weight hurts more than it helps
        </li>
      </ul>

      <p>
        This is the boring last 10% that takes you from &ldquo;fast
        enough&rdquo; to &ldquo;fast.&rdquo;
      </p>

      <h2 id="what-not-to-do">What I don&rsquo;t recommend</h2>

      <p>
        The dozens of &ldquo;speed optimization&rdquo; apps in the Shopify App
        Store. Most of them just add another script to the page they claim to
        make faster. <strong>The fix is almost always removing things, not
        adding things.</strong>
      </p>

      <p>
        For real proof, see the{' '}
        <Link href="/case-studies">case studies</Link> &mdash; the Shopify
        projects there all went through this same triage order.
      </p>

      <div className="articleCtaCard" role="complementary">
        <h3>Stuck on a slow Shopify store?</h3>
        <p>
          If you&rsquo;ve worked through this list and your LCP still
          won&rsquo;t budge, book a free 15-minute call and I&rsquo;ll take a
          look at your storefront.
        </p>
        <Link className="btn btnPrimary" href="/book/development-consultation">
          Book a free Shopify speed call
        </Link>
      </div>
    </>
  );
}
