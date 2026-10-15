import styled, { css } from "styled-components";

export const Numeros = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  > div {
    height: 100%;
  }
`;

export const Numero = styled.div`
  height: 100%;
  padding: 1.25rem 1.25rem 1.1rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);

  strong {
    display: block;
    font-family: var(--fonte-display);
    font-weight: 800;
    font-size: clamp(2rem, 3.5vw, 2.6rem);
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--${(p) => p.$cor}-forte);
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--texto-suave);
  }
`;

export const Nota = styled.p`
  margin-top: 0.85rem;
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  color: var(--texto-suave);
`;

export const Hoje = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(20rem, 30rem);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding: clamp(1.75rem, 4vw, 2.5rem);
  border-radius: var(--radius);
  background: var(--ambar-suave);

  > * {
    min-width: 0;
  }

  h2 {
    margin-top: 1rem;
    font-size: clamp(2.2rem, 5vw, 3.25rem);
  }

  p {
    margin-top: 0.85rem;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  pre {
    margin: 0;
    padding: 1.25rem 1.4rem;
    overflow-x: auto;
    border-radius: var(--radius);
    background: var(--tinta-escura);
    color: var(--sobre-tinta);
    font-family: var(--fonte-mono);
    font-size: 0.85rem;
    line-height: 1.75;
    box-shadow: var(--sombra);
  }

  .comentario {
    color: var(--sobre-tinta-suave);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Subtitulo = styled.h2`
  margin-top: clamp(3.5rem, 7vw, 5.5rem);
  font-size: clamp(2rem, 4.5vw, 3rem);
`;

export const SubtituloNota = styled.p`
  margin-top: 0.75rem;
  max-width: 40rem;
  font-size: 1.0625rem;
  color: var(--texto-suave);
`;

export const Curiosidades = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  > div {
    height: 100%;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Curiosidade = styled.article`
  height: 100%;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);

  > span {
    display: grid;
    place-items: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background: var(--${(p) => p.$cor}-suave);
    color: var(--${(p) => p.$cor}-forte);

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.3rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    color: var(--texto-suave);
  }
`;

export const Roadmap = styled.ol`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
  margin-top: 2rem;
  list-style: none;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  overflow: hidden;
`;

const COR_ESTADO = { feito: "verde", agora: "ambar", planejado: "violeta" };

export const Passo = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--borda);

  &:last-child {
    border-bottom: 0;
  }

  svg {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--${(p) => COR_ESTADO[p.$estado]}-forte);
  }

  ${(p) =>
    p.$estado === "planejado" &&
    css`
      color: var(--texto-suave);
    `}
`;

export const Estado = styled.span`
  margin-left: auto;
  flex-shrink: 0;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-family: var(--fonte-mono);
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--${(p) => COR_ESTADO[p.$estado]}-suave);
  color: var(--${(p) => COR_ESTADO[p.$estado]}-forte);
`;
