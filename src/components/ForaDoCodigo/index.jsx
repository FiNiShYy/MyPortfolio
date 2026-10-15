import { useTranslation } from "react-i18next";
import { FaLinux, FaSteam, FaWindows } from "react-icons/fa6";
import { LuArrowUpRight, LuCar, LuPrinter } from "react-icons/lu";

import { Revelar, Secao, Tag } from "../ui";
import * as S from "./styles";

const STEAM = "https://steamcommunity.com/id/FiNiShYy";

// Seção pessoal, propositalmente perto do fim: não é sobre trabalho.
const ITENS = [
  { id: "setup", cor: "azul", icones: [FaWindows, FaLinux] },
  { id: "jogos", cor: "violeta", icones: [FaSteam], link: STEAM, usuario: "steam/FiNiShYy" },
  { id: "simuladores", cor: "ambar", icones: [LuCar] },
  { id: "impressao", cor: "rosa", icones: [LuPrinter] },
];

const ForaDoCodigo = () => {
  const { t } = useTranslation("conteudo");

  return (
    <Secao id="fora-do-codigo" titulo={t("foraDoCodigo.titulo")} sub={t("foraDoCodigo.sub")} tinta>
      <S.Grade>
        {ITENS.map(({ id, cor, icones, link, usuario }, i) => (
          <Revelar key={id} atraso={i * 80}>
            <S.Cartao
              $cor={cor}
              {...(link && { as: "a", href: link, target: "_blank", rel: "noopener noreferrer", $link: true })}
            >
              <S.Topo>
                <Tag $cor={cor}>{t(`foraDoCodigo.itens.${id}.tag`)}</Tag>
                {link && <LuArrowUpRight className="seta" aria-hidden="true" />}
              </S.Topo>
              <S.Icones $cor={cor} aria-hidden="true">
                {icones.map((Icone, j) => (
                  <span key={j}>
                    <Icone />
                  </span>
                ))}
              </S.Icones>
              <h3>{t(`foraDoCodigo.itens.${id}.titulo`)}</h3>
              <p>{t(`foraDoCodigo.itens.${id}.texto`)}</p>
              {usuario && <S.Usuario>{usuario}</S.Usuario>}
            </S.Cartao>
          </Revelar>
        ))}
      </S.Grade>
    </Secao>
  );
};

export default ForaDoCodigo;
