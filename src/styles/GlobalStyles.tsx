const GlobalStyles = (): JSX.Element => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; width: 100%; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: #fafaf8;
      color: #1a1625;
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }

    a { text-decoration: none; color: inherit; }

    #root {
      width: 100%;
      min-height: 100vh;
      max-width: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      text-align: unset !important;
    }

    :root {
      --purple: #7B4EA5;
      --purple-light: rgba(123,78,165,0.1);
      --purple-mid: rgba(123,78,165,0.2);
      --gold: #c9a84c;
      --gold-light: rgba(201,168,76,0.12);
      --text: #1a1625;
      --text-muted: rgba(26,22,37,0.5);
      --surface: #ffffff;
      --bg: #fafaf8;
      --border: rgba(26,22,37,0.08);
    }

    .fade-up {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                  transform 0.7s cubic-bezier(0.22,1,0.36,1);
    }
    .fade-up.visible { opacity: 1; transform: translateY(0); }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--purple-mid); border-radius: 3px; }
  `}</style>
);

export default GlobalStyles;