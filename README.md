# Kauã Gabriel · Portfolio

Portfolio pessoal: stack, tipos de sistema que construo, projetos, jornada e contato.
PT/EN/ES, tema claro/escuro e animações sutis ao rolar.

## Stack

- React 19 + Vite
- styled-components 6 (tokens por papel em CSS vars, padrão que uso no dia a dia)
- react-i18next (pt-BR e en)
- Fontes: Hubot Sans, Mona Sans e JetBrains Mono (via Fontsource)

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run lint
npm run curriculo  # regera os PDFs de currículo (PT/EN) em public/ usando o Edge/Chrome instalado
npm run marca      # regera favicon, ícones e a imagem de compartilhamento (og.png)
```

## Onde editar o conteúdo

| O quê                                  | Arquivo                                         |
| -------------------------------------- | ----------------------------------------------- |
| Textos (hero, seções, jornada…)        | `src/i18n/locales/{pt-BR,en}/conteudo.json`     |
| Menu, botões, rodapé                   | `src/i18n/locales/{pt-BR,en}/comum.json`        |
| Tecnologias e grupos da stack          | `src/dados/stack.js`                            |
| Projetos (imagem, link, stack)         | `src/dados/projetos.js` + `public/projetos/`    |
| Canais de contato                      | `src/dados/contato.js`                          |
| Trechos de código de "O que construo"  | `src/components/Construo/trechos.js`            |
| Cores, fontes e espaçamentos           | `src/styles/globalStyle.jsx`                    |
| Currículos (PT/EN)                     | `scripts/curriculo/conteudo.mjs` → `npm run curriculo` |

## Convenções

- Cada componente em `src/components/<Nome>/index.jsx` + `styles.jsx` (`import * as S from "./styles"`).
- Só `var(--papel)` para cores; nada de cor solta nem `style` inline (o ESLint barra).
- Valores dinâmicos: `$prop` transiente ou custom property marcada com `inline-dinamico`.
