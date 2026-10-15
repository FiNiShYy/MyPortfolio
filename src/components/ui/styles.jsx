import styled, { css } from "styled-components";

export const Secao = styled.section`
  padding: var(--secao) var(--cap);
  ${(p) =>
    p.$tinta &&
    css`
      background: var(--tinta);
    `}
`;

export const Cabeca = styled.header`
  max-width: 46rem;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
`;

export const Titulo = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4.25rem);
`;

export const Sub = styled.p`
  margin-top: 1.25rem;
  font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
  color: var(--texto-suave);
`;

// Tag mono com bolinha colorida, no estilo "● ai-usagebar".
export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--fonte-mono);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--${(p) => p.$cor || "violeta"}-forte);

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: var(--vivo-${(p) => p.$cor || "violeta"});
    box-shadow: 0 0 0 4px var(--${(p) => p.$cor || "violeta"}-suave);
  }
`;

export const Botao = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 3.25rem;
  padding: 0 1.5rem;
  border-radius: 999px;
  font-family: var(--fonte-display);
  font-weight: 700;
  font-size: 1.0625rem;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  ${(p) =>
    p.$secundario
      ? css`
          border: 1px solid var(--borda);
          background: var(--superficie);
          color: var(--texto);
          &:hover {
            border-color: var(--texto-suave);
          }
        `
      : css`
          background: var(--primaria);
          color: var(--sobre-primaria);
          &:hover {
            background: var(--primaria-hover);
          }
        `}

  ${(p) =>
    p.$pequeno &&
    css`
      min-height: 2.75rem;
      padding: 0 1.15rem;
      font-size: 1rem;
    `}
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--borda);
  background: var(--superficie);
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  color: var(--texto-suave);
`;

// Entrada suave ao rolar. --atraso escalona itens de uma mesma lista.
export const Revelar = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: var(--atraso, 0ms);

  ${(p) =>
    p.$visivel &&
    css`
      opacity: 1;
      transform: none;
    `}
`;
