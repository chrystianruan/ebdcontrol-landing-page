import { SectionTitleProps } from "../../types";

export function SectionTitle({ children, center = false }: SectionTitleProps): JSX.Element {
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        color: "var(--text)",
        marginBottom: "1.25rem",
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}