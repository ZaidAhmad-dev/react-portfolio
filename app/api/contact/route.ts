import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = String(body.name ?? "").trim();
        const email = String(body.email ?? "").trim();
        const website = String(body.website ?? "").trim();
        const service = String(body.service ?? "").trim();
        const budget = String(body.budget ?? "").trim();
        const message = String(body.message ?? "").trim();

        // Honeypot field for simple spam bots
        const company = String(body.company ?? "").trim();
        if (company) {
            return NextResponse.json({ ok: true });
        }

        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, message: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            return NextResponse.json(
                { ok: false, message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const subject = `New contact form inquiry from ${name}`;

        const html = `
      <h2>New contact form inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "Not provided")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

        const text = `
New contact form inquiry

Name: ${name}
Email: ${email}
Website: ${website || "Not provided"}
Service: ${service || "Not provided"}
Budget: ${budget || "Not provided"}

Message:
${message}
    `;

        const { error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: [process.env.CONTACT_TO_EMAIL!],
            subject,
            html,
            text,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { ok: false, message: "Something went wrong while sending your message." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            ok: true,
            message: "Thanks — your message has been sent. I'll get back to you as soon as I can.",
        });
    } catch (error) {
        console.error("Contact route error:", error);

        return NextResponse.json(
            { ok: false, message: "Unexpected server error." },
            { status: 500 }
        );
    }
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}