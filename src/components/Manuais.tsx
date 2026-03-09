import { ManualRole } from "../types";
import { useFadeUp } from "../hooks/useFadeUp";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

const manualRoles: ManualRole[] = [
  { label: "Comum", icon: "👤", desc: "Para membros que acessam sua área pessoal e realizam chamadas individuais." },
  { label: "Classe", icon: "🏫", desc: "Para professores e secretários de classe que gerenciam presença e alunos." },
  { label: "Admin", icon: "🛡️", desc: "Para administradores da congregação com acesso a relatórios e gestão geral." },
  { label: "Master", icon: "👑", desc: "Controle avançado de configurações, usuários e dados globais do sistema." },
];

function ManualCard({ role, delay }: { role: ManualRole; delay: number }): React.JSX.Element {
  const ref = useFadeUp();
  return (
    <div className="tutorial-card fade-up" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="wip-ribbon">Em breve</div>
      <span className="tutorial-icon">{role.icon}</span>
      <div className="tutorial-title">Área {role.label}</div>
      <div className="tutorial-desc">{role.desc}</div>
    </div>
  );
}

export function Manuais(): React.JSX.Element {
  const ref = useFadeUp();
  return (
    <>
      <style>{`
        .tutoriais-grid {
          display: grid; grid-template-columns: repeat(2,1fr);
          gap: 1.25rem; margin-top: 2.5rem;
        }
        @media (max-width:640px) { .tutoriais-grid { grid-template-columns: 1fr; } }
        .tutorial-card {
          background: var(--surface); border: 1.5px dashed var(--border);
          border-radius: 1.25rem; padding: 1.75rem;
          position: relative; overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .tutorial-card:hover { border-color: var(--purple-mid); box-shadow: 0 4px 20px rgba(123,78,165,0.07); }
        .wip-ribbon {
          position: absolute; top: 14px; right: -24px;
          background: var(--gold); color: #5a3e00;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em;
          padding: 3px 32px; transform: rotate(35deg); text-transform: uppercase;
        }
        .tutorial-icon { font-size: 1.6rem; margin-bottom: 0.875rem; display: block; }
        .tutorial-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 0.4rem; }
        .tutorial-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.65; font-weight: 300; }
        .wip-banner {
          margin-top: 2.5rem;
          background: linear-gradient(135deg, var(--gold-light), rgba(201,168,76,0.05));
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 1rem; padding: 1.25rem 1.5rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .wip-banner-icon { font-size: 1.5rem; flex-shrink: 0; }
        .wip-banner-text { font-size: 0.84rem; color: #7a5c10; line-height: 1.6; }
        .wip-banner-text strong { font-weight: 600; }
      `}</style>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "6rem" }}>
        <Section id="tutoriais">
          <div className="fade-up" ref={ref}>
            <SectionLabel>Tutoriais</SectionLabel>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <SectionTitle>Aprenda a usar<br />o EBDControl</SectionTitle>
              <span style={{
                background: "var(--gold)", color: "#5a3e00",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "0.3rem 0.75rem", borderRadius: "0.4rem",
                alignSelf: "flex-start", marginTop: "0.25rem",
              }}>
                🚧 Em desenvolvimento
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: 540 }}>
              Os tutoriais serão organizados por nível de permissão, cobrindo todas
              as funcionalidades disponíveis para cada perfil de usuário.
            </p>
          </div>

          <div className="tutoriais-grid">
            {manualRoles.map((r: ManualRole, i: number) => (
              <ManualCard key={r.label} role={r} delay={i * 0.08} />
            ))}
          </div>

          <div className="wip-banner">
            <span className="wip-banner-icon">🛠️</span>
            <div className="wip-banner-text">
              <strong>Os tutoriais ainda estão sendo preparados.</strong> Em breve esta seção
              estará completa com vídeos, passo a passos e guias ilustrados para cada nível de acesso.
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}