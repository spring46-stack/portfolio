import { skills } from "../data/roadmap";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">02 — SKILLS</span>
          <h2 className="section-title">使用技術</h2>
          <span className="section-rule" />
        </div>
        <p className="section-lead">
          プロジェクトを重ねる中で、実際に手を動かして身につけた技術です。まだ学習中のものも含みます。
        </p>

        <ul ref={ref} className="reveal skills__grid">
          {skills.map((s) => (
            <li key={s.name} className="skills__item">
              <span className="skills__name">{s.name}</span>
              <span className="skills__note mono">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
