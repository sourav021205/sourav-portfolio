
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">
          FRONTEND DEVELOPER · BCA GRADUATE
        </p>

        <h1>
          Hi, I'm <span>Sourav.</span>
          <br />
          I build clean, useful
          <br />
          web experiences.
        </h1>

        <p className="hero-description">
          I'm passionate about creating responsive,
          interactive and user-friendly web applications
          using React, TypeScript and modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects →
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>

          <pre>
            <code>{`const developer = {
  name: "Sourav",
  role: "Frontend Developer",
  skills: ["React", "TypeScript"],
  passion: "Building great UI"
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
