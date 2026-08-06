import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | MindReads",
  description: "Learn how MindReads uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <StaticPageShell>
      <h1 className="static-page__title">Cookie Policy</h1>
      <p className="static-page__updated">Last updated: May 20, 2024</p>

      <div className="static-page__body">
        <p>
          This Cookie Policy explains how MindReads uses cookies and similar
          technologies when you visit our website. By continuing to browse the
          site, you agree to our use of cookies as described here.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help sites remember your preferences, understand how
          visitors use the site, and support advertising and analytics features.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential cookies:</strong> required for basic site
            functionality and security.
          </li>
          <li>
            <strong>Analytics cookies:</strong> help us understand traffic,
            popular pages, and overall performance.
          </li>
          <li>
            <strong>Advertising cookies:</strong> used by us and our partners to
            deliver and measure ads across the site.
          </li>
          <li>
            <strong>Preference cookies:</strong> remember settings such as
            language or previously viewed content where applicable.
          </li>
        </ul>

        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services we use for analytics,
          advertising, and social media features. These partners may collect
          information about your activity on MindReads and other sites according
          to their own policies.
        </p>

        <h2>4. How to Manage Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Most
          browsers allow you to refuse cookies or alert you when a cookie is
          being set. Please note that disabling cookies may affect some features
          of the website.
        </p>

        <h2>5. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, law, or our practices. Any updates will be posted on
          this page.
        </p>

        <h2>6. More Information</h2>
        <p>
          For details on how we handle personal data, see our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. If you have questions
          about cookies, contact us at{" "}
          <a href="mailto:hello@MindReads.com">hello@MindReads.com</a>.
        </p>
      </div>
    </StaticPageShell>
  );
}
