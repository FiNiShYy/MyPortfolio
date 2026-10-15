import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import comumPt from "./locales/pt-BR/comum.json";
import conteudoPt from "./locales/pt-BR/conteudo.json";
import comumEn from "./locales/en/comum.json";
import conteudoEn from "./locales/en/conteudo.json";

export const IDIOMAS = ["pt-BR", "en"];
const CHAVE = "idioma";

// Preferência salva > idioma do navegador > pt-BR. São só dois idiomas e o
// conteúdo é pequeno, então os dois vão no bundle (sem import dinâmico).
function detectarIdioma() {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (IDIOMAS.includes(salvo)) return salvo;
  } catch {
    // localStorage bloqueado (aba anônima etc.): segue para o navegador.
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { comum: comumPt, conteudo: conteudoPt },
    en: { comum: comumEn, conteudo: conteudoEn },
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
