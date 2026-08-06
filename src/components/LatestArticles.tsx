import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { categoryClass, formatBlogDate } from "@/lib/blog-utils";

type LatestArticlesProps = {
  articles: BlogPost[];
};

export default function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) {
    return (
      <div className="latest-articles">
        <h2 className="section-title">Latest Articles</h2>
        <p className="admin-empty">No articles published yet.</p>
      </div>
    );
  }

  return (
    <div className="latest-articles">
      <h2 className="section-title">Latest Articles</h2>
      <ul className="latest-articles__list">
        {articles.map((article) => (
          <li key={article.id} className="latest-articles__item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt=""
              className="latest-articles__thumb"
            />
            <div className="latest-articles__content">
              <span className={`tag ${categoryClass(article.category)}`}>
                {article.category.toUpperCase()}
              </span>
              <Link
                href={`/blog/${article.slug}`}
                className="latest-articles__title"
              >
                {article.title}
              </Link>
              <p className="latest-articles__meta">
                {formatBlogDate(article.createdAt)} · by {article.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
