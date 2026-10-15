// Gera os ícones (favicon, apple-touch, manifest) e a imagem de compartilhamento
// (Open Graph 1200×630) em public/, com as fontes e cores do site.
// Renderiza HTML no Edge/Chrome instalado via playwright-core, como o currículo.
// Uso: npm run marca
import { chromium } from "playwright-core";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const publico = path.join(raiz, "public");

const fonte = (pacote, arquivo) => {
  const bytes = fs.readFileSync(path.join(raiz, "node_modules/@fontsource-variable", pacote, "files", arquivo));
  return `data:font/woff2;base64,${bytes.toString("base64")}`;
};
const foto = `data:image/webp;base64,${fs.readFileSync(path.join(publico, "kaua.webp")).toString("base64")}`;

// Mesmos tokens do globalStyle (tema claro + card de terminal).
const BASE = `
  @font-face { font-family: "Display"; src: url("${fonte("hubot-sans", "hubot-sans-latin-wght-normal.woff2")}") format("woff2"); font-weight: 200 900; }
  @font-face { font-family: "Texto"; src: url("${fonte("mona-sans", "mona-sans-latin-wght-normal.woff2")}") format("woff2"); font-weight: 200 900; }
  @font-face { font-family: "Mono"; src: url("${fonte("jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2")}") format("woff2"); font-weight: 100 800; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: transparent; }
  :root {
    --fundo: oklch(98.4% 0.006 285); --texto: oklch(21% 0.04 285); --texto-suave: oklch(42% 0.035 285);
    --tinta-escura: oklch(18% 0.045 285); --tinta-escura-elevada: oklch(23% 0.05 285);
    --sobre-tinta: oklch(95% 0.012 285); --sobre-tinta-suave: oklch(74% 0.03 285);
    --verde-forte: oklch(40% 0.12 150); --verde-suave: oklch(95.5% 0.03 150);
    --vivo-verde: oklch(85% 0.2 150); --vivo-vermelho: oklch(65% 0.23 27); --vivo-ambar: oklch(84% 0.155 80);
    --vivo-teal: oklch(80% 0.13 190); --vivo-azul: oklch(70% 0.163 250); --vivo-violeta: oklch(62% 0.22 288);
    --vivo-rosa: oklch(70% 0.2 350);
    --espectro: linear-gradient(90deg in oklch, var(--vivo-vermelho), var(--vivo-ambar), var(--vivo-teal), var(--vivo-azul), var(--vivo-violeta), var(--vivo-rosa));
  }
`;

const ICONE = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE}
  #icone {
    position: relative; width: 512px; height: 512px; border-radius: 116px;
    background: radial-gradient(120% 90% at 85% 0%, var(--tinta-escura-elevada), var(--tinta-escura) 60%);
    display: grid; place-items: center; overflow: hidden;
  }
  #icone span.k {
    font-family: "Display"; font-weight: 900; font-size: 360px; line-height: 1;
    letter-spacing: -0.04em; color: var(--sobre-tinta); transform: translate(-46px, 10px);
  }
  #icone span.ponto {
    position: absolute; top: 62px; right: 62px; width: 80px; height: 80px; border-radius: 50%;
    background: var(--vivo-verde); box-shadow: 0 0 0 22px color-mix(in oklch, var(--vivo-verde) 22%, transparent);
  }
  #icone span.barra { position: absolute; left: 0; right: 0; bottom: 0; height: 26px; background: var(--espectro); }
</style></head><body><div id="icone"><span class="k">K</span><span class="ponto"></span><span class="barra"></span></div></body></html>`;

const OG = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE}
  #og {
    position: relative; width: 1200px; height: 630px; overflow: hidden; background: var(--fundo);
    display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 56px; padding: 0 72px;
    font-family: "Texto"; color: var(--texto);
  }
  #og::before {
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(520px 380px at 88% 22%, color-mix(in oklch, var(--vivo-violeta) 20%, transparent), transparent 70%),
      radial-gradient(420px 300px at 72% 95%, color-mix(in oklch, var(--vivo-verde) 18%, transparent), transparent 70%);
  }
  .texto { position: relative; }
  .tag { display: inline-flex; align-items: center; gap: 12px; white-space: nowrap; font-family: "Mono"; font-size: 19px; color: var(--verde-forte); }
  .tag::before { content: ""; width: 14px; height: 14px; border-radius: 50%; background: var(--vivo-verde); box-shadow: 0 0 0 6px var(--verde-suave); }
  h1 { margin-top: 26px; font-family: "Display"; font-weight: 800; font-size: 104px; line-height: 0.95; letter-spacing: -0.045em; }
  .espectro { width: 260px; height: 5px; border-radius: 5px; margin: 30px 0; background: var(--espectro); }
  p { font-size: 27px; line-height: 1.45; color: var(--texto-suave); max-width: 560px; }
  .rodape { display: flex; align-items: center; gap: 16px; margin-top: 34px; font-family: "Mono"; font-size: 20px; color: var(--texto-suave); }
  .rodape img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 3px white, 0 0 0 4px oklch(89% 0.022 285); }
  .terminal {
    position: relative; border-radius: 20px; overflow: hidden; background: var(--tinta-escura); color: var(--sobre-tinta);
    font-family: "Mono"; font-size: 21px; line-height: 1.75;
    box-shadow: 0 2px 4px oklch(20% 0.05 285 / 0.1), 0 30px 70px -20px oklch(20% 0.05 285 / 0.45);
  }
  .barra { display: flex; gap: 10px; align-items: center; padding: 16px 20px; background: var(--tinta-escura-elevada); color: var(--sobre-tinta-suave); font-size: 17px; }
  .barra i { width: 13px; height: 13px; border-radius: 50%; }
  .corpo { padding: 22px 26px 26px; }
  .cmd::before { content: "$ "; color: var(--vivo-verde); }
  .saida { color: var(--sobre-tinta-suave); }
  .ok { color: var(--vivo-verde); }
</style></head><body>
<div id="og">
  <div class="texto">
    <span class="tag">Desenvolvedor full stack · Salt Systems</span>
    <h1>Kauã<br>Gabriel</h1>
    <div class="espectro"></div>
    <p>APIs, integrações financeiras e agentes de IA para fintechs de crédito e cobrança.</p>
    <div class="rodape"><img src="${foto}" alt=""><span>cabeludo.dev</span></div>
  </div>
  <div class="terminal">
    <div class="barra"><i style="background:var(--vivo-vermelho)"></i><i style="background:var(--vivo-ambar)"></i><i style="background:var(--vivo-verde)"></i><span style="margin-left:10px">kaua@dev: ~</span></div>
    <div class="corpo">
      <div class="cmd">cat stack.txt</div>
      <div class="saida">react · typescript · node</div>
      <div class="saida">mongodb · redis · docker</div>
      <div class="saida">claude api · mcp · livekit</div>
      <div class="cmd">status</div>
      <div class="ok">● aberto a boas conversas</div>
    </div>
  </div>
</div></body></html>`;

// ICO com PNGs embutidos (formato aceito por todos os navegadores desde o IE Vista).
function montarIco(pngs) {
  const cabecalho = Buffer.alloc(6);
  cabecalho.writeUInt16LE(0, 0);
  cabecalho.writeUInt16LE(1, 2);
  cabecalho.writeUInt16LE(pngs.length, 4);
  const entradas = [];
  let deslocamento = 6 + 16 * pngs.length;
  for (const { tamanho, dados } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 0);
    e.writeUInt8(tamanho >= 256 ? 0 : tamanho, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(dados.length, 8);
    e.writeUInt32LE(deslocamento, 12);
    deslocamento += dados.length;
    entradas.push(e);
  }
  return Buffer.concat([cabecalho, ...entradas, ...pngs.map((p) => p.dados)]);
}

async function abrirNavegador() {
  for (const channel of ["msedge", "chrome"]) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // tenta o próximo
    }
  }
  throw new Error("Nenhum Edge/Chrome encontrado.");
}

async function capturar(navegador, html, seletor, largura, altura, transparente) {
  const pagina = await navegador.newPage({ viewport: { width: largura, height: altura } });
  await pagina.setContent(html, { waitUntil: "load" });
  await pagina.evaluate(async () => {
    await Promise.all(['900 40px "Display"', '400 20px "Texto"', '400 20px "Mono"'].map((f) => document.fonts.load(f)));
    await document.fonts.ready;
  });
  const png = await pagina.locator(seletor).screenshot({ omitBackground: transparente });
  await pagina.close();
  return png;
}

const navegador = await abrirNavegador();
try {
  const icone = await capturar(navegador, ICONE, "#icone", 512, 512, true);
  const tam = (n) => sharp(icone).resize(n, n).png().toBuffer();

  fs.writeFileSync(path.join(publico, "icone-512.png"), await tam(512));
  fs.writeFileSync(path.join(publico, "icone-192.png"), await tam(192));
  fs.writeFileSync(path.join(publico, "apple-touch-icon.png"), await tam(180));
  fs.writeFileSync(path.join(publico, "favicon-32.png"), await tam(32));
  fs.writeFileSync(
    path.join(publico, "favicon.ico"),
    montarIco([
      { tamanho: 16, dados: await tam(16) },
      { tamanho: 32, dados: await tam(32) },
      { tamanho: 48, dados: await tam(48) },
    ]),
  );
  console.log("✓ favicon.ico, favicon-32.png, apple-touch-icon.png, icone-192/512.png");

  const og = await capturar(navegador, OG, "#og", 1200, 630, false);
  await sharp(og).png({ compressionLevel: 9 }).toFile(path.join(publico, "og.png"));
  console.log("✓ og.png (1200×630)");
} finally {
  await navegador.close();
}
