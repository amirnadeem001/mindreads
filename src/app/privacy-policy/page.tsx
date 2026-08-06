import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | MindReads",
  description: "Read how MindReads collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPageShell>
      <h1 className="static-page__title">Privacy Policy</h1>
      <p className="static-page__updated">Last updated: May 20, 2024</p>

      <div className="static-page__body">
        <p>
          This Privacy Policy explains how MindReads (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares
          information when you visit MindReads.com and related pages.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Information you provide:</strong> such as your name, email
            address, and message content when you contact us or subscribe to our
            newsletter.
          </li>
          <li>
            <strong>Automatic data:</strong> including IP address, browser type,
            device information, pages visited, and referring URLs.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> used to remember
            preferences, measure traffic, and support advertising features.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Operate, maintain, and improve our website</li>
          <li>Respond to inquiries and send newsletters you request</li>
          <li>Analyze site performance and content engagement</li>
          <li>Display relevant advertisements through partners</li>
          <li>Protect against fraud, abuse, and security risks</li>
        </ul>

        <h2>3. Cookies and Advertising</h2>
        <p>
          We and our advertising partners may use cookies and similar
          technologies to serve ads and measure their effectiveness. For more
          details, please review our{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share information
          with service providers who help us run the site (hosting, analytics,
          email delivery, and advertising), or when required by law.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain personal information only as long as needed for the purposes
          described in this policy, unless a longer retention period is required
          or permitted by law.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict the use of your personal information. To make a
          request, contact us at hello@MindReads.com.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          MindReads is not directed to children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be posted on this page with a revised &quot;Last
          updated&quot; date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:hello@MindReads.com">hello@MindReads.com</a> or
          through our <a href="/contact">Contact</a> page.
        </p>
      </div>
    </StaticPageShell>
  );
}
