// Rola suavemente até a seção sem gravar "#id" na URL nem no histórico.
// O deslocamento do cabeçalho fixo vem do scroll-padding-top do <html>.
export function rolarPara(id) {
  const alvo = document.getElementById(id);
  if (!alvo) return;
  const poucoMovimento = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  alvo.scrollIntoView({ behavior: poucoMovimento ? "auto" : "smooth", block: "start" });
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
