import { createGlobalStyle } from "styled-components";

/*
 * Tokens por papel, no mesmo vocabulário do portal-whitelabel: componente
 * nunca usa cor solta, só var(--papel). O tema escuro troca os valores aqui
 * via [data-tema="escuro"] no <html> (setado no index.html antes do paint).
 *
 * --primaria é cor de ação (botões, marcadores), nunca fundo de seção:
 * seções usam --fundo / --superficie / --tinta.
 * --tinta-escura é o "card de terminal", escuro nos dois temas.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;

    --fundo: oklch(98.4% 0.006 285);
    --superficie: oklch(100% 0 0);
    --tinta: oklch(96% 0.014 285);
    --borda: oklch(89% 0.022 285);
    --texto: oklch(21% 0.04 285);
    --texto-suave: oklch(42% 0.035 285);

    --primaria: oklch(85% 0.2 150);
    --primaria-hover: oklch(91% 0.16 150);
    --sobre-primaria: oklch(22% 0.05 160);

    --tinta-escura: oklch(18% 0.045 285);
    --tinta-escura-elevada: oklch(23% 0.05 285);
    --sobre-tinta: oklch(95% 0.012 285);
    --sobre-tinta-suave: oklch(74% 0.03 285);

    /* Acentos: texto (-forte) e fundo suave (-suave) por cor. -forte fica em
       40% de luminosidade: texto mono pequeno precisa de contraste ≥ 7:1. */
    --verde-forte: oklch(40% 0.12 150);
    --verde-suave: oklch(95.5% 0.03 150);
    --azul-forte: oklch(40% 0.14 250);
    --azul-suave: oklch(95.5% 0.022 250);
    --violeta-forte: oklch(40% 0.16 288);
    --violeta-suave: oklch(95.5% 0.023 288);
    --rosa-forte: oklch(40% 0.15 350);
    --rosa-suave: oklch(95.5% 0.026 350);
    --ambar-forte: oklch(40% 0.09 70);
    --ambar-suave: oklch(95.5% 0.035 80);
    --teal-forte: oklch(40% 0.08 190);
    --teal-suave: oklch(95.5% 0.035 190);

    /* Tons vivos, para pontos, gradiente e sintaxe do terminal. */
    --vivo-vermelho: oklch(65% 0.23 27);
    --vivo-ambar: oklch(84% 0.155 80);
    --vivo-teal: oklch(80% 0.13 190);
    --vivo-azul: oklch(70% 0.163 250);
    --vivo-violeta: oklch(62% 0.22 288);
    --vivo-rosa: oklch(70% 0.2 350);
    --vivo-verde: oklch(85% 0.2 150);

    --espectro: linear-gradient(
      90deg in oklch,
      var(--vivo-vermelho),
      var(--vivo-ambar),
      var(--vivo-teal),
      var(--vivo-azul),
      var(--vivo-violeta),
      var(--vivo-rosa)
    );
    --sombra: 0 1px 2px oklch(20% 0.05 285 / 0.08), 0 12px 40px -12px oklch(20% 0.05 285 / 0.25);
    --radius: 1rem;

    --fonte: "Mona Sans Variable", "Mona Sans", system-ui, sans-serif;
    --fonte-display: "Hubot Sans Variable", "Hubot Sans", system-ui, sans-serif;
    --fonte-mono: "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace;

    /* Respiro lateral: 6vw no mobile, centraliza em 1200px no desktop. */
    --cap: max(6vw, calc((100% - 1200px) / 2));
    --secao: clamp(4.5rem, 10vw, 8rem);
  }

  :root[data-tema="escuro"] {
    color-scheme: dark;

    --fundo: oklch(16% 0.035 285);
    --superficie: oklch(20% 0.04 285);
    --tinta: oklch(19% 0.042 285);
    --borda: oklch(31% 0.05 285);
    --texto: oklch(96% 0.01 285);
    --texto-suave: oklch(76% 0.03 285);

    --tinta-escura: oklch(12% 0.03 285);
    --tinta-escura-elevada: oklch(17% 0.04 285);

    --verde-forte: oklch(82% 0.15 150);
    --verde-suave: oklch(28% 0.05 150);
    --azul-forte: oklch(80% 0.11 250);
    --azul-suave: oklch(28% 0.05 250);
    --violeta-forte: oklch(80% 0.11 288);
    --violeta-suave: oklch(28% 0.06 288);
    --rosa-forte: oklch(80% 0.12 350);
    --rosa-suave: oklch(28% 0.06 350);
    --ambar-forte: oklch(84% 0.11 80);
    --ambar-suave: oklch(28% 0.04 80);
    --teal-forte: oklch(82% 0.09 190);
    --teal-suave: oklch(28% 0.04 190);

    --sombra: 0 1px 2px oklch(0% 0 0 / 0.3), 0 12px 40px -12px oklch(0% 0 0 / 0.6);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--fundo);
    color: var(--texto);
    font-family: var(--fonte);
    font-size: 1.0625rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  h1, h2, h3, h4 {
    font-family: var(--fonte-display);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    cursor: pointer;
  }

  ::selection {
    background: var(--primaria);
    color: var(--sobre-primaria);
  }

  :focus-visible {
    outline: 2px solid var(--violeta-forte);
    outline-offset: 3px;
    border-radius: 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
