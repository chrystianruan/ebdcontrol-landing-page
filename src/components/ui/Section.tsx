import { SectionProps } from "../../types";

export function Section({ id, children, style = {} }: SectionProps): JSX.Element {
  return (
    <section
      id={id}
      style={{
        padding: "6rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </section>
  );
}