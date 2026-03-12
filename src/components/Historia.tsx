import type { TimelineItem } from "../types";
import { useFadeUp } from "../hooks/useFadeUp";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";

const timelineItems: TimelineItem[] = [
  { year: "2022", text: "Início do desenvolvimento. O sistema foi idealizado para resolver os problemas reais da EBD do Templo Sede da IEADERN Parnamirim." },
  { year: "2022 – 2023", text: "Diversas fases de testes e melhorias contínuas, ajustando o sistema às necessidades reais dos usuários." },
  { year: "2023", text: "Lançamento em produção! O EBDControl entra em uso oficial, trazendo modernidade e eficiência para a gestão da EBD." },
  { year: "2023+", text: "O sistema é disponibilizado para outras congregações e passa a ser utilizado por igrejas do campo de Parnamirim." },
  { year: "Hoje", text: "Desenvolvimento contínuo, novas funcionalidades e aprimoramentos para atender cada vez mais igrejas com excelência." },
];

export function Historia(): React.JSX.Element {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();

  return (
    <>
      <style>{`
        .historia-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
        }
        @media (max-width:768px) { .historia-layout { grid-template-columns: 1fr; gap: 2.5rem; } }
        .timeline-item { display: flex; gap: 1.25rem; position: relative; padding-bottom: 2rem; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .timeline-dot {
          width: 12px; height: 12px; border-radius: 50%;
          background: var(--purple); border: 2px solid var(--bg);
          box-shadow: 0 0 0 3px var(--purple-mid); flex-shrink: 0; margin-top: 3px;
        }
        .timeline-line { width: 1px; flex: 1; background: var(--border); margin-top: 6px; }
        .timeline-item:last-child .timeline-line { display: none; }
        .timeline-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; color: var(--purple); font-weight: 500; margin-bottom: 0.3rem;
        }
        .timeline-text { font-size: 0.87rem; color: var(--text-muted); line-height: 1.7; font-weight: 300; }
        .historia-quote {
          background: linear-gradient(135deg, var(--purple-light), var(--gold-light));
          border-left: 3px solid var(--purple);
          border-radius: 0 1rem 1rem 0; padding: 1.5rem 1.75rem; margin-top: 2rem;
        }
        .historia-quote p {
          font-family: 'Playfair Display', serif; font-size: 1.05rem;
          font-style: italic; color: var(--text); line-height: 1.7;
        }
        .historia-quote cite {
          display: block; margin-top: 0.75rem;
          font-size: 0.78rem; color: var(--text-muted); font-style: normal;
        }
      `}</style>

      <div style={{ background: "var(--surface)", padding: "0 2rem", borderTop: "1px solid var(--border)" }}>
        <Section id="historia">
          <div className="historia-layout">
            <div className="fade-up" ref={ref1}>
              <SectionLabel>Nossa História</SectionLabel>
              <SectionTitle>De uma necessidade<br />a uma solução real</SectionTitle>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                O EBDControl nasceu da necessidade de auxiliar o Templo Sede da IEADERN
                Parnamirim em suas atividades durante a EBD. Àquela época, eram utilizados
                meios manuais e planilhas para controle de presenças, cadastros e análises de dados.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                Pouco tempo depois de chegar à produção, o EBDControl foi disponibilizado
                para outras congregações, e hoje é utilizado por algumas igrejas do campo de Parnamirim.
              </p>
              <div className="historia-quote">
                <p>"Nosso propósito sempre será servir com dedicação e excelência!"</p>
                <cite>— Equipe EBDControl</cite>
              </div>
            </div>

            <div className="fade-up" ref={ref2}>
              {timelineItems.map((item: TimelineItem) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-left">
                    <div className="timeline-dot" />
                    <div className="timeline-line" />
                  </div>
                  <div>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-text">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}