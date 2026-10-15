import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuArrowRight } from "react-icons/lu";

import { PROJETOS } from "../../dados/projetos";
import { Chip, Revelar, Secao, Tag } from "../ui";
import ProjetoModal from "./ProjetoModal";
import * as S from "./styles";

const Projetos = () => {
  const { t } = useTranslation(["conteudo", "comum"]);
  const [aberto, setAberto] = useState(null);

  return (
    <Secao id="projetos" titulo={t("projetos.titulo")} sub={t("projetos.sub")}>
      <S.Grade>
        {PROJETOS.map((projeto, i) => {
          const chave = `projetos.itens.${projeto.id}`;
          return (
            <S.Item key={projeto.id} $destaque={projeto.destaque}>
              <Revelar atraso={(i % 3) * 90}>
                <S.Cartao
                  type="button"
                  $cor={projeto.cor}
                  onClick={() => setAberto(projeto)}
                >
                  <S.Imagem $destaque={projeto.destaque}>
                    <img
                      src={projeto.imagem}
                      alt=""
                      loading="lazy"
                      width="1200"
                      height="750"
                    />
                  </S.Imagem>
                  <S.Corpo>
                    <Tag $cor={projeto.cor}>{t(`${chave}.tipo`)}</Tag>
                    <h3>{t(`${chave}.titulo`)}</h3>
                    <p>{t(`${chave}.resumo`)}</p>
                    <S.Rodape>
                      {projeto.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                      <S.VerMais $cor={projeto.cor}>
                        {t("comum:acoes.verDetalhes")}
                        <LuArrowRight aria-hidden="true" />
                      </S.VerMais>
                    </S.Rodape>
                  </S.Corpo>
                </S.Cartao>
              </Revelar>
            </S.Item>
          );
        })}
      </S.Grade>
      <ProjetoModal projeto={aberto} aoFechar={() => setAberto(null)} />
    </Secao>
  );
};

export default Projetos;
