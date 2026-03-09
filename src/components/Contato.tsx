import { ContactItem } from "../types";
import { useFadeUp } from "../hooks/useFadeUp";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

const contacts: ContactItem[] = [
  { icon: "📧", label: "E-mail", value: "suporte@ebdcontrol.com", href: "mailto:suporte@ebdcontrol.com", color: "#7B4EA5", bg: "var(--purple-light)" },
  { icon: "📸", label: "Instagram", value: "@denec.parnamirim", href: "https://instagram.com/denec.parnamirim", color: "#C13584", bg: "rgba(193,53,132,0.08)" },
  { icon: "💬", label: "WhatsApp", value: "(84) 98120-3938", href: "https://api.whatsapp.com/send?phone=5584981203938", color: "#128C7E", bg: "rgba(18,140,126,0.08)" },
];

export function Contato(): React.JSX.Element {
  const ref = useFadeUp();
  return (
    <>
      <style>{`
        .contato-layout {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; align-items: center;
        }
        @media (max-width:768px) { .contato-layout { grid-template-columns: 1fr; gap: 2.5rem; } }
        .contato-card {
          display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 1rem; margin-bottom: 1rem;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .contato-card:hover { transform: translateX(6px); box-shadow: 0 4px 20px rgba(0,0,0,0.07); border-color: var(--purple-mid); }
        .contato-card-icon {
          width: 48px; height: 48px; border-radius: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; flex-shrink: 0;
        }
        .contato-card-label { font-size: 0.72rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }
        .contato-card-value { font-size: 0.92rem; color: var(--text); font-weight: 600; margin-top: 0.15rem; }
        .contato-arrow { margin-left: auto; font-size: 1.1rem; color: var(--text-muted); }
        .contato-info-box {
          background: linear-gradient(135deg, var(--purple-light), rgba(201,168,76,0.06));
          border: 1px solid var(--purple-mid); border-radius: 1.25rem; padding: 2rem;
        }
        .contato-info-box h3 { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.75rem; }
        .contato-info-box p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.75; font-weight: 300; }
      `}</style>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "6rem" }}>
        <Section id="contato">
          <div className="contato-layout">
            <div className="fade-up" ref={ref}>
              <SectionLabel>Contato</SectionLabel>
              <SectionTitle>Fale com<br />a nossa equipe</SectionTitle>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
                Tem dúvidas, sugestões ou quer saber como levar o EBDControl para sua congregação?
                Entre em contato por qualquer um dos canais abaixo.
              </p>
              {contacts.map((c: ContactItem) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contato-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="contato-card-icon" style={{ background: c.bg, color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="contato-card-label">{c.label}</div>
                    <div className="contato-card-value">{c.value}</div>
                  </div>
                  <span className="contato-arrow">→</span>
                </a>
              ))}
            </div>

            <div>
              <div className="contato-info-box">
                <h3>Quer o EBDControl na sua congregação?</h3>
                <p>
                  O EBDControl foi pensado para ser acessível a igrejas de todos os tamanhos.
                  Entre em contato e vamos conversar sobre como podemos ajudar sua EBD a crescer
                  com organização e eficiência.
                  <br /><br />
                  Nossa equipe terá prazer em apresentar o sistema, tirar suas dúvidas e apoiar
                  na implantação. Servir é o nosso propósito!
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}