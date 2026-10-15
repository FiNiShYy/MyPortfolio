import { useTranslation } from "react-i18next";
import { LuCircle, LuCircleCheck, LuCircleDot } from "react-icons/lu";

import { ARVORE, CURIOSIDADES, ROADMAP } from "../../dados/bastidores";
import { PROJETOS } from "../../dados/projetos";
import { GRUPOS_STACK } from "../../dados/stack";
import { Revelar, Secao, Tag } from "../ui";
import * as S from "./styles";

// __ESTATISTICAS__ vem do vite.config.js (calculado a cada build). Sem ele
// (dev server antigo), os números do repositório simplesmente não aparecem.
const REPO = typeof __ESTATISTICAS__ === "object" ? __ESTATISTICAS__ : null;

const ICONE_ESTADO = { feito: LuCircleCheck, agora: LuCircleDot, planejado: LuCircle };

const Bastidores = () => {
  const { t, i18n } = useTranslation("conteudo");
  const formatar = (n) => new Intl.NumberFormat(i18n.language).format(n);

  const numeros = [
    REPO && { id: "linhas", valor: REPO.linhas, cor: "violeta" },
    REPO && { id: "componentes", valor: REPO.componentes, cor: "azul" },
    REPO && { id: "chaves", valor: REPO.chaves, cor: "teal" },
    { id: "tecnologias", valor: GRUPOS_STACK.reduce((n, g) => n + g.itens.length, 0), cor: "verde" },
    { id: "projetos", valor: PROJETOS.length, cor: "ambar" },
    REPO && { id: "dependencias", valor: REPO.dependencias, cor: "rosa" },
  ].filter(Boolean);

  return (
    <Secao id="bastidores" titulo={t("bastidores.titulo")} sub={t("bastidores.sub")} nivel="h1">
      <Revelar>
        <S.Numeros>
          {numeros.map(({ id, valor, cor }) => (
            <S.Numero key={id} $cor={cor}>
              <strong>{formatar(valor)}</strong>
              <span>{t(`bastidores.numeros.${id}`)}</span>
            </S.Numero>
          ))}
        </S.Numeros>
        {REPO && <S.Nota>{t("bastidores.numerosNota")}</S.Nota>}
      </Revelar>

      <Revelar>
        <S.Hoje>
          <div>
            <Tag $cor="ambar">{t("bastidores.hojeTag")}</Tag>
            <h2>{t("bastidores.hojeTitulo")}</h2>
            <p>{t("bastidores.hojeTexto")}</p>
          </div>
          <pre aria-label={ARVORE}>
            <code>
              {ARVORE.split("\n").map((linha, i) => {
                const [antes, comentario] = linha.split("#");
                return (
                  <span key={i}>
                    {antes}
                    {comentario && <span className="comentario">#{comentario}</span>}
                    {"\n"}
                  </span>
                );
              })}
            </code>
          </pre>
        </S.Hoje>
      </Revelar>

      <Revelar>
        <S.Subtitulo>{t("bastidores.curiosidadesTitulo")}</S.Subtitulo>
      </Revelar>
      <S.Curiosidades>
        {CURIOSIDADES.map(({ id, cor, Icone }, i) => (
          <Revelar key={id} atraso={(i % 4) * 70}>
            <S.Curiosidade $cor={cor}>
              <span aria-hidden="true">
                <Icone />
              </span>
              <h3>{t(`bastidores.curiosidades.${id}.titulo`)}</h3>
              <p>{t(`bastidores.curiosidades.${id}.texto`)}</p>
            </S.Curiosidade>
          </Revelar>
        ))}
      </S.Curiosidades>

      <Revelar>
        <S.Subtitulo>{t("bastidores.roadmapTitulo")}</S.Subtitulo>
        <S.SubtituloNota>{t("bastidores.roadmapSub")}</S.SubtituloNota>
        <S.Roadmap>
          {ROADMAP.map(({ id, estado }) => {
            const Icone = ICONE_ESTADO[estado];
            return (
              <S.Passo key={id} $estado={estado}>
                <Icone aria-hidden="true" />
                <span>{t(`bastidores.roadmap.${id}`)}</span>
                <S.Estado $estado={estado}>{t(`bastidores.estados.${estado}`)}</S.Estado>
              </S.Passo>
            );
          })}
        </S.Roadmap>
      </Revelar>
    </Secao>
  );
};

export default Bastidores;
