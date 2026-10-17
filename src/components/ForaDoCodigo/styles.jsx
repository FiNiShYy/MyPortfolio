import styled, { css } from "styled-components";

// Ilustração + 2 cards em 3 colunas iguais; empilha no tablet.
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: stretch;
  gap: 1.25rem;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

// Proporção original da ilustração: recortar comeria o gato na borda.
export const Ilustracao = styled.figure`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  figcaption {
    padding: 1rem 1.25rem 1.1rem;
    border-top: 1px solid var(--borda);
    font-family: var(--fonte-mono);
    font-size: 0.8125rem;
    color: var(--texto-suave);
  }

  @media (max-width: 1020px) {
    max-width: 26rem;
    justify-self: center;
  }
`;

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  > div {
    height: 100%;
  }

  ${(p) =>
    p.$abaixo &&
    css`
      margin-top: 1.25rem;
    `}

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Cartao = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);

  ${(p) =>
    p.$link &&
    css`
      transition:
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;

      &:hover {
        border-color: var(--${p.$cor}-forte);
        box-shadow: var(--sombra);
        transform: translateY(-3px);
      }

      &:hover .seta {
        color: var(--${p.$cor}-forte);
        transform: translate(2px, -2px);
      }
    `}

  h3 {
    margin-top: 1rem;
    font-size: 1.3rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--texto-suave);
    font-size: 0.95rem;
  }
`;

export const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .seta {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--texto-suave);
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }
`;

export const Usuario = styled.span`
  margin-top: auto;
  padding-top: 1rem;
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  color: var(--texto-suave);
`;

export const Icones = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.1rem;

  span {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: var(--${(p) => p.$cor}-suave);
    color: var(--${(p) => p.$cor}-forte);
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;
