import styled, { css, keyframes } from "styled-components";

const piscar = keyframes`
  50% { opacity: 0; }
`;

export const Janela = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--radius);
  background: var(--tinta-escura);
  color: var(--sobre-tinta);
  box-shadow: var(--sombra);
  overflow: hidden;
  font-family: var(--fonte-mono);
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  line-height: 1.75;
`;

export const Barra = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.1rem;
  background: var(--tinta-escura-elevada);
  color: var(--sobre-tinta-suave);
  font-size: 0.8125rem;
`;

export const Bolinha = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--vivo-${(p) => p.$cor});
`;

export const NomeJanela = styled.span`
  margin-left: 0.75rem;
`;

export const Corpo = styled.div`
  min-height: 19rem;
  padding: 1.25rem 1.4rem 1.5rem;
`;

export const Linha = styled.div`
  white-space: pre-wrap;
  word-break: break-word;

  ${(p) =>
    p.$tipo === "cmd" &&
    css`
      &::before {
        content: "$ ";
        color: var(--vivo-verde);
      }
    `}

  ${(p) =>
    p.$tipo === "saida" &&
    css`
      color: var(--sobre-tinta-suave);
    `}

  ${(p) =>
    p.$tipo === "ok" &&
    css`
      color: var(--vivo-verde);
    `}
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--sobre-tinta);
  animation: ${piscar} 1s steps(1) infinite;
`;
