"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/lib/types";

type AdminDashboardProps = {
  initialBlogs: BlogPost[];
};

const CATEGORIES = [
  "Mental Health",
  "Anxiety",
  "Relationships",
  "Mindfulness",
  "Self Growth",
] as const;

export default function AdminDashboard({ initialBlogs }: AdminDashboardProps) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [title, setTitle] = useState("");
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("Mental Health");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function refreshBlogs() {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data.blogs || []);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set("title", title);
      formData.set("category", category);
      formData.set("excerpt", excerpt);
      formData.set("content", content);
      formData.set("author", author);
      if (image) formData.set("image", image);

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.error || "Failed to upload blog");
        return;
      }

      setTitle("");
      setExcerpt("");
      setContent("");
      setAuthor("Admin");
      setCategory("Mental Health");
      setImage(null);
      setSuccess(`Published: ${data.blog.title}`);
      await refreshBlogs();
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this blog post?")) return;
    setDeletingId(id);
    setError("");

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Failed to delete blog");
        return;
      }
      await refreshBlogs();
      router.refresh();
    } catch {
      setError("Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div>
          <h1 className="admin-topbar__title">Admin Panel</h1>
          <p className="admin-topbar__subtitle">Upload and manage blog posts</p>
        </div>
        <div className="admin-topbar__actions">
          <a href="/" className="admin-link" target="_blank" rel="noreferrer">
            View Site
          </a>
          <button type="button" className="admin-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="admin-grid">
        <section className="admin-card">
          <h2 className="admin-card__title">Upload New Blog</h2>
          <form className="admin-form" onSubmit={handleSubmit}>
            <label className="admin-form__label" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="admin-form__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Blog title"
            />

            <label className="admin-form__label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="admin-form__input"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as (typeof CATEGORIES)[number])
              }
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <label className="admin-form__label" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              className="admin-form__input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Admin"
            />

            <label className="admin-form__label" htmlFor="excerpt">
              Short Excerpt
            </label>
            <textarea
              id="excerpt"
              className="admin-form__textarea"
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              placeholder="One or two lines shown on homepage"
            />

            <label className="admin-form__label" htmlFor="content">
              Blog Content
            </label>
            <textarea
              id="content"
              className="admin-form__textarea admin-form__textarea--tall"
              rows={14}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder={"Write your blog here.\n\nUse ## Heading for sections.\n\nSeparate paragraphs with a blank line."}
            />

            <label className="admin-form__label" htmlFor="image">
              Featured Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="admin-form__file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              required
            />
            {image && (
              <p className="admin-form__hint">Selected: {image.name}</p>
            )}

            {error && <p className="admin-form__error">{error}</p>}
            {success && <p className="admin-form__success">{success}</p>}

            <button type="submit" className="admin-form__btn" disabled={loading}>
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </section>

        <section className="admin-card">
          <h2 className="admin-card__title">Published Blogs ({blogs.length})</h2>
          {blogs.length === 0 ? (
            <p className="admin-empty">No blogs yet. Upload your first post.</p>
          ) : (
            <ul className="admin-blog-list">
              {blogs.map((blog) => (
                <li key={blog.id} className="admin-blog-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image}
                    alt=""
                    className="admin-blog-item__thumb"
                  />
                  <div className="admin-blog-item__body">
                    <p className="admin-blog-item__category">{blog.category}</p>
                    <a
                      href={`/blog/${blog.slug}`}
                      className="admin-blog-item__title"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog.title}
                    </a>
                    <p className="admin-blog-item__meta">
                      {new Date(blog.createdAt).toLocaleDateString()} ·{" "}
                      {blog.readTime}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="admin-blog-item__delete"
                    onClick={() => handleDelete(blog.id)}
                    disabled={deletingId === blog.id}
                  >
                    {deletingId === blog.id ? "..." : "Delete"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
