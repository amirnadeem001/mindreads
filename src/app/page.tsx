import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import StayConnected from "@/components/StayConnected";
import PopularPosts from "@/components/PopularPosts";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import SocialBar from "@/components/SocialBar";
import { getAllBlogs } from "@/lib/blogs";
import { formatBlogDate } from "@/lib/blog-utils";

export const dynamic = "force-dynamic";

export default async function Home() {
  const blogs = await getAllBlogs();
  const featured = blogs[0] || null;
  const latest = blogs.slice(1, 4);
  const popular = blogs.slice(0, 5);
  const related = blogs.slice(1, 4).map((item) => ({
    title: item.title,
    date: formatBlogDate(item.createdAt),
    image: item.image,
    href: `/blog/${item.slug}`,
  }));

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

        <div className="main-grid">
          <aside className="sidebar-left">
            <AdSlot
              label="Banner 160x600"
              id="160x600_1"
              width={160}
              height={600}
              color="#c5e8c5"
            />
          </aside>

          <div className="content-center">
            <AdSlot
              label="Banner 320x50"
              id="320x50_1"
              width={320}
              height={50}
              color="#f5c99a"
            />

            <Hero post={featured} />

            <div className="latest-row">
              <AdSlot
                label="Banner 160x300"
                id="160x300_1"
                width={160}
                height={300}
                color="#f0b0b0"
              />
              <LatestArticles articles={latest.length ? latest : blogs.slice(0, 3)} />
            </div>
          </div>

          <aside className="sidebar-right">
            <AdSlot
              label="Smartlink"
              id="Smartlink_1"
              width={300}
              height={90}
              color="#d4c4e8"
            />

            <StayConnected />

            <AdSlot
              label="Banner 300x250"
              id="300x250_1"
              width={300}
              height={250}
              color="#f5d89a"
            />

            <PopularPosts posts={popular} />

            <AdSlot
              label="Popunder"
              id="Popunder_1"
              width={300}
              height={100}
              color="#b8d4f0"
            />
          </aside>
        </div>

        <div className="mid-banners">
          <AdSlot
            label="Banner 468x60"
            id="468x60_1"
            width={468}
            height={60}
            color="#b8d4f0"
          />
          <AdSlot
            label="Native Banner"
            id="NativeBanner_1"
            width={468}
            height={60}
            color="#c5e8c5"
          />
        </div>

        <YouMayAlsoLike items={related} />

        <SocialBar />
      </main>

      <Footer />
    </div>
  );
}
