
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      return savedTheme === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme still works if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo">
          Sourav<span>.</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          aria-pressed={theme === "dark"}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </header>
  );
}
