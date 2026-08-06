import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "About Us | MindReads",
  description:
    "Learn more about MindReads — psychology articles on mental health, anxiety, relationships, and personal growth.",
};

export default function AboutPage() {
  return (
    <StaticPageShell>
      <h1 className="static-page__title">About Us</h1>
      <p className="static-page__updated">MindReads Psychology Team</p>

      <div className="static-page__body">
        <p>
          MindReads is a psychology-focused digital magazine dedicated to
          mental health, emotional wellbeing, relationships, mindfulness, and
          personal growth. Our goal is to make psychology practical, clear, and
          useful for everyday life.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe better mental health starts with better understanding. Our
          mission is to share evidence-informed insights and simple tools that
          help readers manage stress, build healthier habits, and grow with
          confidence.
        </p>

        <h2>What We Cover</h2>
        <p>
          Our writers cover topics across mental health, anxiety, relationships,
          mindfulness, and self growth. Whether you want calming techniques,
          communication tips, or habits that support emotional balance,
          MindReads is built to support your journey.
        </p>

        <h2>Our Team</h2>
        <p>
          MindReads is run by an editorial team passionate about psychology,
          clear writing, and compassionate content. We work every day to make
          complex ideas easier to understand and apply.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Have a story idea, partnership inquiry, or feedback? Visit our{" "}
          <a href="/contact">Contact</a> page — we would love to hear from you.
        </p>
      </div>
    </StaticPageShell>
  );
}
