import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__title mono">K.</p>
          <p className="footer__note">Frontend / Full-stack Developer (学習中)</p>
        </div>
        <a
          href="https://github.com/spring46-stack"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub ↗
        </a>
      </div>
      <p className="footer__copyright mono">© {new Date().getFullYear()} K. Built with React & deployed via GitHub Actions.</p>
    </footer>
  );
}
