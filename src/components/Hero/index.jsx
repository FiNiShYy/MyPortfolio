import { useTranslation } from "react-i18next";
import { LuArrowDown, LuDownload, LuMapPin } from "react-icons/lu";

import Terminal from "../Terminal";
import { Botao, Revelar, Tag } from "../ui";
import * as S from "./styles";

const Hero = () => {
  const { t } = useTranslation(["conteudo", "comum"]);

  return (
    <S.Container id="topo">
      <S.Brilho aria-hidden="true" />
      <Revelar>
        <S.Texto>
          <Tag $cor="verde">{t("hero.tag")}</Tag>
          <S.Titulo>{t("hero.titulo")}</S.Titulo>
          <S.Espectro aria-hidden="true" />
          <S.Lead>{t("hero.lead")}</S.Lead>
          <S.Botoes>
            <Botao href="#stack">
              {t("comum:acoes.verStack")}
              <LuArrowDown aria-hidden="true" />
            </Botao>
            <Botao href={t("comum:curriculoArquivo")} target="_blank" rel="noopener noreferrer" $secundario>
              <LuDownload aria-hidden="true" />
              {t("comum:acoes.baixarCurriculo")}
            </Botao>
          </S.Botoes>
          <S.Meta>
            <img src="/kaua.webp" alt="Kauã Gabriel" width="48" height="48" />
            <LuMapPin aria-hidden="true" />
            <span>{t("hero.local")}</span>
          </S.Meta>
        </S.Texto>
      </Revelar>
      <Revelar atraso={150}>
        <S.Visual>
          <Terminal />
        </S.Visual>
      </Revelar>
    </S.Container>
  );
};

export default Hero;
