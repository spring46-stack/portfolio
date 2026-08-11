import "./Header.css";

const NAV = [
  { href: "#projects", label: "制作物" },
  { href: "#skills", label: "スキル" },
  { href: "#roadmap", label: "キャリア" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo mono">
          K<span className="header__logo-dot">.</span>
        </a>
        <nav className="header__nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="header__nav-link mono">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/spring46-stack"
          target="_blank"
          rel="noreferrer"
          className="btn header__cta"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
