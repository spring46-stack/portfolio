import { useEffect } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} の詳細`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close mono" onClick={onClose} aria-label="閉じる">
          閉じる ✕
        </button>

        <p className="modal__no mono">{project.no}</p>
        <h3 className="modal__title">{project.title}</h3>
        <p className="modal__subtitle mono">{project.subtitle}</p>

        {project.unverified && (
          <p className="modal__notice">
            ⚠ 修正中
          </p>
        )}

        <section className="modal__section">
          <h4 className="modal__section-title mono">PROCESS — 開発の流れ</h4>
          <ol className="modal__process">
            {project.process.map((p) => (
              <li key={p.step}>
                <span className="modal__process-step">{p.step}</span>
                <p>{p.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="modal__section">
          <h4 className="modal__section-title mono">SCREENS — 画面図(プレースホルダー)</h4>
          <div className="modal__screens">
            {project.screens.map((s) => (
              <figure key={s.label} className="modal__screen">
                <img src={s.src} alt={s.label} loading="lazy" />
                <figcaption>{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <a href={project.repo} target="_blank" rel="noreferrer" className="btn primary modal__repo-link">
          GitHubでコードを見る ↗
        </a>
      </div>
    </div>
  );
}
