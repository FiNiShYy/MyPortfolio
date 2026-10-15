import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const SITE = "https://my-portfolio-kaua.vercel.app";
const dataBuild = new Date().toISOString();

// Gera o sitemap.xml no build, com lastmod igual à data do deploy.
function sitemap() {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${dataBuild.slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE}/llms.txt</loc>
    <lastmod>${dataBuild.slice(0, 10)}</lastmod>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
  // Data do build, mostrada no rodapé como "última atualização".
  define: {
    __ULTIMA_ATUALIZACAO__: JSON.stringify(dataBuild),
  },
});
