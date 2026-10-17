import { useTranslation } from "react-i18next";

import { GRUPOS_STACK } from "../../dados/stack";
import { Revelar, Secao, Tag } from "../ui";
import * as S from "./styles";

const Stack = () => {
  const { t, i18n } = useTranslation("conteudo");

  return (
    <Secao id="stack" titulo={t("stack.titulo")} sub={t("stack.sub")}>
      <S.Grade>
        {GRUPOS_STACK.map((grupo, i) => (
          <S.Item key={grupo.id} $destaque={grupo.destaque}>
            <Revelar atraso={(i % 3) * 90}>
              <S.Cartao $cor={grupo.cor}>
                <Tag $cor={grupo.cor}>{grupo.id}</Tag>
                <h3>{t(`stack.grupos.${grupo.id}.titulo`)}</h3>
                <p>{t(`stack.grupos.${grupo.id}.texto`)}</p>
                <S.Lista>
                  {grupo.itens.map(({ nome, traducoes, Icone }) => (
                    <S.Tecnologia key={nome} $cor={grupo.cor}>
                      <span aria-hidden="true">
                        <Icone />
                      </span>
                      {traducoes?.[i18n.language] ?? nome}
                    </S.Tecnologia>
                  ))}
                </S.Lista>
              </S.Cartao>
            </Revelar>
          </S.Item>
        ))}
      </S.Grade>
    </Secao>
  );
};

export default Stack;
