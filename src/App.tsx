import GlobalStyles from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Historia } from "./components/Historia";
import { Manuais } from "./components/Manuais";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

import React from "react";

export default function App(): React.JSX.Element {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Historia />
      <Manuais />
      <Contato />
      <Footer />
    </div>
  );
}