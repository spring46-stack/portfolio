import { useReveal } from "../hooks/useReveal";
import "./ProjectCard.css";

export default function ProjectCard({ project, onOpen }) {
  const ref = useReveal();

  return (
    <article ref={ref} className="reveal project-card">
      <div className="project-card__head">
        <span className="project-card__no mono">{project.no}</span>
        <span className="project-card__period mono">{project.period}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__subtitle mono">{project.subtitle}</p>

      <p className="project-card__summary">{project.summary}</p>

      <ul className="project-card__stack">
        {project.stack.map((s) => (
          <li key={s} className="tag">
            {s}
          </li>
        ))}
      </ul>

      <div className="project-card__actions">
        <button type="button" className="btn" onClick={() => onOpen(project)}>
          プロセスと画面を見る
        </button>
        <a href={project.repo} target="_blank" rel="noreferrer" className="project-card__repo mono">
          Repo ↗
        </a>
      </div>
    </article>
  );
}
