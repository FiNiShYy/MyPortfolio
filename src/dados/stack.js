import {
  SiReact,
  SiTypescript,
  SiVite,
  SiStyledcomponents,
  SiTailwindcss,
  SiFramer,
  SiPwa,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiRedis,
  SiClaude,
  SiModelcontextprotocol,
  SiDocker,
  SiGit,
  SiEslint,
  SiPrettier,
  SiFigma,
  SiReactquery,
  SiWebrtc,
  SiVitest,
  SiTestinglibrary,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {
  LuLanguages,
  LuPlug,
  LuKeyRound,
  LuWorkflow,
  LuServer,
  LuTestTube,
  LuFlaskConical,
  LuBox,
  LuRadioTower,
} from "react-icons/lu";

// Os nomes são iguais nos dois idiomas; título e texto de cada grupo vêm do
// i18n (conteudo:stack.grupos.<id>). `cor` aponta para os acentos do tema.
// `destaque` faz o card ocupar duas colunas no grid.
export const GRUPOS_STACK = [
  {
    id: "front",
    cor: "azul",
    destaque: true,
    itens: [
      { nome: "React", Icone: SiReact },
      { nome: "TypeScript", Icone: SiTypescript },
      { nome: "Vite", Icone: SiVite },
      { nome: "styled-components", Icone: SiStyledcomponents },
      { nome: "Tailwind CSS", Icone: SiTailwindcss },
      { nome: "Framer Motion", Icone: SiFramer },
      { nome: "Zustand", Icone: LuBox },
      { nome: "TanStack Query", Icone: SiReactquery },
      { nome: "react-i18next", Icone: LuLanguages },
      { nome: "PWA / Web Push", Icone: SiPwa },
    ],
  },
  {
    id: "back",
    cor: "verde",
    itens: [
      { nome: "Node.js", Icone: SiNodedotjs },
      { nome: "Express", Icone: SiExpress },
      { nome: "REST & SOAP", Icone: LuPlug },
      { nome: "JWT", Icone: SiJsonwebtokens },
      { nome: "OTP", Icone: LuKeyRound },
      { nome: "WebSocket / SSE", Icone: LuRadioTower },
      { nome: "LiveKit / WebRTC", Icone: SiWebrtc },
    ],
  },
  {
    id: "ia",
    cor: "violeta",
    itens: [
      { nome: "Claude API", Icone: SiClaude },
      { nome: "MCP", Icone: SiModelcontextprotocol },
      { nome: "Agentes / orquestração", nomeEn: "Agents / orchestration", Icone: LuWorkflow },
    ],
  },
  {
    id: "dados",
    cor: "teal",
    itens: [
      { nome: "MongoDB", Icone: SiMongodb },
      { nome: "Redis", Icone: SiRedis },
    ],
  },
  {
    id: "infra",
    cor: "ambar",
    itens: [
      { nome: "Docker", Icone: SiDocker },
      { nome: "AWS", Icone: FaAws },
      { nome: "EasyPanel / VPS", Icone: LuServer },
      { nome: "Git", Icone: SiGit },
    ],
  },
  {
    id: "qualidade",
    cor: "rosa",
    destaque: true,
    itens: [
      { nome: "Playwright", Icone: LuTestTube },
      { nome: "Vitest", Icone: SiVitest },
      { nome: "Testing Library", Icone: SiTestinglibrary },
      { nome: "Testes unitários", nomeEn: "Unit tests", Icone: LuFlaskConical },
      { nome: "ESLint", Icone: SiEslint },
      { nome: "Prettier", Icone: SiPrettier },
    ],
  },
  {
    id: "design",
    cor: "violeta",
    itens: [{ nome: "Figma", Icone: SiFigma }],
  },
];
