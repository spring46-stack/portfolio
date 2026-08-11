import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">01 — PROJECTS</span>
          <h2 className="section-title">制作物</h2>
          <span className="section-rule" />
        </div>
        <p className="section-lead">
          シンプルなCRUDアプリから、別フレームワーク、そしてDocker・CI/CDを使ったフルスタック構成まで、
          実際に取り組んだ順に並べています。
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
