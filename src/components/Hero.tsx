interface HeroStat {
  value: string;
  label: string;
}

const stats: HeroStat[] = [
  { value: "2023", label: "Em produção desde" },
  { value: "100%", label: "Gratuito para igrejas" },
  { value: "∞", label: "Dedicação à obra" },
];

export function Hero(): React.JSX.Element {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 7rem 2rem 5rem; position: relative; overflow: hidden;
          width: 100%; box-sizing: border-box;
        }
        .hero-bg-circle { position: absolute; border-radius: 50%; pointer-events: none; }
        .hero-bg-circle--1 {
          width: 700px; height: 700px; top: -200px; right: -200px;
          background: radial-gradient(circle, rgba(123,78,165,0.07), transparent 65%);
        }
        .hero-bg-circle--2 {
          width: 500px; height: 500px; bottom: -150px; left: -150px;
          background: radial-gradient(circle, rgba(201,168,76,0.07), transparent 65%);
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 100%);
        }
        .hero-inner {
          position: relative; z-index: 1;
          max-width: 760px; width: 100%; margin: 0 auto; text-align: center;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--gold-light); border: 1px solid rgba(201,168,76,0.3);
          color: #8a6820; padding: 0.35rem 1rem; border-radius: 2rem;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; margin-bottom: 1.75rem;
          animation: fadeIn 0.6s ease both;
        }
        .hero-badge::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); display: inline-block;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 7vw, 5rem); font-weight: 900;
          line-height: 1.08; letter-spacing: -0.03em; color: var(--text);
          margin-bottom: 1.5rem;
          animation: fadeUp2 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hero-title em { font-style: italic; color: var(--purple); }
        .hero-subtitle {
          font-size: 1.05rem; font-weight: 300; color: var(--text-muted);
          line-height: 1.75; max-width: 520px; margin: 0 auto 2.5rem;
          animation: fadeUp2 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hero-actions {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; flex-wrap: wrap;
          animation: fadeUp2 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        .btn-primary {
          background: var(--purple); color: white;
          padding: 0.875rem 2rem; border-radius: 3rem;
          font-weight: 600; font-size: 0.9rem;
          box-shadow: 0 4px 20px rgba(123,78,165,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-primary:hover {
          background: #6a3d93; transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(123,78,165,0.4);
        }
        .btn-outline {
          border: 1.5px solid var(--border); color: var(--text-muted);
          padding: 0.875rem 2rem; border-radius: 3rem;
          font-weight: 500; font-size: 0.9rem;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-outline:hover {
          border-color: var(--purple); color: var(--purple);
          background: var(--purple-light);
        }
        .hero-stats {
          display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;
          margin-top: 4rem; padding-top: 3rem; border-top: 1px solid var(--border);
          animation: fadeUp2 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hero-stat-item { text-align: center; }
        .hero-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 700; color: var(--purple); display: block;
        }
        .hero-stat-label { font-size: 0.78rem; color: var(--text-muted); font-weight: 400; }
        .hero-scroll-hint {
          margin-top: 4rem; display: flex; flex-direction: column;
          align-items: center; gap: 0.5rem;
          animation: fadeIn 1s 0.8s ease both;
        }
        .hero-scroll-hint span {
          font-size: 0.72rem; color: var(--text-muted);
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .hero-scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--purple), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp2 {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="hero-bg-circle hero-bg-circle--1" />
        <div className="hero-bg-circle hero-bg-circle--2" />
        <div className="hero-grid-bg" />
        <div className="hero-inner">
          <div className="hero-badge">Sistema de Gestão da EBD</div>
          <h1 className="hero-title">
            Gestão moderna para a<br />
            <em>Escola Bíblica Dominical</em>
          </h1>
          <p className="hero-subtitle">
            O EBDControl centraliza chamadas, cadastros, relatórios e análises
            em uma plataforma simples, segura e eficiente — pensada para
            igrejas que querem servir com excelência.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn-primary">Conhecer o sistema ↓</a>
            <a href="#contato" className="btn-outline">Falar conosco</a>
          </div>
          <div className="hero-stats">
            {stats.map((s: HeroStat) => (
              <div className="hero-stat-item" key={s.label}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-scroll-hint">
            <span>Explore</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </section>
    </>
  );
}