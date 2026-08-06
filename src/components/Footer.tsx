"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h3 className="site-footer__heading">About Us</h3>
          <p className="site-footer__brand">MindReads</p>
          <p className="site-footer__text">
            MindReads shares practical psychology insights on mental health,
            anxiety, relationships, mindfulness, and personal growth.
          </p>
          <div className="site-footer__social">
            <a href="#" aria-label="Facebook" className="site-footer__social-icon">
              f
            </a>
            <a href="#" aria-label="Twitter" className="site-footer__social-icon">
              𝕏
            </a>
            <a href="#" aria-label="Instagram" className="site-footer__social-icon">
              IG
            </a>
            <a href="#" aria-label="YouTube" className="site-footer__social-icon">
              ▶
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Quick Links</h3>
          <ul className="site-footer__list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Legal</h3>
          <ul className="site-footer__list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Newsletter</h3>
          <p className="site-footer__text">
            Subscribe to get the latest updates...
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-form__input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-form__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="site-footer__copy">
        © 2024 MindReads. All Rights Reserved.
      </div>
    </footer>
  );
}
