import { useTranslation } from "react-i18next";

import { Revelar, Secao, Tag } from "../ui";
import { TRECHOS, realcar } from "./trechos";
import * as S from "./styles";

const ITENS = [
  { id: "integracoes", cor: "verde" },
  { id: "agentes", cor: "violeta" },
  { id: "portais", cor: "azul" },
  { id: "servicos", cor: "ambar" },
];

const Construo = () => {
  const { t } = useTranslation("conteudo");

  return (
    <Secao id="construo" titulo={t("construo.titulo")} sub={t("construo.sub")} tinta>
      <S.Lista>
        {ITENS.map(({ id, cor }, i) => {
          const trecho = TRECHOS[id];
          const codigo = `${t(`construo.itens.${id}.comentario`)}\n${trecho.codigo}`;
          return (
            <S.Bloco key={id} $invertido={i % 2 === 1}>
              <Revelar>
                <S.Codigo>
                  <S.BarraCodigo $cor={cor}>{trecho.arquivo}</S.BarraCodigo>
                  <S.Pre>
                    <code>
                      {realcar(codigo).map((p, j) =>
                        p.tipo === "texto" ? (
                          p.texto
                        ) : (
                          <span key={j} className={p.tipo}>
                            {p.texto}
                          </span>
                        ),
                      )}
                    </code>
                  </S.Pre>
                </S.Codigo>
              </Revelar>
              <Revelar atraso={120}>
                <S.Texto>
                  <Tag $cor={cor}>{t(`construo.itens.${id}.tag`)}</Tag>
                  <h3>{t(`construo.itens.${id}.titulo`)}</h3>
                  <p>{t(`construo.itens.${id}.texto`)}</p>
                  <S.Pontos $cor={cor}>
                    {t(`construo.itens.${id}.pontos`, { returnObjects: true }).map((ponto) => (
                      <li key={ponto}>{ponto}</li>
                    ))}
                  </S.Pontos>
                </S.Texto>
              </Revelar>
            </S.Bloco>
          );
        })}
      </S.Lista>
    </Secao>
  );
};

export default Construo;
