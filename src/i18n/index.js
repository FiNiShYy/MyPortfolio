import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import comumPt from "./locales/pt-BR/comum.json";
import conteudoPt from "./locales/pt-BR/conteudo.json";
import comumEn from "./locales/en/comum.json";
import conteudoEn from "./locales/en/conteudo.json";
import comumEs from "./locales/es/comum.json";
import conteudoEs from "./locales/es/conteudo.json";

// Idioma > sigla mostrada no seletor do cabeçalho.
export const IDIOMAS = { "pt-BR": "PT", en: "EN", es: "ES" };
const CHAVE = "idioma";

// Preferência salva > idioma do navegador > inglês. O conteúdo é pequeno, então
// todos os idiomas vão no bundle (sem import dinâmico).
function detectarIdioma() {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo in IDIOMAS) return salvo;
  } catch {
    // localStorage bloqueado (aba anônima etc.): segue para o navegador.
  }
  const navegador = navigator.language?.toLowerCase() ?? "";
  if (navegador.startsWith("pt")) return "pt-BR";
  if (navegador.startsWith("es")) return "es";
  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { comum: comumPt, conteudo: conteudoPt },
    en: { comum: comumEn, conteudo: conteudoEn },
    es: { comum: comumEs, conteudo: conteudoEs },
  },
  lng: detectarIdioma(),
  fallbackLng: "pt-BR",
  ns: ["comum", "conteudo"],
  defaultNS: "comum",
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

document.documentElement.lang = i18n.language;

export function trocarIdioma(idioma) {
  i18n.changeLanguage(idioma);
  document.documentElement.lang = idioma;
  try {
    localStorage.setItem(CHAVE, idioma);
  } catch {
    // Sem persistência: a troca vale só para esta visita.
  }
}

export default i18n;
