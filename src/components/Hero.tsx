import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { categoryClass } from "@/lib/blog-utils";

type HeroProps = {
  post: BlogPost | null;
};

export default function Hero({ post }: HeroProps) {
  if (!post) {
    return (
      <article className="hero hero--empty">
        <div className="hero__overlay">
          <h1 className="hero__title">No posts yet</h1>
          <p className="hero__excerpt">
            Upload your first blog from the admin panel.
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="hero">
      <Link href={`/blog/${post.slug}`} className="hero__link">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="hero__image"
        />
        <div className="hero__overlay">
          <span className={`tag ${categoryClass(post.category)} hero__tag`}>
            {post.category.toUpperCase()}
          </span>
          <h1 className="hero__title">{post.title}</h1>
          <p className="hero__excerpt">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
