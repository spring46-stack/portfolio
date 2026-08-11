import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow mono">PORTFOLIO / 2026</p>
          <h1 className="hero__title">
            積み上げてきたのは、
            <br />
            コードだけじゃない。
          </h1>
          <p className="hero__lead">
            はじめまして、<strong>K</strong>です。フロントエンド・フルスタック開発を独学で学んでいます。
            タスク管理アプリから始め、検索機能、別フレームワーク(Vue.js)、そしてDocker/CI・CDを使った
            フルスタック構成まで、少しずつ難易度を上げながら4つのアプリケーションを作ってきました。
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn primary">
              制作物を見る →
            </a>
            <a href="#roadmap" className="btn">
              キャリアビジョン
            </a>
          </div>
          <ul className="hero__meta">
            <li className="mono">USE — PHP / React / Vue.js / MySQL</li>
            <li className="mono">BUILD — Docker / GitHub Actions</li>
          </ul>
        </div>

        <div className="hero__figure" aria-hidden="true">
          {/* 署名要素: 4つのプロジェクトを「立面図(高さが伸びていく建物)」として
              表現。難易度・扱う技術の幅が段階的に増していったことを、
              実際のプロジェクト順(01→04)そのままの高さで示している。 */}
          <svg viewBox="0 0 360 320" className="hero__elevation">
            <line x1="20" y1="280" x2="340" y2="280" stroke="var(--line-strong)" strokeDasharray="4 5" />
            {[
              { x: 40, h: 70, label: "01" },
              { x: 130, h: 120, label: "02" },
              { x: 220, h: 170, label: "03" },
              { x: 300, h: 230, label: "04" },
            ].map((b) => (
              <g key={b.label}>
                <rect
                  x={b.x}
                  y={280 - b.h}
                  width="46"
                  height={b.h}
                  fill="var(--surface-raised)"
                  stroke="var(--line-strong)"
                />
                <line
                  x1={b.x}
                  y1={280 - b.h + 14}
                  x2={b.x + 46}
                  y2={280 - b.h + 14}
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <text x={b.x + 23} y={300} textAnchor="middle" className="hero__elevation-label">
                  {b.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
