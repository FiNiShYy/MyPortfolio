import styled, { css } from "styled-components";

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 9vw, 7rem);
`;

export const Bloco = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);

  > * {
    min-width: 0;
  }

  ${(p) =>
    p.$invertido &&
    css`
      > :first-child {
        order: 2;
      }
    `}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    > :first-child {
      order: 2;
    }
  }
`;

export const Codigo = styled.figure`
  border-radius: var(--radius);
  background: var(--tinta-escura);
  color: var(--sobre-tinta);
  box-shadow: var(--sombra);
  overflow: hidden;
`;

export const BarraCodigo = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.1rem;
  background: var(--tinta-escura-elevada);
  color: var(--sobre-tinta-suave);
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;

  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: var(--vivo-${(p) => p.$cor});
  }
`;

export const Pre = styled.pre`
  margin: 0;
  padding: 1.25rem 1.4rem 1.5rem;
  overflow-x: auto;
  font-family: var(--fonte-mono);
  font-size: clamp(0.78rem, 1.1vw, 0.875rem);
  line-height: 1.75;

  .comentario {
    color: var(--sobre-tinta-suave);
    font-style: italic;
  }
  .string {
    color: var(--vivo-verde);
  }
  .numero {
    color: var(--vivo-ambar);
  }
  .chave {
    color: var(--vivo-rosa);
  }
  .prompt {
    color: var(--vivo-teal);
  }
`;

export const Texto = styled.div`
  h3 {
    margin-top: 1rem;
    font-size: clamp(2rem, 4vw, 2.75rem);
  }

  p {
    margin-top: 1.1rem;
    font-size: 1.125rem;
    color: var(--texto-suave);
  }
`;

export const Pontos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.5rem;
  list-style: none;

  li {
    display: flex;
    gap: 0.85rem;
    align-items: baseline;

    &::before {
      content: "";
      flex-shrink: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--vivo-${(p) => p.$cor});
      transform: translateY(-0.1rem);
    }
  }
`;
