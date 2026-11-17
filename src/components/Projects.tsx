
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>

          <div className="project-image">
          {project.image ? (
          <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
            ) : (
              <div className="project-placeholder">
                <span>FEATURED PROJECT</span>
                <strong>{project.title}</strong>
              </div>
            )}
          </div>


              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
