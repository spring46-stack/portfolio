import { roadmap } from "../data/roadmap";
import { useReveal } from "../hooks/useReveal";
import "./Roadmap.css";

export default function Roadmap() {
  const ref = useReveal();

  return (
    <section id="roadmap" className="section roadmap">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">03 — ROADMAP</span>
          <h2 className="section-title">キャリアビジョン</h2>
          <span className="section-rule" />
        </div>
        <p className="section-lead">
          今の学習は、この先のキャリアの土台づくりです。1年後から10年後まで、段階的に目指す姿を整理しています。
        </p>

        <ol ref={ref} className="reveal roadmap__timeline">
          {roadmap.map((r) => (
            <li key={r.year} className="roadmap__item">
              <div className="roadmap__marker">
                <span className="roadmap__year mono">{r.year}</span>
              </div>
              <ul className="roadmap__list">
                {r.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
