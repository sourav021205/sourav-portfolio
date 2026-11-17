
export default function Contact() {
  // Add your actual contact details here
  const email = "souravkadan@gmail.com";
  const linkedin = "https://www.linkedin.com/in/sourav-k-414577353/";

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-box">
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>Let's Connect</h2>

          <p className="contact-description">
            Have a question, an opportunity, or a project
            you'd like to discuss? Feel free to reach out.
            I'd love to connect with you.
          </p>

          <div className="contact-links">
            {email && (
              <a
                href={`mailto:${email}`}
                className="contact-btn primary"
              >
                ✉ Email Me
              </a>
            )}

            <a
              href="https://github.com/sourav021205"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn secondary"
            >
              GitHub ↗
            </a>

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn secondary"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
