// Trechos ilustrativos (dados fictícios) exibidos ao lado de cada tipo de
// sistema. O comentário da primeira linha vem do i18n
// (conteudo:construo.itens.<id>.comentario), o resto é código e não traduz.
export const TRECHOS = {
  integracoes: {
    arquivo: "negociacao.http",
    codigo: `POST /negociacao/simular
{
  "documento": "***.***.***-00",
  "parcelas": 6
}

200 OK
{
  "entrada": 129.90,
  "parcelas": 6,
  "formas": ["pix", "boleto"]
}`,
  },
  agentes: {
    arquivo: "mcp/ferramentas.js",
    codigo: `server.tool(
  "listar_pendencias",
  { carteira: z.string() },
  async ({ carteira }) => {
    const itens = await pendencias.buscar(carteira);
    return { content: [{ type: "text", text: resumo(itens) }] };
  }
);`,
  },
  portais: {
    arquivo: "portal/resolver.js",
    codigo: `const portal = await resolverPortal(req.hostname);

portal.tema    // { primaria, fonte, radius }
portal.blocos  // hero, passos, faq...
portal.idioma  // "pt-BR" | "en" | "es"`,
  },
  servicos: {
    arquivo: "terminal",
    codigo: `$ docker compose up -d api
✔ Container api  Started

$ npx playwright test
  ✓ consulta de dívidas
  ✓ simulação de acordo
  ✓ emissão de boleto
  ✓ pagamento via pix`,
  },
};

// Realce mínimo: comentários, strings, números, palavras-chave e prompt.
// Não é um parser — só precisa deixar os trechos acima legíveis.
const PADRAO =
  /((?:\/\/|^#).*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:const|await|async|return|POST|GET|OK)\b)|(^\$|✔|✓)/gm;

export function realcar(codigo) {
  const pedacos = [];
  let ultimo = 0;
  for (const m of codigo.matchAll(PADRAO)) {
    if (m.index > ultimo) pedacos.push({ tipo: "texto", texto: codigo.slice(ultimo, m.index) });
    const tipo = m[1] ? "comentario" : m[2] ? "string" : m[3] ? "numero" : m[4] ? "chave" : "prompt";
    pedacos.push({ tipo, texto: m[0] });
    ultimo = m.index + m[0].length;
  }
  if (ultimo < codigo.length) pedacos.push({ tipo: "texto", texto: codigo.slice(ultimo) });
  return pedacos;
}
