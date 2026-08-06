import type { Metadata } from "next";
import { Montserrat, Open_Sans, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MindReads",
  description:
    "Psychology articles on mental health, anxiety, relationships, mindfulness, and self growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${lora.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
