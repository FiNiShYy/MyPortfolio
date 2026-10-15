import { LuBot, LuCat, LuDatabase, LuFileText, LuHistory, LuPalette, LuSparkles, LuSwatchBook } from "react-icons/lu";

// Textos em conteudo:bastidores.curiosidades.<id> e conteudo:bastidores.roadmap.<id>.
export const CURIOSIDADES = [
  { id: "hardcoded", cor: "ambar", Icone: LuDatabase },
  { id: "ia", cor: "violeta", Icone: LuSparkles },
  { id: "padrao", cor: "azul", Icone: LuPalette },
  { id: "gato", cor: "verde", Icone: LuCat },
  { id: "curriculo", cor: "rosa", Icone: LuFileText },
  { id: "crawlers", cor: "teal", Icone: LuBot },
  { id: "cores", cor: "violeta", Icone: LuSwatchBook },
  { id: "historia", cor: "azul", Icone: LuHistory },
];

// estado: "feito" | "agora" | "planejado"
export const ROADMAP = [
  { id: "redesign", estado: "feito" },
  { id: "hardcoded", estado: "feito" },
  { id: "acessibilidade", estado: "feito" },
  { id: "posts", estado: "agora" },
  { id: "banco", estado: "planejado" },
  { id: "painel", estado: "planejado" },
  { id: "interacao", estado: "planejado" },
  { id: "dominio", estado: "planejado" },
];

// Mapa do repositório mostrado no destaque "100% hardcoded".
export const ARVORE = `src/
├─ i18n/locales/   # todos os textos (pt-BR, en)
├─ dados/          # stack, projetos, contato, inspirações
├─ components/     # uma pasta por seção + styles.jsx
└─ pages/          # home, blog e bastidores
scripts/
├─ curriculo/      # gera os PDFs do currículo
└─ marca/          # gera favicon e og.png`;
