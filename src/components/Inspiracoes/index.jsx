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
        {INSPIRACOES.map((pessoa, i) => (
          <S.Item key={pessoa.id} $destaque={pessoa.destaque}>
            <Revelar atraso={(i % 4) * 80}>
              <S.Cartao href={pessoa.link} target="_blank" rel="noopener noreferrer" $cor={pessoa.cor}>
                <S.Topo>
                  <S.Iniciais $cor={pessoa.cor} aria-hidden="true">
                    {pessoa.foto ? <img src={pessoa.foto} alt="" loading="lazy" /> : pessoa.iniciais}
                  </S.Iniciais>
                  <LuArrowUpRight className="seta" aria-hidden="true" />
                </S.Topo>
                <h3>{pessoa.nome}</h3>
                <S.Papel $cor={pessoa.cor}>{t(`inspiracoes.itens.${pessoa.id}.papel`)}</S.Papel>
                <p>{t(`inspiracoes.itens.${pessoa.id}.texto`)}</p>
                <S.Usuario>{pessoa.usuario}</S.Usuario>
              </S.Cartao>
            </Revelar>
          </S.Item>
        ))}
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
