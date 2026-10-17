import { useTranslation } from "react-i18next";
import { LuFileText } from "react-icons/lu";
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

const Assinatura = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
`;

// Currículo saiu do topo (não é um site de "procuro emprego"), mas segue visível aqui.
const Curriculo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--borda);
  background: var(--superficie);
  color: var(--texto);
  font-family: var(--fonte-display);
  font-weight: 700;
  font-size: 0.9375rem;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  svg {
    color: var(--verde-forte);
  }

  &:hover {
    border-color: var(--verde-forte);
    transform: translateY(-1px);
  }
`;

const Feito = styled.span`
  max-width: 38rem;
  text-align: right;

  @media (max-width: 720px) {
    text-align: left;
  }
`;

// Easter egg: nenhuma pista visual; o balão com a "saudade" só aparece ao passar
// o mouse (ou focar pelo teclado) na palavra "Claude".
const Segredo = styled.span`
  position: relative;
  border-radius: 4px;
  outline: none;
  transition: color 0.2s ease;

  .balao {
    position: absolute;
    right: 0;
    bottom: calc(100% + 0.6rem);
    z-index: 5;
    width: max-content;
    max-width: min(18rem, 80vw);
    padding: 0.6rem 0.85rem;
    border-radius: 0.75rem;
    background: var(--tinta-escura);
    color: var(--sobre-tinta);
    font-family: var(--fonte-mono);
    font-size: 0.8125rem;
    line-height: 1.5;
    text-align: left;
    box-shadow: var(--sombra);
    opacity: 0;
    transform: translateY(6px);
    pointer-events: none;
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  &:hover,
  &:focus-visible {
    color: var(--violeta-forte);
  }

  &:hover .balao,
  &:focus-visible .balao {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 720px) {
    .balao {
      right: auto;
      left: 0;
    }
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

// __VERSAO__ vem do package.json via Vite; some do rodapé se o define faltar.
const versao = typeof __VERSAO__ === "string" ? `v${__VERSAO__} · ` : "";

const Rodape = () => {
  const { t, i18n } = useTranslation();
  const data = new Intl.DateTimeFormat(i18n.language, {
    dateStyle: "long",
  }).format(dataBuild);

  return (
    <Container>
      <Assinatura>
        <span>{t("rodape.direitos", { ano: new Date().getFullYear() })}</span>
        <Curriculo href={t("curriculoArquivo")} target="_blank" rel="noopener noreferrer">
          <LuFileText aria-hidden="true" />
          {t("rodape.curriculo")}
        </Curriculo>
      </Assinatura>
      <Feito>
        {t("rodape.feito")}{" "}
        <Segredo tabIndex={0}>
          Claude
          <span className="balao" role="tooltip">
            {t("rodape.saudade")}
          </span>
        </Segredo>
        .
      </Feito>
      <Atualizacao>
        {versao}
        {t("rodape.atualizado", { data })}
      </Atualizacao>
    </Container>
  );
};

export default Rodape;
