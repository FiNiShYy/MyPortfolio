import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Pequeno o bastante para manter os estilos no mesmo arquivo.
const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 2rem;
  padding: 2.5rem var(--cap) 3rem;
  color: var(--texto-suave);
  font-size: 0.9375rem;

  &::before {
    content: "";
    flex-basis: 100%;
    height: 3px;
    margin-bottom: 1.5rem;
    border-radius: 3px;
    background: var(--espectro);
    opacity: 0.7;
  }
`;

const Feito = styled.span`
  max-width: 38rem;
  text-align: right;

  @media (max-width: 720px) {
    text-align: left;
  }
`;

const Atualizacao = styled.span`
  flex-basis: 100%;
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
`;

// __ULTIMA_ATUALIZACAO__ é injetado pelo Vite (vite.config.js) com a data do build.
// Sem o define (ex.: dev server sem reiniciar), cai na data atual em vez de quebrar a página.
const dataBuild = new Date(
  typeof __ULTIMA_ATUALIZACAO__ === "string"
    ? __ULTIMA_ATUALIZACAO__
    : Date.now(),
);

const Rodape = () => {
  const { t, i18n } = useTranslation();
  const data = new Intl.DateTimeFormat(i18n.language, {
    dateStyle: "long",
  }).format(dataBuild);

  return (
    <Container>
      <span>{t("rodape.direitos", { ano: new Date().getFullYear() })}</span>
      <Feito>{t("rodape.feito")}</Feito>
      <Atualizacao>{t("rodape.atualizado", { data })}</Atualizacao>
    </Container>
  );
};

export default Rodape;
