// Gera public/curriculo-kaua-gabriel.pdf e public/resume-kaua-gabriel.pdf a
// partir de conteudo.mjs. Usa o Edge (ou Chrome) já instalado via
// playwright-core, sem baixar navegador. Texto real no PDF, legível por ATS.
import { chromium } from "playwright-core";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

import { CURRICULO } from "./conteudo.mjs";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
// Fontes embutidas em base64: a página é montada via setContent (about:blank),
// que não pode buscar arquivos locais.
const fonte = (pacote, arquivo) => {
  const bytes = fs.readFileSync(path.join(raiz, "node_modules/@fontsource-variable", pacote, "files", arquivo));
  return `data:font/woff2;base64,${bytes.toString("base64")}`;
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html(idioma, c) {
  const { contato: ct, rotulos: r } = c;
  return `<!doctype html>
<html lang="${idioma}">
<head>
<meta charset="utf-8" />
<title>Kauã Gabriel — ${esc(c.titulo)}</title>
<style>
  @font-face { font-family: "CV Display"; src: url("${fonte("hubot-sans", "hubot-sans-latin-wght-normal.woff2")}") format("woff2"); font-weight: 200 900; }
  @font-face { font-family: "CV Texto"; src: url("${fonte("mona-sans", "mona-sans-latin-wght-normal.woff2")}") format("woff2"); font-weight: 200 900; }
  @font-face { font-family: "CV Mono"; src: url("${fonte("jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 800; }

  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --texto: #1b1730; --suave: #57526b; --borda: #e2dfee; --tinta: #f4f2fa;
    --verde: #1f8a4c; --vivo: #4ade80; --violeta: #6d4fd8;
  }
  body {
    width: 210mm; min-height: 297mm; padding: 13mm 15mm 11mm;
    font-family: "CV Texto", system-ui, sans-serif; font-size: 9.3pt; line-height: 1.45;
    color: var(--texto); -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1, h2, h3 { font-family: "CV Display", system-ui, sans-serif; letter-spacing: -0.02em; }
  a { color: inherit; text-decoration: none; }

  header { display: flex; justify-content: space-between; align-items: flex-end; gap: 8mm; }
  .tag { display: inline-flex; align-items: center; gap: 2mm; font-family: "CV Mono", monospace; font-size: 8.5pt; color: var(--verde); }
  .tag::before { content: ""; width: 2.4mm; height: 2.4mm; border-radius: 50%; background: var(--vivo); box-shadow: 0 0 0 1mm #dcfce7; }
  h1 { margin-top: 2mm; font-size: 30pt; font-weight: 800; line-height: 1; }
  .contato { list-style: none; text-align: right; font-size: 8.6pt; color: var(--suave); line-height: 1.6; }
  .espectro { height: 1mm; margin: 5mm 0 4mm; border-radius: 1mm;
    background: linear-gradient(90deg, #f0525e, #f6c453, #4fd1c5, #5b9df5, #8b6cf0, #ec6aa8); }

  .resumo { font-size: 10.4pt; color: var(--suave); }
  section { margin-top: 5mm; }
  h2 { font-size: 12pt; font-weight: 800; padding-bottom: 1.5mm; margin-bottom: 3mm; border-bottom: 0.3mm solid var(--borda); }

  .cargo { display: flex; justify-content: space-between; align-items: baseline; }
  /* Sem letter-spacing negativo: senão leitores de ATS juntam as palavras. */
  .cargo h3 { font-size: 11pt; font-weight: 700; letter-spacing: 0; }
  .cargo h3 span { color: var(--violeta); }
  .periodo { font-family: "CV Mono", monospace; font-size: 8.4pt; color: var(--suave); }
  ul.pontos { margin-top: 2mm; padding-left: 4.5mm; }
  ul.pontos li { margin-bottom: 0.8mm; }
  ul.pontos li::marker { color: var(--violeta); }

  .stack { display: grid; grid-template-columns: 22mm 1fr; gap: 1.4mm 4mm; }
  .stack dt { font-family: "CV Mono", monospace; font-size: 8.4pt; font-weight: 600; color: var(--verde); padding-top: 0.3mm; }

  .colunas { display: grid; grid-template-columns: 1.15fr 1fr; gap: 8mm; }
  .lista { list-style: none; }
  .lista li { margin-bottom: 1.2mm; }
  .lista strong { font-weight: 650; }
  .lista span { color: var(--suave); }
</style>
</head>
<body>
  <header>
    <div>
      <span class="tag">${esc(c.titulo)}</span>
      <h1>Kauã Gabriel</h1>
    </div>
    <ul class="contato">
      <li>${esc(ct.local)} · ${esc(ct.telefone)}</li>
      <li><a href="mailto:${ct.email}">${ct.email}</a></li>
      <li><a href="https://${ct.linkedin}">${ct.linkedin}</a> · <a href="https://${ct.github}">${ct.github}</a></li>
      <li><a href="https://${ct.portfolio}">${ct.portfolio}</a></li>
    </ul>
  </header>
  <div class="espectro"></div>

  <p class="resumo">${esc(c.resumo)}</p>

  <section>
    <h2>${r.experiencia}</h2>
    ${c.experiencia
      .map(
        (e) => `
      <div class="cargo"><h3>${esc(e.cargo)} · <span>${esc(e.empresa)}</span></h3><span class="periodo">${esc(e.periodo)}</span></div>
      <ul class="pontos">${e.pontos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`,
      )
      .join("")}
  </section>

  <section>
    <h2>${r.stack}</h2>
    <dl class="stack">${c.stack.map(([g, t]) => `<dt>${esc(g)}</dt><dd>${esc(t)}</dd>`).join("")}</dl>
  </section>

  <div class="colunas">
    <div>
      <section>
        <h2>${r.projetos}</h2>
        <ul class="lista">${c.projetos.map(([n, d]) => `<li><strong>${esc(n)}</strong> — <span>${esc(d)}</span></li>`).join("")}</ul>
      </section>
      <section>
        <h2>${r.idiomas}</h2>
        <ul class="lista">${c.idiomas.map(([l, n]) => `<li><strong>${esc(l)}</strong> — <span>${esc(n)}</span></li>`).join("")}</ul>
      </section>
    </div>
    <div>
      <section>
        <h2>${r.formacao}</h2>
        <ul class="lista">${c.formacao.map(([curso, inst, st]) => `<li><strong>${esc(curso)}</strong> — <span>${esc(inst)}, ${esc(st)}</span></li>`).join("")}</ul>
      </section>
      <section>
        <h2>${r.cursos}</h2>
        <ul class="lista">${c.cursos.map((x) => `<li><span>${esc(x)}</span></li>`).join("")}</ul>
      </section>
    </div>
  </div>
</body>
</html>`;
}

async function abrirNavegador() {
  for (const channel of ["msedge", "chrome"]) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // tenta o próximo
    }
  }
  throw new Error("Nenhum Edge/Chrome encontrado para gerar o PDF.");
}

const navegador = await abrirNavegador();
try {
  for (const [idioma, conteudo] of Object.entries(CURRICULO)) {
    const pagina = await navegador.newPage();
    await pagina.setContent(html(idioma, conteudo), { waitUntil: "load" });
    // Força o carregamento das três fontes antes de imprimir.
    await pagina.evaluate(async () => {
      await Promise.all(["800 12px \"CV Display\"", "400 12px \"CV Texto\"", "400 12px \"CV Mono\""].map((f) => document.fonts.load(f)));
      await document.fonts.ready;
    });
    const saida = path.join(raiz, "public", conteudo.arquivo);
    await pagina.pdf({ path: saida, format: "A4", printBackground: true, preferCSSPageSize: true });
    console.log(`✓ public/${conteudo.arquivo}`);
    await pagina.close();
  }
} finally {
  await navegador.close();
}
