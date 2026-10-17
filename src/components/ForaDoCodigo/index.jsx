import { useTranslation } from "react-i18next";
import { FaLinux, FaSteam, FaWindows } from "react-icons/fa6";
import { GiBlackBelt } from "react-icons/gi";
import { LuArrowUpRight, LuCar, LuPrinter, LuWrench } from "react-icons/lu";

import { Revelar, Secao, Tag } from "../ui";
import * as S from "./styles";

const STEAM = "https://steamcommunity.com/id/FiNiShYy";

// Seção pessoal, propositalmente perto do fim: não é sobre trabalho.
const ITENS = [
  { id: "setup", cor: "azul", icones: [FaWindows, FaLinux] },
  {
    id: "jogos",
    cor: "violeta",
    icones: [FaSteam],
    link: STEAM,
    usuario: "steam/FiNiShYy",
  },
  { id: "simuladores", cor: "ambar", icones: [LuCar] },
  { id: "impressao", cor: "rosa", icones: [LuPrinter] },
  { id: "carros", cor: "verde", icones: [LuWrench] },
  { id: "karate", cor: "teal", icones: [GiBlackBelt] },
];

// Os 2 primeiros ficam ao lado da ilustração, com a mesma altura dela; o resto ocupa a largura toda abaixo.
const DIVISAO = 2;

const Cartoes = ({ itens, t, inicio = 0 }) =>
  itens.map(({ id, cor, icones, link, usuario }, i) => (
    <Revelar key={id} atraso={(inicio + i) * 80}>
      <S.Cartao
        $cor={cor}
        {...(link && {
          as: "a",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          $link: true,
        })}
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
  ));

const ForaDoCodigo = () => {
  const { t } = useTranslation("conteudo");

  return (
    <Secao
      id="fora-do-codigo"
      titulo={t("foraDoCodigo.titulo")}
      sub={t("foraDoCodigo.sub")}
      tinta
    >
      <S.Layout>
        <Revelar>
          <S.Ilustracao>
            <img
              src="/kaua-gatinho.webp"
              alt={t("foraDoCodigo.ilustracao.alt")}
              width="540"
              height="500"
              loading="lazy"
            />
            <figcaption>{t("foraDoCodigo.ilustracao.legenda")}</figcaption>
          </S.Ilustracao>
        </Revelar>
        <S.Grade>
          <Cartoes itens={ITENS.slice(0, DIVISAO)} t={t} />
        </S.Grade>
      </S.Layout>
      <S.Grade $abaixo>
        <Cartoes itens={ITENS.slice(DIVISAO)} t={t} inicio={DIVISAO} />
      </S.Grade>
    </Secao>
  );
};

export default ForaDoCodigo;
