import { useTranslation } from "react-i18next";
import { LuArrowUpRight } from "react-icons/lu";

import { INSPIRACOES } from "../../dados/inspiracoes";
import { Revelar, Secao } from "../ui";
import * as S from "./styles";

const Inspiracoes = () => {
  const { t } = useTranslation("conteudo");

  return (
    <Secao id="inspiracoes" titulo={t("inspiracoes.titulo")} sub={t("inspiracoes.sub")}>
      <S.Grade>
        {INSPIRACOES.map((pessoa, i) => {
          const avatar = (
            <S.Iniciais $cor={pessoa.cor} $grande={pessoa.largo} aria-hidden="true">
              {pessoa.foto ? <img src={pessoa.foto} alt="" loading="lazy" /> : pessoa.iniciais}
            </S.Iniciais>
          );
          const textos = (
            <>
              <h3>{pessoa.nome}</h3>
              <S.Papel $cor={pessoa.cor}>{t(`inspiracoes.itens.${pessoa.id}.papel`)}</S.Papel>
              <p>{t(`inspiracoes.itens.${pessoa.id}.texto`)}</p>
            </>
          );
          return (
            <S.Item key={pessoa.id} $destaque={pessoa.destaque} $largo={pessoa.largo}>
              <Revelar atraso={(i % 4) * 80}>
                {pessoa.largo ? (
                  // Card de linha inteira: avatar ao lado do texto, sem link.
                  <S.CartaoLargo $cor={pessoa.cor}>
                    {avatar}
                    <div>{textos}</div>
                  </S.CartaoLargo>
                ) : (
                  <S.Cartao href={pessoa.link} target="_blank" rel="noopener noreferrer" $cor={pessoa.cor}>
                    <S.Topo>
                      {avatar}
                      <LuArrowUpRight className="seta" aria-hidden="true" />
                    </S.Topo>
                    {textos}
                    <S.Usuario>{pessoa.usuario}</S.Usuario>
                  </S.Cartao>
                )}
              </Revelar>
            </S.Item>
          );
        })}
      </S.Grade>
      <Revelar>
        <S.Destaque>
          <h3>{t("inspiracoes.destaque.titulo")}</h3>
          <p>{t("inspiracoes.destaque.texto")}</p>
        </S.Destaque>
      </Revelar>
    </Secao>
  );
};

export default Inspiracoes;
