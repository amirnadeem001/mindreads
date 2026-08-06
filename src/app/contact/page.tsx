"use client";

import { FormEvent, useState } from "react";
import StaticPageShell from "@/components/StaticPageShell";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <StaticPageShell>
      <h1 className="static-page__title">Contact</h1>
      <p className="static-page__updated">
        We usually reply within 1–2 business days.
      </p>

      <div className="static-page__body">
        <p>
          Questions about psychology content, feedback, or partnership
          inquiries? Send us a message using the form below, or reach us
          directly at{" "}
          <a href="mailto:hello@MindReads.com">hello@MindReads.com</a>.
        </p>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-form__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="contact-form__input"
              placeholder="Your name"
            />

            <label className="contact-form__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="contact-form__input"
              placeholder="you@example.com"
            />

            <label className="contact-form__label" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="contact-form__input"
              placeholder="How can we help?"
            />

            <label className="contact-form__label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="contact-form__textarea"
              placeholder="Write your message..."
            />

            <button type="submit" className="contact-form__btn">
              Send Message
            </button>

            {submitted && (
              <p className="contact-form__success">
                Thanks! Your message has been received.
              </p>
            )}
          </form>

          <aside className="contact-info">
            <h2>Contact Details</h2>
            <p>
              <strong>Email:</strong>
              <br />
              hello@MindReads.com
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              MindReads Media
              <br />
              123 Content Avenue
              <br />
              New York, NY 10001
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Monday – Friday, 9:00 AM – 6:00 PM EST
            </p>
          </aside>
        </div>
      </div>
    </StaticPageShell>
  );
}
