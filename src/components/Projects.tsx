
import { useRef, useState } from "react";
import { projects } from "../data/projects";

type Preview = {
  image: string;
  title: string;
};

export default function Projects() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [preview, setPreview] = useState<Preview | null>(
    null
  );

  const openPreview = (image: string, title: string) => {
    setPreview({ image, title });
    dialogRef.current?.showModal();
  };

  const closePreview = () => {
    dialogRef.current?.close();
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-image">
                {project.image ? (
                  <button
                    type="button"
                    className="project-image-button"
                    onClick={() =>
                      openPreview(
                        project.image,
                        project.title
                      )
                    }
                    aria-label={`Enlarge ${project.title} screenshot`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                    <span className="image-zoom-icon">
                      ⤢ View Image
                    </span>
                  </button>
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

      {/* Screenshot popup */}
      <dialog
        ref={dialogRef}
        className="project-lightbox"
        aria-label="Project screenshot preview"
        onClose={() => setPreview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={closePreview}
          aria-label="Close screenshot"
        >
          ×
        </button>

        {preview && (
          <>
            <img
              src={preview.image}
              alt={`${preview.title} enlarged screenshot`}
            />
            <p className="lightbox-title">
              {preview.title}
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
