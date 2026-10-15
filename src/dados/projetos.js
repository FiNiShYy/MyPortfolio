// Textos (título, tipo, resumo, detalhes) vêm do i18n em
// conteudo:projetos.itens.<id>. Aqui fica só o que não muda com o idioma.
// `link: null` = site fora do ar: o card mostra o selo "arquivado" no lugar do botão.
// `destaque` ocupa duas colunas (mantém as linhas da grade completas).
// `stack` lista apenas o que foi confirmado; deixe vazio quando não souber.
export const PROJETOS = [
  {
    id: "tino",
    imagem: "/projetos/tino.webp",
    link: "https://tino.systems",
    cor: "violeta",
    stack: ["React", "styled-components", "Zustand", "LiveKit", "Node.js"],
    destaque: true,
  },
  {
    id: "salt",
    imagem: "/projetos/portal-salt.webp",
    link: "https://saltsystems.com.br/",
    cor: "verde",
    stack: ["Astro"],
  },
  {
    id: "ceacc",
    imagem: "/projetos/ceacc.webp",
    link: "https://portal-confederacao.vercel.app",
    cor: "azul",
    stack: ["Astro"],
  },
  {
    id: "fci",
    imagem: "/projetos/fci-viagens.webp",
    link: null,
    cor: "ambar",
    stack: [],
  },
  {
    id: "fazcredito",
    imagem: "/projetos/faz-credito.webp",
    link: null,
    cor: "rosa",
    stack: [],
  },
  {
    id: "saltHtml",
    imagem: "/projetos/portal-salt-html.webp",
    link: "https://portal-salt.vercel.app/",
    cor: "teal",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "eletro",
    imagem: "/projetos/eletro-sao-jose.webp",
    link: "https://finishyy.github.io/meu-site/",
    cor: "violeta",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "organo",
    imagem: "/projetos/organo.webp",
    link: "https://organo-react-beta-one.vercel.app/",
    cor: "azul",
    stack: ["React"],
  },
];
