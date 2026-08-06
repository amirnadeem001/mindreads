import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin Login | MindReads",
};

export default async function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return children;
}
