import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import StayConnected from "@/components/StayConnected";
import PopularPosts from "@/components/PopularPosts";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import SocialBar from "@/components/SocialBar";
import BlogContent from "@/components/BlogContent";
import {
  getAllBlogs,
  getBlogBySlug,
} from "@/lib/blogs";
import { categoryClass, formatBlogDate } from "@/lib/blog-utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Post Not Found | MindReads" };
  return {
    title: `${blog.title} | MindReads`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const allBlogs = await getAllBlogs();
  const related = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3)
    .map((item) => ({
      title: item.title,
      date: formatBlogDate(item.createdAt),
      image: item.image,
      href: `/blog/${item.slug}`,
    }));
  const popular = allBlogs.slice(0, 5);

  return (
    <div className="page">
      <Header />

      <main className="page-main">
        <div className="top-banner">
          <AdSlot
            label="Banner 728x90"
            id="728x90_1"
            width={728}
            height={90}
            color="#b8d4f0"
          />
        </div>

        <div className="blog-grid">
          <article className="blog-article">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <span>{blog.category}</span>
              <span> &gt; </span>
              <span>{blog.title}</span>
            </nav>

            <span className={`tag ${categoryClass(blog.category)}`}>
              {blog.category.toUpperCase()}
            </span>

            <h1 className="blog-article__title">{blog.title}</h1>

            <div className="blog-article__meta">
              <div className="blog-article__author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
                  alt=""
                  className="blog-article__avatar"
                />
                <span>
                  By {blog.author} · {formatBlogDate(blog.createdAt)} ·{" "}
                  {blog.readTime}
                </span>
              </div>
              <div className="blog-article__share">
                <span>Share:</span>
                <a href="#" className="share-icon share-icon--fb" aria-label="Facebook">
                  f
                </a>
                <a href="#" className="share-icon share-icon--tw" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" className="share-icon share-icon--li" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>

            <div className="blog-ad blog-ad--center">
              <AdSlot
                label="Banner 320x50"
                id="320x50_1"
                width={320}
                height={50}
                color="#f5c99a"
              />
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-article__featured"
            />

            <BlogContent content={blog.content} />

            <div className="blog-ad blog-ad--center">
              <AdSlot
                label="Banner 468x60"
                id="468x60_1"
                width={468}
                height={60}
                color="#b8d4f0"
              />
            </div>

            <div className="blog-ad blog-ad--center">
              <AdSlot
                label="Native Banner"
                id="NativeBanner_1"
                width={468}
                height={60}
                color="#c5e8c5"
              />
            </div>

            {related.length > 0 && <YouMayAlsoLike items={related} />}
          </article>

          <aside className="blog-sidebar">
            <AdSlot
              label="Smartlink"
              id="Smartlink_1"
              width={300}
              height={90}
              color="#d4c4e8"
            />

            <StayConnected />

            <PopularPosts posts={popular} limit={5} />

            <div className="blog-sidebar__skyscraper">
              <AdSlot
                label="Banner 160x600"
                id="160x600_1"
                width={160}
                height={600}
                color="#b8e4e8"
              />
            </div>

            <AdSlot
              label="Popunder"
              id="Popunder_1"
              width={300}
              height={100}
              color="#b8d4f0"
            />
          </aside>
        </div>

        <SocialBar />
      </main>

      <Footer />
    </div>
  );
}
