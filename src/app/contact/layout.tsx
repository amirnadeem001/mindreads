import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MindReads",
  description: "Get in touch with the MindReads team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
