import { useTranslation } from "react-i18next";

import { CANAIS, WHATSAPP } from "../../dados/contato";
import { Revelar, Secao } from "../ui";
import * as S from "./styles";

const Contato = () => {
  const { t } = useTranslation("conteudo");

  const hrefDo = (canal) =>
    canal.id === "whatsapp"
      ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t("contato.whatsappMensagem"))}`
      : canal.href;

  return (
    <Secao id="contato" titulo={t("contato.titulo")} sub={t("contato.sub")}>
      <S.Grade>
        {CANAIS.map((canal, i) => {
          const { id, nome, usuario, Icone, cor } = canal;
          const externo = id !== "email";
          return (
            <Revelar key={id} atraso={(i % 2) * 90}>
              <S.Cartao
                href={hrefDo(canal)}
                $cor={cor}
                {...(externo && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <S.Topo $cor={cor}>
                  <h3>
                    <Icone aria-hidden="true" />
                    {nome}
                  </h3>
                  <S.Usuario $cor={cor}>{usuario}</S.Usuario>
                </S.Topo>
                <p>{t(`contato.canais.${id}`)}</p>
              </S.Cartao>
            </Revelar>
          );
        })}
      </S.Grade>
    </Secao>
  );
};

export default Contato;
