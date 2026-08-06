import Link from "next/link";
import { BlogPost } from "@/lib/types";

type PopularPostsProps = {
  posts: BlogPost[];
  limit?: number;
};

export default function PopularPosts({ posts, limit = 3 }: PopularPostsProps) {
  const list = posts.slice(0, limit);

  return (
    <div className="popular-posts">
      <h3 className="widget-title">Popular Posts</h3>
      {list.length === 0 ? (
        <p className="admin-empty">No posts yet.</p>
      ) : (
        <ul className="popular-posts__list">
          {list.map((post) => (
            <li key={post.id} className="popular-posts__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt="" className="popular-posts__thumb" />
              <Link
                href={`/blog/${post.slug}`}
                className="popular-posts__title"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
