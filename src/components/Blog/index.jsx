import { useTranslation } from "react-i18next";

import { Revelar, Secao } from "../ui";
import * as S from "./styles";

// Placeholder até o primeiro post: quando houver textos, os rascunhos
// fantasmas dão lugar aos cards reais.
const Blog = () => {
  const { t } = useTranslation("conteudo");
  const linhas = t("blog.terminal", { returnObjects: true });

  return (
    <Secao id="blog" titulo={t("blog.titulo")} sub={t("blog.sub")} nivel="h1">
      <Revelar>
        <S.Destaque>
          <div>
            <S.Estado>{t("blog.estado")}</S.Estado>
            <h3>{t("blog.destaqueTitulo")}</h3>
            <p>{t("blog.destaqueTexto")}</p>
          </div>
          <S.Terminal aria-hidden="true">
            {linhas.map((linha, i) => (
              <S.Linha key={i} $tipo={linha.tipo}>
                {linha.texto}
              </S.Linha>
            ))}
          </S.Terminal>
        </S.Destaque>
      </Revelar>
      <S.Rascunhos aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <Revelar key={i} atraso={i * 90}>
            <S.Rascunho>
              <span className="rotulo">{t("blog.rascunho")}</span>
              <i className="titulo" />
              <i />
              <i className="curta" />
            </S.Rascunho>
          </Revelar>
        ))}
      </S.Rascunhos>
    </Secao>
  );
};

export default Blog;
