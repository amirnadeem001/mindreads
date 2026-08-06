import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { getAllBlogs } from "@/lib/blogs";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const blogs = await getAllBlogs();
  return <AdminDashboard initialBlogs={blogs} />;
}
