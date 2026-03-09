import { SectionLabelProps } from "../../types";

export function SectionLabel({ children }: SectionLabelProps): JSX.Element {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--purple)",
        marginBottom: "1rem",
      }}
    >
      <span
        style={{
          width: 24,
          height: 1.5,
          background: "var(--purple)",
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}