import GlobalStyles from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Historia } from "./components/Historia";
import { Manuais } from "./components/Manuais";
import { Agradecimentos } from "./components/Agradecimentos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Historia />
      <Manuais />
      <Agradecimentos />
      <Contato />
      <Footer />
    </div>
  );
}