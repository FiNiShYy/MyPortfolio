import styled, { css } from "styled-components";

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  > div {
    height: 100%;
  }

  ${(p) =>
    p.$destaque &&
    css`
      grid-column: span 2;

      @media (max-width: 640px) {
        grid-column: auto;
      }
    `}
`;

export const Cartao = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.6rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  /* Hover de link só quando o card leva a algum lugar. */
  ${(p) =>
    p.$link &&
    css`
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
    margin-top: 1.25rem;
    font-size: 1.45rem;
  }

  p {
    margin-top: 0.75rem;
    color: var(--texto-suave);
    font-size: 0.975rem;
  }
`;

export const Topo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .seta {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--texto-suave);
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }
`;

export const Iniciais = styled.span`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: var(--${(p) => p.$cor}-suave);
  color: var(--${(p) => p.$cor}-forte);
  font-family: var(--fonte-display);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  box-shadow: 0 0 0 4px var(--superficie), 0 0 0 5px var(--${(p) => p.$cor}-suave);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Papel = styled.span`
  display: block;
  margin-top: 0.35rem;
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--${(p) => p.$cor}-forte);
`;

// Bloco de citação pessoal, no estilo dos callouts da referência visual.
export const Destaque = styled.blockquote`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 1.1rem;
  margin-top: clamp(2rem, 4vw, 3rem);
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border-radius: var(--radius);
  background: var(--teal-suave);

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.55rem;
    border-radius: 50%;
    background: var(--vivo-teal);
    box-shadow: 0 0 0 4px color-mix(in oklch, var(--vivo-teal) 25%, transparent);
  }

  h3 {
    font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  }

  p {
    grid-column: 2;
    max-width: 52rem;
    margin-top: 0.6rem;
    font-size: clamp(1.0625rem, 1.5vw, 1.1875rem);
    line-height: 1.6;
  }
`;

export const Usuario = styled.span`
  margin-top: auto;
  padding-top: 1.25rem;
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  color: var(--texto-suave);
`;
