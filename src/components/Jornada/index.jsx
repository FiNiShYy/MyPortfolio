import { useTranslation } from "react-i18next";

import { Revelar, Secao } from "../ui";
import * as S from "./styles";

const Jornada = () => {
  const { t } = useTranslation("conteudo");
  const marcos = t("jornada.itens", { returnObjects: true });

  return (
    <Secao id="jornada" titulo={t("jornada.titulo")} sub={t("jornada.sub")} tinta>
      <S.Linha>
        {marcos.map((marco, i) => (
          <Revelar key={marco.titulo} as="li" atraso={i * 60}>
            <S.Marco as="div">
              <S.Periodo>{marco.periodo}</S.Periodo>
              <S.Conteudo>
                <h3>{marco.titulo}</h3>
                <p>{marco.texto}</p>
              </S.Conteudo>
            </S.Marco>
          </Revelar>
        ))}
      </S.Linha>
    </Secao>
  );
};

export default Jornada;
