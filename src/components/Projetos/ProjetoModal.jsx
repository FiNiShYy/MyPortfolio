import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LuArrowUpRight, LuX } from "react-icons/lu";

import { Botao, Chip, Tag } from "../ui";
import * as S from "./styles";

// <dialog> nativo: foco preso, Esc fecha e o backdrop vem de graça.
const ProjetoModal = ({ projeto, aoFechar }) => {
  const { t } = useTranslation(["conteudo", "comum"]);
  const ref = useRef(null);

  useEffect(() => {
    const dialogo = ref.current;
    if (projeto && !dialogo.open) dialogo.showModal();
    if (!projeto && dialogo.open) dialogo.close();
  }, [projeto]);

  // Clique fora do conteúdo (no backdrop) fecha.
  const aoClicar = (e) => {
    if (e.target === ref.current) aoFechar();
  };

  const chave = projeto && `projetos.itens.${projeto.id}`;

  return (
    <S.Dialogo ref={ref} onClose={aoFechar} onClick={aoClicar} aria-labelledby="projeto-titulo">
      {projeto && (
        <>
          <S.Fechar type="button" onClick={aoFechar} aria-label={t("comum:acoes.fechar")}>
            <LuX />
          </S.Fechar>
          <S.ImagemModal src={projeto.imagem} alt="" />
          <S.ConteudoModal $cor={projeto.cor}>
            <Tag $cor={projeto.cor}>{t(`${chave}.tipo`)}</Tag>
            <h3 id="projeto-titulo">{t(`${chave}.titulo`)}</h3>
            <p>{t(`${chave}.resumo`)}</p>
            <ul>
              {t(`${chave}.detalhes`, { returnObjects: true }).map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <S.AcoesModal>
              {projeto.link ? (
                <Botao href={projeto.link} target="_blank" rel="noopener noreferrer">
                  {t("comum:acoes.visitar")}
                  <LuArrowUpRight aria-hidden="true" />
                </Botao>
              ) : (
                <Chip>{t("comum:acoes.arquivado")}</Chip>
              )}
              {projeto.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </S.AcoesModal>
          </S.ConteudoModal>
        </>
      )}
    </S.Dialogo>
  );
};

export default ProjetoModal;
