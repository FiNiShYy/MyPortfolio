import { useSyncExternalStore } from "react";

// Preferências de acessibilidade: viram atributos data-a11y-* no <html> (o CSS
// do globalStyle reage a eles) e ficam salvas no navegador. O index.html
// aplica a mesma chave antes do primeiro paint, para não piscar.
export const CHAVE = "acessibilidade";

export const PADRAO = {
  texto: 0, // degraus de 0 a 4 → 100%, 112,5%, 125%, 137,5%, 150%
  contraste: false,
  dislexia: false,
  espacamento: false,
  links: false,
  semAnimacao: false,
  guia: false,
  cursor: false,
  voz: false,
  vlibras: false,
  filtro: "nenhum", // nenhum | cinza | protanopia | deuteranopia | tritanopia
};

export const TEXTO_MAX = 4;

function ler() {
  try {
    return { ...PADRAO, ...JSON.parse(localStorage.getItem(CHAVE) || "{}") };
  } catch {
    return { ...PADRAO };
  }
}

let atual = ler();
const ouvintes = new Set();

function aplicar(p) {
  const html = document.documentElement;
  const marcar = (nome, ligado) => {
    if (ligado) html.setAttribute(`data-a11y-${nome}`, "");
    else html.removeAttribute(`data-a11y-${nome}`);
  };
  html.setAttribute("data-a11y-texto", String(p.texto));
  marcar("contraste", p.contraste);
  marcar("dislexia", p.dislexia);
  marcar("espacamento", p.espacamento);
  marcar("links", p.links);
  marcar("sem-animacao", p.semAnimacao);
  marcar("cursor", p.cursor);
  marcar("voz", p.voz);
  marcar("vlibras", p.vlibras);
  if (p.filtro === "nenhum") html.removeAttribute("data-a11y-filtro");
  else html.setAttribute("data-a11y-filtro", p.filtro);
}

aplicar(atual);

// Aceita objeto ou função (p => mudança), para cliques seguidos somarem certo.
export function definir(mudanca) {
  atual = { ...atual, ...(typeof mudanca === "function" ? mudanca(atual) : mudanca) };
  aplicar(atual);
  try {
    localStorage.setItem(CHAVE, JSON.stringify(atual));
  } catch {
    // Sem persistência: vale só para esta visita.
  }
  ouvintes.forEach((f) => f());
}

export function restaurar() {
  definir({ ...PADRAO });
}

export function animacoesPausadas() {
  return (
    atual.semAnimacao || Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
  );
}

export function usePreferencias() {
  return useSyncExternalStore(
    (f) => {
      ouvintes.add(f);
      return () => ouvintes.delete(f);
    },
    () => atual,
  );
}
