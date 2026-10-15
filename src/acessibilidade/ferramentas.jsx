import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuCircleStop } from "react-icons/lu";
import styled from "styled-components";

import { usePreferencias } from "./preferencias";

/* ---------- Guia de leitura: escurece tudo menos uma faixa na altura do mouse ---------- */

const Mascara = styled.div`
  position: fixed;
  inset: 0;
  z-index: 90;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: oklch(10% 0.02 285 / 0.6);
  }

  /* --y é a posição do mouse; a faixa livre tem 6rem de altura. */
  &::before {
    top: 0;
    height: max(0px, calc(var(--y, 50vh) - 3rem));
  }
  &::after {
    top: calc(var(--y, 50vh) + 3rem);
    bottom: 0;
  }
`;

export function GuiaLeitura() {
  const { guia } = usePreferencias();
  const [y, setY] = useState(null);

  useEffect(() => {
    if (!guia) return undefined;
    const mover = (e) => setY(e.clientY);
    window.addEventListener("pointermove", mover, { passive: true });
    return () => window.removeEventListener("pointermove", mover);
  }, [guia]);

  if (!guia) return null;
  return (
    <Mascara
      aria-hidden="true"
      // eslint-disable-next-line no-restricted-syntax -- inline-dinamico: posição do mouse
      style={y == null ? undefined : { "--y": `${y}px` }}
    />
  );
}

/* ---------- Leitura em voz alta: clicar num texto lê ele com a voz do navegador ---------- */

const Parar = styled.button`
  position: fixed;
  left: 50%;
  bottom: 1.5rem;
  z-index: 95;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  background: var(--tinta-escura);
  color: var(--sobre-tinta);
  font-family: var(--fonte-display);
  font-weight: 700;
  box-shadow: var(--sombra);

  svg {
    color: var(--vivo-ambar);
  }
`;

const LEGIVEIS = "p, h1, h2, h3, li, blockquote, figcaption";

export function LeitorVoz() {
  const { voz } = usePreferencias();
  const { t, i18n } = useTranslation();
  const [falando, setFalando] = useState(false);
  const atual = useRef(null);

  const parar = () => {
    window.speechSynthesis?.cancel();
    atual.current?.classList.remove("a11y-lendo");
    atual.current = null;
    setFalando(false);
  };

  useEffect(() => {
    if (!voz || !("speechSynthesis" in window)) return undefined;

    const aoClicar = (e) => {
      if (e.target.closest("a, button, input, select, textarea, [role='dialog']")) return;
      const el = e.target.closest(`main :is(${LEGIVEIS})`);
      if (!el) return;
      const texto = el.innerText.trim();
      if (!texto) return;

      window.speechSynthesis.cancel();
      atual.current?.classList.remove("a11y-lendo");
      const fala = new SpeechSynthesisUtterance(texto);
      fala.lang = i18n.language === "en" ? "en-US" : "pt-BR";
      fala.onend = fala.onerror = () => {
        el.classList.remove("a11y-lendo");
        if (atual.current === el) {
          atual.current = null;
          setFalando(false);
        }
      };
      el.classList.add("a11y-lendo");
      atual.current = el;
      setFalando(true);
      window.speechSynthesis.speak(fala);
    };

    document.addEventListener("click", aoClicar);
    return () => {
      document.removeEventListener("click", aoClicar);
      parar();
    };
  }, [voz, i18n.language]);

  if (!voz || !falando) return null;
  return (
    <Parar type="button" onClick={parar}>
      <LuCircleStop aria-hidden="true" />
      {t("acessibilidade.pararLeitura")}
    </Parar>
  );
}

/* ---------- VLibras: widget oficial do governo, carregado só quando ligado ---------- */

// A partir da versão 7.x o plugin se monta sozinho: cria #vlibras-access-wrapper
// (botão em shadow DOM) ao carregar e #vlibras-app-root quando é aberto. Por isso
// só injetamos o script uma vez; desligar a opção apenas esconde os dois via CSS.
const URL_VLIBRAS = "https://vlibras.gov.br/app";
let vlibrasCarregado = false;

export function VLibras() {
  const { vlibras } = usePreferencias();

  useEffect(() => {
    if (!vlibras || vlibrasCarregado) return;
    vlibrasCarregado = true;
    const script = document.createElement("script");
    script.src = `${URL_VLIBRAS}/vlibras-plugin.js`;
    script.onload = () => new window.VLibras.Widget(URL_VLIBRAS);
    document.body.appendChild(script);
  }, [vlibras]);

  return null;
}
