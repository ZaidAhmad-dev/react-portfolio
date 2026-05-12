'use client';

import { FormEvent, useEffect, useState } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import { resources } from '@/lib/site-data';

type ResourceFormProps = {
  defaultResource?: string;
  idPrefix?: string;
};

type SuccessState = {
  email: string;
  resourceLabel: string;
};

export default function ResourceForm({
  defaultResource,
  idPrefix = 'resource',
}: ResourceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SuccessState | null>(null);

  const emailInputId = `${idPrefix}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();
    const resourceSlug = String(formData.get('resource') ?? '').trim();

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      const matched = resources.find((item) => item.slug === resourceSlug);
      setSuccess({
        email,
        resourceLabel: data.resourceLabel || matched?.title || 'your resource',
      });
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form
        className="leadFormEnhanced"
        action="/subscribe"
        method="post"
        onSubmit={handleSubmit}
        noValidate={false}
      >
        <div className="resourceOptions">
          {resources.map((item, index) => (
            <label className="resourceOptionCard" key={item.slug}>
              <input
                type="radio"
                name="resource"
                value={item.slug}
                defaultChecked={
                  defaultResource ? item.slug === defaultResource : index === 0
                }
              />
              <div className="resourceOptionBody">
                <span className="resourceOptionEyebrow">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="leadFormRow">
          <label htmlFor={emailInputId} className="srOnly">
            Email address
          </label>
          <input
            id={emailInputId}
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            disabled={isSubmitting}
          />
          <button
            className="btn btnPrimary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send Me the Resource'}
          </button>
        </div>

        <input
          type="text"
          name="company"
          className="srOnly"
          tabIndex={-1}
          autoComplete="off"
        />

        {error ? (
          <p className="formError" role="alert" style={{ marginTop: '12px' }}>
            {error}
          </p>
        ) : null}
      </form>

      {success ? (
        <ResourceConfirmModal
          email={success.email}
          resourceLabel={success.resourceLabel}
          onClose={() => setSuccess(null)}
        />
      ) : null}
    </>
  );
}

type ModalProps = {
  email: string;
  resourceLabel: string;
  onClose: () => void;
};

function ResourceConfirmModal({ email, resourceLabel, onClose }: ModalProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="modalBackdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-confirm-title"
      aria-describedby="resource-confirm-body"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modalPanel">
        <button
          type="button"
          className="modalClose"
          aria-label="Close"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>

        <div className="modalIcon" aria-hidden="true">
          <FiCheckCircle size={56} />
        </div>

        <h2 id="resource-confirm-title">Check your inbox</h2>

        <p id="resource-confirm-body">
          I just emailed <strong>{resourceLabel}</strong> to{' '}
          <strong>{email}</strong>. Give it a minute, and check your spam folder
          if it doesn&rsquo;t show up.
        </p>

        <button className="btn btnPrimary" type="button" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
