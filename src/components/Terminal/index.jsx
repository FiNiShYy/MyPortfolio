import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { animacoesPausadas, usePreferencias } from "../../acessibilidade/preferencias";
import * as S from "./styles";

const VELOCIDADE_DIGITACAO = 45;
const PAUSA_SAIDA = 140;
const PAUSA_APOS_CMD = 380;

// Comandos são "digitados" caractere a caractere; saídas aparecem inteiras.
// Quem pede menos movimento (sistema ou painel de acessibilidade) vê o
// terminal completo de cara.
const Terminal = () => {
  const { t, i18n } = useTranslation("conteudo");
  const { semAnimacao } = usePreferencias();
  const linhas = t("terminal.linhas", { returnObjects: true });

  const [linhaAtual, setLinhaAtual] = useState(0);
  const [caracteres, setCaracteres] = useState(0);

  // Recomeça a animação quando o idioma muda.
  useEffect(() => {
    if (animacoesPausadas()) {
      setLinhaAtual(linhas.length);
      return;
    }
    setLinhaAtual(0);
    setCaracteres(0);
  }, [i18n.language, linhas.length]);

  // Ligar "pausar animações" no meio da digitação completa o terminal na hora.
  useEffect(() => {
    if (semAnimacao) setLinhaAtual(linhas.length);
  }, [semAnimacao, linhas.length]);

  useEffect(() => {
    if (linhaAtual >= linhas.length) return undefined;
    const linha = linhas[linhaAtual];

    if (linha.tipo !== "cmd") {
      const id = setTimeout(() => setLinhaAtual((n) => n + 1), PAUSA_SAIDA);
      return () => clearTimeout(id);
    }
    if (caracteres < linha.texto.length) {
      const id = setTimeout(() => setCaracteres((c) => c + 1), VELOCIDADE_DIGITACAO);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setLinhaAtual((n) => n + 1);
      setCaracteres(0);
    }, PAUSA_APOS_CMD);
    return () => clearTimeout(id);
  }, [linhaAtual, caracteres, linhas]);

  const terminou = linhaAtual >= linhas.length;

  return (
    <S.Janela role="img" aria-label={linhas.map((l) => l.texto).join(". ")}>
      <S.Barra aria-hidden="true">
        <S.Bolinha $cor="vermelho" />
        <S.Bolinha $cor="ambar" />
        <S.Bolinha $cor="verde" />
        <S.NomeJanela>{t("terminal.titulo")}</S.NomeJanela>
      </S.Barra>
      <S.Corpo aria-hidden="true">
        {linhas.slice(0, Math.min(linhaAtual + 1, linhas.length)).map((linha, i) => {
          const digitando = i === linhaAtual && linha.tipo === "cmd";
          if (i === linhaAtual && linha.tipo !== "cmd") return null;
          return (
            <S.Linha key={`${i18n.language}-${i}`} $tipo={linha.tipo}>
              {digitando ? linha.texto.slice(0, caracteres) : linha.texto}
              {digitando && <S.Cursor />}
            </S.Linha>
          );
        })}
        {terminou && (
          <S.Linha $tipo="cmd">
            <S.Cursor />
          </S.Linha>
        )}
      </S.Corpo>
    </S.Janela>
  );
};

export default Terminal;
