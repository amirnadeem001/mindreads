import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
  { href: "/privacy-policy", label: "PRIVACY POLICY" },
  { href: "/terms", label: "TERMS & CONDITIONS" },
  { href: "/cookie-policy", label: "COOKIE POLICY" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          MINDREADS
        </Link>

        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button type="button" className="site-search" aria-label="Search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </header>
  );
}
