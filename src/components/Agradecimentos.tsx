import { AgradecimentoItem } from "../types";
import { useFadeUp } from "../hooks/useFadeUp";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

const agradecimentos: AgradecimentoItem[] = [
  { icon: "✝️", title: "A Deus", desc: "Em primeiro lugar, pelo Seu infinito amor, misericórdia e cuidado. A Ele somos gratos pela força, criatividade e capacidade concedidas para servir com dedicação e excelência." },
  { icon: "⛪", title: "IEADERN Parnamirim", desc: "Pelo apoio constante, pela confiança e por proporcionar o ambiente e os recursos necessários para que este sistema pudesse ser desenvolvido e utilizado." },
  { icon: "🤝", title: "Colaboradores", desc: "Aos irmãos em Cristo que colaboraram e apoiaram este projeto. Por ordem cronológica: Abner Irineu, Ev. Assis Irineu, Simon Costa, Pb. Domingos José, Pr. Elinaldo Renovato, Hartur, Pr. Abdênego Xavier e Pr. Kleber Maia." },
];

function AgradecimentoCard({ item, delay }: { item: AgradecimentoItem; delay: number }): JSX.Element {
  const ref = useFadeUp();
  return (
    <div className="agradec-card fade-up" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="agradec-icon">{item.icon}</span>
      <div className="agradec-title">{item.title}</div>
      <div className="agradec-desc">{item.desc}</div>
    </div>
  );
}

export function Agradecimentos(): JSX.Element {
  const ref = useFadeUp();
  return (
    <>
      <style>{`
        .agradec-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.5rem; margin-top: 3rem;
        }
        @media (max-width:900px) { .agradec-grid { grid-template-columns: 1fr; } }
        .agradec-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 1.25rem; padding: 2rem 1.75rem; text-align: center;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .agradec-card:hover { box-shadow: 0 8px 32px rgba(123,78,165,0.1); transform: translateY(-4px); }
        .agradec-icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
        .agradec-title { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 0.6rem; }
        .agradec-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.75; font-weight: 300; }
        .agradec-full {
          margin-top: 2.5rem; background: var(--surface); border: 1px solid var(--border);
          border-radius: 1.25rem; padding: 2rem 2.5rem; text-align: center;
        }
        .agradec-full p {
          font-family: 'Playfair Display', serif; font-style: italic;
          font-size: 1rem; color: var(--text-muted); line-height: 1.8;
          max-width: 640px; margin: 0 auto;
        }
      `}</style>

      <div style={{ background: "var(--surface)", padding: "0 2rem", borderTop: "1px solid var(--border)" }}>
        <Section id="agradecimentos">
          <div className="fade-up" ref={ref} style={{ textAlign: "center" }}>
            <SectionLabel>Agradecimentos</SectionLabel>
            <SectionTitle center>Feito com fé, dedicação<br />e muito apoio</SectionTitle>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, maxWidth: 580, margin: "0 auto" }}>
              Expressamos nossa sincera gratidão a todos que, direta ou indiretamente,
              contribuíram para a realização e aprimoramento deste sistema.
            </p>
          </div>

          <div className="agradec-grid">
            {agradecimentos.map((a: AgradecimentoItem, i: number) => (
              <AgradecimentoCard key={a.title} item={a} delay={i * 0.1} />
            ))}
          </div>

          <div className="agradec-full">
            <p>"Este projeto é fruto de apoio, colaboração e dedicação de muitas pessoas ao longo do tempo. Somos imensamente gratos a cada um que faz parte desta história."</p>
          </div>
        </Section>
      </div>
    </>
  );
}