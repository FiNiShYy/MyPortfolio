import { createGlobalStyle } from "styled-components";

// Cursor ampliado (48px): seta preta com contorno branco, legível em qualquer fundo.
const CURSOR = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M4 2l15 11.5-6.6.9 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="black" stroke="white" stroke-width="1.4" stroke-linejoin="round"/></svg>',
)}") 6 3, auto`;

// Regras de cada ferramenta do painel, ligadas pelos atributos data-a11y-* no <html>.
export const EstilosAcessibilidade = createGlobalStyle`
  /* Tamanho do texto: tudo é em rem, então escalar o <html> escala o site. */
  html[data-a11y-texto="1"] { font-size: 112.5%; }
  html[data-a11y-texto="2"] { font-size: 125%; }
  html[data-a11y-texto="3"] { font-size: 137.5%; }
  html[data-a11y-texto="4"] { font-size: 150%; }

  /* Alto contraste: preto no branco (ou o inverso no tema escuro). */
  :root[data-a11y-contraste] {
    --fundo: #fff;
    --superficie: #fff;
    --tinta: #f1f1f1;
    --borda: #000;
    --texto: #000;
    --texto-suave: #111;
    --verde-forte: oklch(30% 0.12 150);
    --azul-forte: oklch(30% 0.14 250);
    --violeta-forte: oklch(30% 0.16 288);
    --rosa-forte: oklch(30% 0.15 350);
    --ambar-forte: oklch(30% 0.09 70);
    --teal-forte: oklch(30% 0.08 190);
  }
  :root[data-a11y-contraste][data-tema="escuro"] {
    --fundo: #000;
    --superficie: #000;
    --tinta: #0b0b0b;
    --borda: #fff;
    --texto: #fff;
    --texto-suave: #f2f2f2;
    --verde-forte: oklch(90% 0.15 150);
    --azul-forte: oklch(90% 0.1 250);
    --violeta-forte: oklch(90% 0.1 288);
    --rosa-forte: oklch(90% 0.1 350);
    --ambar-forte: oklch(92% 0.11 80);
    --teal-forte: oklch(90% 0.09 190);
  }

  /* Fonte para dislexia (OpenDyslexic, carregada sob demanda). */
  :root[data-a11y-dislexia] {
    --fonte: "OpenDyslexic", "Comic Sans MS", system-ui, sans-serif;
    --fonte-display: "OpenDyslexic", "Comic Sans MS", system-ui, sans-serif;
  }
  [data-a11y-dislexia] h1,
  [data-a11y-dislexia] h2,
  [data-a11y-dislexia] h3 {
    letter-spacing: 0;
  }

  /* Espaçamento de texto nos valores do WCAG 1.4.12. */
  [data-a11y-espacamento] body :is(p, li, a, span, dd, dt, figcaption, blockquote, button) {
    line-height: 1.8 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
  }
  [data-a11y-espacamento] body :is(h1, h2, h3) {
    line-height: 1.25 !important;
    letter-spacing: 0.02em !important;
    word-spacing: 0.16em !important;
  }

  /* Destacar links e botões. */
  [data-a11y-links] a {
    text-decoration: underline !important;
    text-decoration-thickness: 2px !important;
    text-underline-offset: 3px !important;
  }
  [data-a11y-links] :is(a, button) {
    outline: 2px dashed var(--violeta-forte) !important;
    outline-offset: 3px !important;
  }

  /* Pausar animações (mesmo efeito do "reduzir movimento" do sistema). */
  [data-a11y-sem-animacao] *,
  [data-a11y-sem-animacao] *::before,
  [data-a11y-sem-animacao] *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  /* Cursor grande. */
  [data-a11y-cursor],
  [data-a11y-cursor] * {
    cursor: ${CURSOR} !important;
  }

  /* Leitura em voz alta: textos clicáveis ganham destaque ao passar o mouse. */
  [data-a11y-voz] main :is(p, h1, h2, h3, li, blockquote, figcaption):hover {
    outline: 2px solid var(--ambar-forte);
    outline-offset: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  [data-a11y-voz] .a11y-lendo {
    background: var(--ambar-suave) !important;
    outline: 2px solid var(--ambar-forte);
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Filtros de cor. Filtro no <html> não quebra position: fixed (o root é exceção). */
  html[data-a11y-filtro="cinza"] { filter: grayscale(1); }
  html[data-a11y-filtro="protanopia"] { filter: url(#a11y-protanopia); }
  html[data-a11y-filtro="deuteranopia"] { filter: url(#a11y-deuteranopia); }
  html[data-a11y-filtro="tritanopia"] { filter: url(#a11y-tritanopia); }

  .a11y-filtros {
    position: absolute;
    pointer-events: none;
  }

  /* VLibras só aparece com a opção ligada. */
  html:not([data-a11y-vlibras]) :is(#vlibras-access-wrapper, #vlibras-app-root) {
    display: none !important;
  }
`;

// Matrizes de simulação de daltonismo (Machado, Oliveira e Fernandes, 2009).
const MATRIZES = {
  protanopia: "0.152 1.053 -0.205 0 0  0.115 0.786 0.099 0 0  -0.004 -0.048 1.052 0 0  0 0 0 1 0",
  deuteranopia: "0.367 0.861 -0.228 0 0  0.280 0.673 0.047 0 0  -0.012 0.043 0.969 0 0  0 0 0 1 0",
  tritanopia: "1.256 -0.077 -0.179 0 0  -0.078 0.931 0.148 0 0  0.005 0.691 0.304 0 0  0 0 0 1 0",
};

export const FiltrosSvg = () => (
  <svg width="0" height="0" aria-hidden="true" focusable="false" className="a11y-filtros">
    <defs>
      {Object.entries(MATRIZES).map(([id, valores]) => (
        <filter key={id} id={`a11y-${id}`} colorInterpolationFilters="linearRGB">
          <feColorMatrix type="matrix" values={valores} />
        </filter>
      ))}
    </defs>
  </svg>
);
