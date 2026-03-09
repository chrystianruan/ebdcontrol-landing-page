import { useState, useEffect } from "react";
import { NavLink } from "../types";

const links: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Funcionalidades", href: "#features" },
  { label: "História", href: "#historia" },
  { label: "Tutoriais", href: "#tutoriais" },
  { label: "Agradecimentos", href: "#agradecimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.3s ease; padding: 0 2rem;
        }
        .navbar.scrolled {
          background: rgba(250,250,248,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }
        .nav-inner {
          max-width: 1100px; margin: 0 auto;
          height: 68px; display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem; font-weight: 700; color: var(--purple);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .nav-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); display: inline-block;
        }
        .nav-links { display: flex; align-items: center; gap: 0.25rem; list-style: none; }
        .nav-links a {
          padding: 0.45rem 0.875rem; font-size: 0.85rem; font-weight: 500;
          color: var(--text-muted); border-radius: 0.5rem;
          transition: color 0.2s, background 0.2s;
        }
        .nav-links a:hover { color: var(--purple); background: var(--purple-light); }
        .nav-cta {
          background: var(--purple) !important; color: white !important;
          padding: 0.5rem 1.1rem !important; border-radius: 2rem !important;
          font-weight: 600 !important; font-size: 0.83rem !important;
        }
        .nav-cta:hover {
          background: #6a3d93 !important;
          box-shadow: 0 4px 14px rgba(123,78,165,0.35) !important;
        }
        .nav-burger {
          display: none; flex-direction: column; gap: 5px; cursor: pointer;
          background: none; border: none; padding: 4px;
        }
        .nav-burger span {
          display: block; width: 22px; height: 2px;
          background: var(--text); border-radius: 2px;
        }
        .mobile-menu {
          display: none; position: fixed; top: 68px; left: 0; right: 0;
          background: var(--surface); border-bottom: 1px solid var(--border);
          padding: 1rem 2rem 1.5rem; z-index: 99;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-menu.open { display: flex; flex-direction: column; gap: 0.25rem; }
        .mobile-menu a {
          padding: 0.65rem 0.5rem; font-size: 0.9rem; font-weight: 500;
          color: var(--text); border-bottom: 1px solid var(--border);
        }
        .mobile-menu a:hover { color: var(--purple); }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <img src="/img/logo_ebd_extend.png" alt="EBDControl" style={{ height: 40, display: "block" }} />
          </div>
          <ul className="nav-links">
            {links.map((l: NavLink) => (
              <li key={l.href}>
                <a href={l.href} className={l.label === "Contato" ? "nav-cta" : ""}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((o: boolean) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l: NavLink) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}