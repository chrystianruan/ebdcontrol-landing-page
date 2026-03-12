export function Footer(): React.JSX.Element {
  return (
    <>
      <style>{`
        .footer { border-top: 1px solid var(--border); background: var(--surface); padding: 2.5rem 2rem; }
        .footer-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif; font-size: 1.1rem;
          font-weight: 700; color: var(--purple);
          display: flex; align-items: center; gap: 0.4rem;
        }
        .footer-copy { font-size: 0.78rem; color: var(--text-muted); }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-links a { font-size: 0.8rem; color: var(--text-muted); transition: color 0.2s; }
        .footer-links a:hover { color: var(--purple); }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
             <img src="/img/logo_ebd_extend.png" alt="EBDControl" style={{ height: 40, display: "block" }} />
          </div>
          <div className="footer-copy">
            EBDControl © {new Date().getFullYear()}  — Feito com dedicação e excelência para a obra de Deus
          </div>
          <div className="footer-links">
            <a href="#hero">Início</a>
            <a href="#features">Funcionalidades</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}