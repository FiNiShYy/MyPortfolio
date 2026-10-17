import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

const SITE = "https://cabeludo.dev";
const PAGINAS = ["/", "/blog", "/bastidores"];
const dataBuild = new Date().toISOString();
const versao = JSON.parse(fs.readFileSync("package.json", "utf8")).version;

// Números da página Bastidores, calculados a cada build para nunca envelhecer.
function estatisticasDoRepo() {
  const src = path.resolve("src");
  let arquivos = 0;
  let linhas = 0;
  const visitar = (dir) => {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const caminho = path.join(dir, item.name);
      if (item.isDirectory()) visitar(caminho);
      else if (/\.(jsx?|json)$/.test(item.name)) {
        arquivos += 1;
        linhas += fs.readFileSync(caminho, "utf8").split("\n").length;
      }
    }
  };
  visitar(src);

  const componentes = fs
    .readdirSync(path.join(src, "components"), { withFileTypes: true })
    .filter((d) => d.isDirectory()).length;

  const contarFolhas = (obj) =>
    Object.values(obj).reduce((n, v) => n + (v && typeof v === "object" ? contarFolhas(v) : 1), 0);
  const locales = path.join(src, "i18n/locales/pt-BR");
  const chaves = fs
    .readdirSync(locales)
    .reduce((n, arq) => n + contarFolhas(JSON.parse(fs.readFileSync(path.join(locales, arq), "utf8"))), 0);

  const pacote = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const dependencias = Object.keys(pacote.dependencies || {}).length;

  return { arquivos, linhas, componentes, chaves, dependencias };
}

// Gera o sitemap.xml no build, com lastmod igual à data do deploy.
function sitemap() {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      const dia = dataBuild.slice(0, 10);
      const urls = [...PAGINAS.map((p) => `${SITE}${p}`), `${SITE}/llms.txt`]
        .map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${dia}</lastmod>\n  </url>`)
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
  define: {
    // Data do build, mostrada no rodapé como "última atualização".
    __ULTIMA_ATUALIZACAO__: JSON.stringify(dataBuild),
    __ESTATISTICAS__: JSON.stringify(estatisticasDoRepo()),
    // Versão do package.json, mostrada no rodapé. Suba a versão a cada mudança visível.
    __VERSAO__: JSON.stringify(versao),
  },
});
