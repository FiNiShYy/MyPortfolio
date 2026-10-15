// Conteúdo do currículo (PT e EN). Edite aqui e rode `npm run curriculo`
// para regerar os PDFs em public/. Sem nomes de clientes: só "fintechs",
// "bancos", "plataformas de cobrança".
const contato = {
  local: { "pt-BR": "Maringá, PR", en: "Maringá, Brazil" },
  email: "kauagabrielramkg@gmail.com",
  telefone: "+55 (44) 99757-9646",
  linkedin: "linkedin.com/in/kauagabriell",
  github: "github.com/FiNiShYy",
  portfolio: "my-portfolio-kaua.vercel.app",
};

export const CURRICULO = {
  "pt-BR": {
    arquivo: "curriculo-kaua-gabriel.pdf",
    titulo: "Desenvolvedor Full Stack",
    contato: { ...contato, local: contato.local["pt-BR"] },
    rotulos: {
      resumo: "Resumo",
      experiencia: "Experiência",
      stack: "Stack",
      projetos: "Projetos",
      formacao: "Formação",
      idiomas: "Idiomas",
      cursos: "Cursos",
    },
    resumo:
      "Desenvolvedor full stack com mais de 3 anos construindo, em produção, APIs, integrações financeiras e agentes de IA para fintechs de crédito e cobrança — do serviço que conversa com o banco à interface onde o cliente negocia.",
    experiencia: [
      {
        cargo: "Desenvolvedor Full Stack",
        empresa: "Salt Systems",
        periodo: "set 2023 — atual",
        pontos: [
          "Desenvolvo APIs e microsserviços em Node.js/Express que integram plataformas de cobrança a bancos, meios de pagamento e serviços SOAP legados: consulta de dívidas, simulação de acordos, emissão de boletos e Pix.",
          "Construo agentes de IA com a Claude API e servidores MCP próprios que orquestram rotinas de cobrança, atendimento e gestão, com contexto persistido em MongoDB.",
          "Desenvolvo portais de autonegociação whitelabel multi-tenant em React: tema e conteúdo por cliente resolvidos pelo domínio, i18n, renderização no servidor e PWA com notificações push.",
          "Implemento autenticação com JWT e OTP multicanal, cache e filas com Redis.",
          "Empacoto serviços com Docker e publico em VPS (EasyPanel) e AWS, com testes E2E em Playwright e testes unitários antes de cada deploy.",
          "Conduzi a migração do painel do Tino (SaaS de gestão de trabalho com IA) para React: chamadas com LiveKit, voz e presença em tempo real e páginas públicas com SSR.",
        ],
      },
    ],
    stack: [
      ["Front-end", "React, TypeScript, Vite, styled-components, Tailwind CSS, Zustand, TanStack Query, Framer Motion, react-i18next, PWA/Web Push"],
      ["Back-end", "Node.js, Express, APIs REST, SOAP, JWT, OTP, WebSocket/SSE, LiveKit/WebRTC"],
      ["IA", "Claude API, MCP (Model Context Protocol), agentes e orquestração"],
      ["Dados", "MongoDB, Redis"],
      ["Infra", "Docker, AWS, EasyPanel/VPS, Git"],
      ["Qualidade", "Playwright (E2E), Vitest, Testing Library, ESLint, Prettier"],
      ["Design", "Figma"],
    ],
    projetos: [
      ["Tino", "SaaS de gestão de trabalho com IA — tino.systems"],
      ["Portal Salt Systems", "Redesenho do portal institucional da empresa."],
      ["CEACC", "Portal de confederação de tiro esportivo em Astro, com tema claro/escuro."],
    ],
    formacao: [["Engenharia de Software", "UniCesumar", "último semestre"]],
    idiomas: [["Português", "nativo"], ["Inglês", "fluente"]],
    cursos: [
      "Node.js — DevClub",
      "Alura — JavaScript, Node.js e React",
      "JavaScript — Curso em Vídeo",
    ],
  },

  en: {
    arquivo: "resume-kaua-gabriel.pdf",
    titulo: "Full Stack Developer",
    contato: { ...contato, local: contato.local.en },
    rotulos: {
      resumo: "Summary",
      experiencia: "Experience",
      stack: "Stack",
      projetos: "Projects",
      formacao: "Education",
      idiomas: "Languages",
      cursos: "Courses",
    },
    resumo:
      "Full stack developer with 3+ years shipping APIs, financial integrations and AI agents to production for credit and collections fintechs — from the service that talks to the bank to the interface where customers settle their debts.",
    experiencia: [
      {
        cargo: "Full Stack Developer",
        empresa: "Salt Systems",
        periodo: "Sep 2023 — present",
        pontos: [
          "Build Node.js/Express APIs and microservices that connect collection platforms to banks, payment providers and legacy SOAP services: debt lookup, settlement simulation, boleto and Pix issuing.",
          "Build AI agents on the Claude API with custom MCP servers that orchestrate collection, support and management routines, with context persisted in MongoDB.",
          "Develop multi-tenant white-label self-service portals in React: per-client theme and content resolved from the domain, i18n, server-side rendering and a PWA with push notifications.",
          "Implement JWT auth and multichannel OTP, plus caching and queues with Redis.",
          "Package services with Docker and deploy to VPS (EasyPanel) and AWS, with Playwright E2E and unit tests before every release.",
          "Led the migration of the Tino panel (an AI work management SaaS) to React: LiveKit calls, real-time voice and presence, and SSR public pages.",
        ],
      },
    ],
    stack: [
      ["Front-end", "React, TypeScript, Vite, styled-components, Tailwind CSS, Framer Motion, react-i18next, PWA/Web Push"],
      ["Back-end", "Node.js, Express, REST APIs, SOAP, JWT, OTP, WebSocket/SSE, LiveKit/WebRTC"],
      ["AI", "Claude API, MCP (Model Context Protocol), agents and orchestration"],
      ["Data", "MongoDB, Redis"],
      ["Infra", "Docker, AWS, EasyPanel/VPS, Git"],
      ["Quality", "Playwright (E2E), Vitest, Testing Library, ESLint, Prettier"],
      ["Design", "Figma"],
    ],
    projetos: [
      ["Tino", "AI work management SaaS — tino.systems"],
      ["Salt Systems website", "Redesign of the company's corporate website."],
      ["CEACC", "Sport shooting confederation portal built with Astro, light/dark theme."],
    ],
    formacao: [["B.Sc. Software Engineering", "UniCesumar", "final semester"]],
    idiomas: [["Portuguese", "native"], ["English", "fluent"]],
    cursos: [
      "Node.js — DevClub",
      "Alura — JavaScript, Node.js and React",
      "JavaScript — Curso em Vídeo",
    ],
  },
};
