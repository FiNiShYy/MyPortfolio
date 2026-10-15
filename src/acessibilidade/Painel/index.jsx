import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LuAccessibility,
  LuContrast,
  LuHand,
  LuLetterText,
  LuLink,
  LuMinus,
  LuMousePointer2,
  LuPause,
  LuPlus,
  LuRotateCcw,
  LuScanLine,
  LuSpace,
  LuVolume2,
  LuX,
} from "react-icons/lu";

import { definir, restaurar, TEXTO_MAX, usePreferencias } from "../preferencias";
import * as S from "./styles";

const OPCOES = [
  { id: "contraste", Icone: LuContrast },
  { id: "dislexia", Icone: LuLetterText },
  { id: "espacamento", Icone: LuSpace },
  { id: "links", Icone: LuLink },
  { id: "semAnimacao", Icone: LuPause },
  { id: "guia", Icone: LuScanLine },
  { id: "cursor", Icone: LuMousePointer2 },
  { id: "voz", Icone: LuVolume2 },
  { id: "vlibras", Icone: LuHand },
];

const FILTROS = ["nenhum", "cinza", "protanopia", "deuteranopia", "tritanopia"];
const PORCENTAGEM = [100, 112.5, 125, 137.5, 150];

const Painel = () => {
  const { t } = useTranslation();
  const prefs = usePreferencias();
  const [aberto, setAberto] = useState(false);
  const painel = useRef(null);
  const gatilho = useRef(null);

  // A fonte para dislexia só é baixada quando alguém liga a opção.
  useEffect(() => {
    if (prefs.dislexia) import("@fontsource/opendyslexic/400.css");
  }, [prefs.dislexia]);

  // Esc fecha; clique fora fecha; ao abrir o foco vai para o painel.
  useEffect(() => {
    if (!aberto) return undefined;
    painel.current?.querySelector("button")?.focus();
    const aoTeclar = (e) => {
      if (e.key === "Escape") {
        setAberto(false);
        gatilho.current?.focus();
      }
    };
    const aoClicarFora = (e) => {
      if (!painel.current?.contains(e.target) && !gatilho.current?.contains(e.target)) setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    document.addEventListener("pointerdown", aoClicarFora);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.removeEventListener("pointerdown", aoClicarFora);
    };
  }, [aberto]);

  const pularParaConteudo = (e) => {
    e.preventDefault();
    const main = document.getElementById("conteudo");
    main?.focus();
    main?.scrollIntoView();
  };

  return (
    <>
      <S.Pular href="#conteudo" onClick={pularParaConteudo}>
        {t("acessibilidade.pular")}
      </S.Pular>

      <S.Gatilho
        ref={gatilho}
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="painel-acessibilidade"
        aria-label={t("acessibilidade.abrir")}
        title={t("acessibilidade.abrir")}
      >
        <LuAccessibility aria-hidden="true" />
      </S.Gatilho>

      {aberto && (
        <S.Painel
          ref={painel}
          id="painel-acessibilidade"
          role="dialog"
          aria-labelledby="painel-acessibilidade-titulo"
        >
          <S.Topo>
            <h2 id="painel-acessibilidade-titulo">{t("acessibilidade.titulo")}</h2>
            <S.Fechar type="button" onClick={() => setAberto(false)} aria-label={t("acoes.fechar")}>
              <LuX aria-hidden="true" />
            </S.Fechar>
          </S.Topo>

          <S.Rotulo id="a11y-tamanho">{t("acessibilidade.texto")}</S.Rotulo>
          <S.Tamanho role="group" aria-labelledby="a11y-tamanho">
            <S.BotaoRedondo
              type="button"
              onClick={() => definir((p) => ({ texto: Math.max(0, p.texto - 1) }))}
              disabled={prefs.texto <= 0}
              aria-label={t("acessibilidade.diminuir")}
            >
              <LuMinus aria-hidden="true" />
            </S.BotaoRedondo>
            <output aria-live="polite">{PORCENTAGEM[prefs.texto]}%</output>
            <S.BotaoRedondo
              type="button"
              onClick={() => definir((p) => ({ texto: Math.min(TEXTO_MAX, p.texto + 1) }))}
              disabled={prefs.texto >= TEXTO_MAX}
              aria-label={t("acessibilidade.aumentar")}
            >
              <LuPlus aria-hidden="true" />
            </S.BotaoRedondo>
          </S.Tamanho>

          <S.Rotulo>{t("acessibilidade.ferramentas")}</S.Rotulo>
          <S.Grade>
            {OPCOES.map(({ id, Icone }) => (
              <S.Opcao
                key={id}
                type="button"
                aria-pressed={prefs[id]}
                onClick={() => definir((p) => ({ [id]: !p[id] }))}
              >
                <Icone aria-hidden="true" />
                {t(`acessibilidade.opcoes.${id}`)}
              </S.Opcao>
            ))}
          </S.Grade>
          {prefs.voz && <S.Dica>{t("acessibilidade.dicaVoz")}</S.Dica>}

          <S.Rotulo id="a11y-filtros">{t("acessibilidade.filtros")}</S.Rotulo>
          <S.Filtros role="group" aria-labelledby="a11y-filtros">
            {FILTROS.map((f) => (
              <S.Filtro
                key={f}
                type="button"
                aria-pressed={prefs.filtro === f}
                onClick={() => definir({ filtro: f })}
              >
                {t(`acessibilidade.filtrosNomes.${f}`)}
              </S.Filtro>
            ))}
          </S.Filtros>

          <S.Restaurar type="button" onClick={restaurar}>
            <LuRotateCcw aria-hidden="true" />
            {t("acessibilidade.restaurar")}
          </S.Restaurar>
        </S.Painel>
      )}
    </>
  );
};

export default Painel;
