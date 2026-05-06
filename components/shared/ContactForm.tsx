"use client";

import { FormEvent, useState } from "react";

type Status = {
    type: "idle" | "success" | "error";
    message: string;
};

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<Status>({
        type: "idle",
        message: "",
    });

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "idle", message: "" });

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            website: formData.get("website"),
            service: formData.get("service"),
            budget: formData.get("budget"),
            message: formData.get("message"),
            company: formData.get("company"), // honeypot
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            setStatus({
                type: "success",
                message: data.message || "Message sent successfully.",
            });

            form.reset();
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGrid">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required />
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div className="field">
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                    />
                </div>

                <div className="field">
                    <label htmlFor="service">Service needed</label>
                    <select id="service" name="service">
                        <option value="">Select one</option>
                        <option value="Shopify Development">Shopify Development</option>
                        <option value="WordPress Development">WordPress Development</option>
                        <option value="Speed Optimization">Speed Optimization</option>
                        <option value="Tutoring">Tutoring</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="budget">Budget</label>
                    <input id="budget" name="budget" type="text" placeholder="Optional" />
                </div>
            </div>

            <div
                className="field"
                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                aria-hidden="true"
            >
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="Tell me what you need help with."
                />
            </div>

            <button className="btn btnPrimary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.type !== "idle" && (
                <p
                    className={status.type === "success" ? "formSuccess" : "formError"}
                    style={{ marginTop: "14px" }}
                >
                    {status.message}
                </p>
            )}
        </form>
    );
}