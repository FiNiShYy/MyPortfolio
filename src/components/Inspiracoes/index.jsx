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
          // Sem link (ex.: família), o card é um article comum, sem seta nem hover de link.
          const propsLink = pessoa.link
            ? { href: pessoa.link, target: "_blank", rel: "noopener noreferrer", $link: true }
            : { as: "article" };
          return (
            <S.Item key={pessoa.id} $destaque={pessoa.destaque}>
              <Revelar atraso={(i % 4) * 80}>
                <S.Cartao $cor={pessoa.cor} {...propsLink}>
                  <S.Topo>
                    <S.Iniciais $cor={pessoa.cor} aria-hidden="true">
                      {pessoa.foto ? <img src={pessoa.foto} alt="" loading="lazy" /> : pessoa.iniciais}
                    </S.Iniciais>
                    {pessoa.link && <LuArrowUpRight className="seta" aria-hidden="true" />}
                  </S.Topo>
                  <h3>{pessoa.nome}</h3>
                  <S.Papel $cor={pessoa.cor}>{t(`inspiracoes.itens.${pessoa.id}.papel`)}</S.Papel>
                  <p>{t(`inspiracoes.itens.${pessoa.id}.texto`)}</p>
                  {pessoa.usuario && <S.Usuario>{pessoa.usuario}</S.Usuario>}
                </S.Cartao>
              </Revelar>
            </S.Item>
          );
        })}
      </S.Grade>
    </Secao>
  );
};

export default Inspiracoes;
