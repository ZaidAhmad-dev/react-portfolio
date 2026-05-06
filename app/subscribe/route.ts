import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RESOURCE_MAP: Record<
  string,
  {
    label: string;
    path: string;
  }
> = {
  'shopify-speed-checklist': {
    label: 'Shopify Speed Checklist',
    path: '/lead-magnets/zaid-ahmad-shopify-speed-checklist.pdf',
  },
  'react-debugging-cheatsheet': {
    label: 'React Debugging Cheatsheet',
    path: '/lead-magnets/zaid-ahmad-react-debugging-cheatsheet.pdf',
  },
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const email = String(formData.get('email') ?? '').trim();
    const resource = String(formData.get('resource') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim(); // honeypot

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

    if (company) {
      return NextResponse.redirect(new URL('/resources', origin), {
        status: 303,
      });
    }

    const selectedResource = RESOURCE_MAP[resource];

    if (!email || !selectedResource) {
      return NextResponse.redirect(
        new URL('/resources?subscribed=0', origin),
        { status: 303 }
      );
    }

    const resourceUrl = `${origin}${selectedResource.path}`;

    // 1) Notify you
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      subject: `New lead magnet signup: ${selectedResource.label}`,
      html: `
        <h2>New lead magnet signup</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Resource:</strong> ${escapeHtml(selectedResource.label)}</p>
      `,
      text: `New lead magnet signup

Email: ${email}
Resource: ${selectedResource.label}`,
    });

    // 2) Email the visitor the file link
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [email],
      subject: `Your ${selectedResource.label}`,
      html: `
        <h2>Here is your free resource</h2>
        <p>Thanks for requesting <strong>${escapeHtml(
        selectedResource.label
      )}</strong>.</p>
        <p>
          Download it here:
          <a href="${resourceUrl}">${resourceUrl}</a>
        </p>
        <p>— Zaid Ahmad</p>
      `,
      text: `Here is your free resource

${selectedResource.label}
${resourceUrl}

— Zaid Ahmad`,
    });

    return NextResponse.redirect(
      new URL(`/resources?subscribed=1&email=${encodeURIComponent(email)}`, origin),
      { status: 303 }
    );
  } catch (error) {
    console.error('Subscribe route error:', error);

    const origin = new URL(request.url).origin;
    return NextResponse.redirect(
      new URL('/resources?subscribed=0', origin),
      { status: 303 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}