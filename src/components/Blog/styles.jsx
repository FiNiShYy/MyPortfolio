import styled, { keyframes } from "styled-components";

const pulsar = keyframes`
  0% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--vivo-ambar) 55%, transparent); }
  70% { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

const brilho = keyframes`
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
`;

export const Destaque = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(18rem, 26rem);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  padding: clamp(1.75rem, 4vw, 2.75rem);
  border-radius: var(--radius);
  border: 1px dashed var(--borda);
  background: var(--superficie);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  h3 {
    margin-top: 1rem;
    font-size: clamp(2rem, 4.5vw, 3rem);
  }

  p {
    margin-top: 0.85rem;
    max-width: 32rem;
    font-size: 1.125rem;
    color: var(--texto-suave);
  }
`;

export const Estado = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--fonte-mono);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ambar-forte);

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: var(--vivo-ambar);
    animation: ${pulsar} 2s ease-out infinite;
  }
`;

export const Terminal = styled.div`
  border-radius: var(--radius);
  background: var(--tinta-escura);
  color: var(--sobre-tinta);
  font-family: var(--fonte-mono);
  font-size: 0.9375rem;
  line-height: 1.8;
  padding: 1.25rem 1.4rem;
  box-shadow: var(--sombra);
`;

export const Linha = styled.div`
  color: ${(p) =>
    p.$tipo === "saida" ? "var(--sobre-tinta-suave)" : p.$tipo === "ok" ? "var(--vivo-ambar)" : "var(--sobre-tinta)"};

  &::before {
    content: ${(p) => (p.$tipo === "cmd" ? '"$ "' : '""')};
    color: var(--vivo-verde);
  }
`;

export const Rascunhos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

// Card "fantasma" de post: só esqueleto, para mostrar onde os textos vão aparecer.
export const Rascunho = styled.div`
  padding: 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  opacity: 0.75;

  span.rotulo {
    font-family: var(--fonte-mono);
    font-size: 0.8125rem;
    color: var(--texto-suave);
  }

  i {
    display: block;
    height: 0.8rem;
    margin-top: 0.75rem;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--tinta) 25%, var(--borda) 50%, var(--tinta) 75%);
    background-size: 200% 100%;
    animation: ${brilho} 2.4s linear infinite;
  }

  i.titulo {
    height: 1.25rem;
    margin-top: 1rem;
    width: 80%;
  }

  i.curta {
    width: 55%;
  }
`;
