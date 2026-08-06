import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

type StaticPageShellProps = {
  children: React.ReactNode;
};

export default function StaticPageShell({ children }: StaticPageShellProps) {
  return (
    <div className="page">
      <Header />
      <main className="page-main static-page">
        <div className="static-page__content">{children}</div>
        <SocialBar />
      </main>
      <Footer />
    </div>
  );
}
