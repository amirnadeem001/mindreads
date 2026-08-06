type RelatedItem = {
  title: string;
  date: string;
  image: string;
  href?: string;
};

const defaultRelated: RelatedItem[] = [
  {
    title: "How to Calm Anxiety in Under 10 Minutes",
    date: "May 18, 2024",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=240&fit=crop",
    href: "/blog/how-to-calm-anxiety-in-under-10-minutes",
  },
  {
    title: "A Beginner’s Guide to Mindfulness Meditation",
    date: "May 15, 2024",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=240&fit=crop",
    href: "/blog/beginners-guide-to-mindfulness-meditation",
  },
  {
    title: "How to Build Self-Confidence Step by Step",
    date: "May 12, 2024",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=240&fit=crop",
    href: "/blog/how-to-build-self-confidence-step-by-step",
  },
];

type YouMayAlsoLikeProps = {
  items?: RelatedItem[];
};

export default function YouMayAlsoLike({
  items = defaultRelated,
}: YouMayAlsoLikeProps) {
  return (
    <section className="also-like">
      <h2 className="section-title">You May Also Like</h2>
      <div className="also-like__grid">
        {items.map((item) => (
          <article key={item.title} className="also-like__card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" className="also-like__image" />
            <h3 className="also-like__title">
              <a href={item.href || "#"}>{item.title}</a>
            </h3>
            <p className="also-like__date">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
