
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-badge" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
