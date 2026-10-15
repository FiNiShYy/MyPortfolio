import styled from "styled-components";

export const Linha = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  max-width: 52rem;
  list-style: none;

  /* Trilho vertical em gradiente, alinhado ao centro dos marcadores. */
  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: calc(9rem + 1.125rem - 1px);
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(180deg in oklch, var(--vivo-teal), var(--vivo-violeta), var(--vivo-rosa));
    opacity: 0.6;
  }

  @media (max-width: 640px) {
    &::before {
      left: 0.45rem;
    }
  }
`;

export const Marco = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 2.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding-left: 2.25rem;
  }
`;

export const Periodo = styled.span`
  padding-top: 0.2rem;
  font-family: var(--fonte-mono);
  font-size: 0.9375rem;
  font-weight: 600;
  text-align: right;
  color: var(--texto-suave);

  @media (max-width: 640px) {
    text-align: left;
  }
`;

export const Conteudo = styled.div`
  position: relative;

  /* Marcador sobre o trilho. */
  &::before {
    content: "";
    position: absolute;
    top: 0.45rem;
    left: calc(-1.125rem - 0.45rem);
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: var(--tinta);
    border: 3px solid var(--vivo-violeta);
  }

  @media (max-width: 640px) {
    position: static;

    /* No mobile o marcador sobe para a linha do período, no trilho à esquerda. */
    &::before {
      left: 0;
      top: 0.35rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.4rem;
    color: var(--texto-suave);
  }
`;
