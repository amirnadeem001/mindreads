import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions | MindReads",
  description: "Read the terms and conditions for using MindReads.",
};

export default function TermsPage() {
  return (
    <StaticPageShell>
      <h1 className="static-page__title">Terms &amp; Conditions</h1>
      <p className="static-page__updated">Last updated: May 20, 2024</p>

      <div className="static-page__body">
        <p>
          Welcome to MindReads. By accessing or using our website, you agree to
          these Terms &amp; Conditions. If you do not agree, please do not use
          the site.
        </p>

        <h2>1. Use of the Website</h2>
        <p>
          You may use MindReads for personal, non-commercial purposes. You agree
          not to misuse the site, attempt unauthorized access, interfere with
          site operations, or use our content in a way that violates applicable
          laws.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on MindReads — including articles, images, logos, graphics,
          and design — is owned by MindReads or its licensors and is protected by
          copyright and other intellectual property laws. You may not copy,
          reproduce, distribute, or create derivative works without prior written
          permission.
        </p>

        <h2>3. User Submissions</h2>
        <p>
          If you send us comments, feedback, or other materials, you grant
          MindReads a non-exclusive, royalty-free license to use that content for
          operating and improving the website. You are responsible for ensuring
          that anything you submit does not infringe the rights of others.
        </p>

        <h2>4. Third-Party Links and Ads</h2>
        <p>
          Our site may contain advertisements and links to third-party websites.
          We are not responsible for the content, privacy practices, or terms of
          those third parties. Your interactions with advertisers are solely
          between you and the advertiser.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          Content on MindReads is provided for general informational and
          entertainment purposes only. We make no warranties that the information
          is complete, accurate, or up to date. Use of the site is at your own
          risk.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, MindReads and its team shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of the website or reliance on
          any content.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions at any time. Continued use
          of the site after changes are posted means you accept the revised
          terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by applicable laws of the United States,
          without regard to conflict of law principles.
        </p>

        <h2>9. Contact</h2>
        <p>
          For questions about these Terms &amp; Conditions, contact us at{" "}
          <a href="mailto:hello@MindReads.com">hello@MindReads.com</a> or
          visit our <a href="/contact">Contact</a> page.
        </p>
      </div>
    </StaticPageShell>
  );
}
