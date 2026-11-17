
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sourav<span>.</span>
            </a>

            <p>
              Building clean, responsive, and
              user-friendly web experiences.
            </p>
          </div>

          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/sourav021205"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Sourav. All rights reserved.</p>

          <p>Designed & Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
