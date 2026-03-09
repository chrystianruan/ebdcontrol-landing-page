import type { FeatureItem } from "../types";
import { useFadeUp } from "../hooks/useFadeUp";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

const features: FeatureItem[] = [
  { icon: "📋", title: "Chamadas Virtuais", desc: "Professores ou alunos realizam chamadas digitalmente com segurança (se for o aluno, é exigido código do dia e localização do aluno para evitar fraudes)." },
  { icon: "👥", title: "Controle de Pessoas", desc: "Gestão completa de alunos, professores e secretários, com cadastro detalhado e histórico individual." },
  { icon: "📊", title: "Relatórios Automáticos", desc: "Geração automática de relatórios com métricas de presença, visitantes, comparativos e muito mais — baseado nas chamadas registradas." },
  { icon: "🔒", title: "Controle de Acesso", desc: "Divisão por níveis de permissão (Comum, Admin, Master, SuperMaster) para garantir segurança e controle de acesso." },
  { icon: "👁️", title: "Transparência de Presenças", desc: "Visibilidade total sobre frequências, permitindo que líderes acompanhem o engajamento de cada classe em tempo real." },
  { icon: "📄", title: "Chamada Física em PDF", desc: "Geração de listas físicas em PDF para situações onde o acesso digital não está disponível." },
];

function FeatureCard({ feature, delay }: { feature: FeatureItem; delay: number }): React.JSX.Element {
  const ref = useFadeUp();
  return (
    <div className="feature-card fade-up" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="feature-icon">{feature.icon}</span>
      <div className="feature-title">{feature.title}</div>
      <div className="feature-desc">{feature.desc}</div>
    </div>
  );
}

export function Features(): React.JSX.Element {
  const ref = useFadeUp();
  return (
    <>
      <style>{`
        .features-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1.25rem; margin-top: 3rem;
        }
        @media (max-width:900px) { .features-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:580px) { .features-grid { grid-template-columns: 1fr; } }
        .feature-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 1.25rem; padding: 1.75rem;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .feature-card:hover {
          box-shadow: 0 8px 32px rgba(123,78,165,0.1);
          transform: translateY(-4px); border-color: var(--purple-mid);
        }
        .feature-icon { font-size: 1.75rem; margin-bottom: 1rem; display: block; }
        .feature-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; }
        .feature-desc { font-size: 0.83rem; color: var(--text-muted); line-height: 1.7; font-weight: 300; }
      `}</style>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "6rem" }}>
        <Section id="features">
          <div className="fade-up" ref={ref}>
            <SectionLabel>Funcionalidades</SectionLabel>
            <SectionTitle>Tudo que sua EBD precisa,<br />em um só lugar</SectionTitle>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Desenvolvido para simplificar a rotina das igrejas, o EBDControl reúne as ferramentas
              essenciais para uma Escola Bíblica Dominical bem organizada.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f: FeatureItem, i: number) => (
              <FeatureCard key={f.title} feature={f} delay={i * 0.07} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}