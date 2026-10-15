import { animacoesPausadas } from "../acessibilidade/preferencias";

// Rola até a seção sem gravar "#id" na URL nem no histórico.
// O deslocamento do cabeçalho fixo vem do scroll-padding-top do <html>.
// `instantaneo` é para troca de página: pula direto, sem animação.
export function rolarPara(id, { instantaneo = false } = {}) {
  const alvo = document.getElementById(id);
  if (!alvo) return;
  const suave = !instantaneo && !animacoesPausadas();
  alvo.scrollIntoView({ behavior: suave ? "smooth" : "instant", block: "start" });
}

// Handler para <a href="#id">: mantém o link semântico (ctrl/meio-clique
// continuam funcionando) mas evita o salto e o hash no clique normal.
export function aoClicarAncora(id, depois) {
  return (evento) => {
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.button !== 0) return;
    evento.preventDefault();
    rolarPara(id);
    depois?.();
  };
}
