import styled from "styled-components";

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  > div {
    height: 100%;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Cartao = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  padding: 1.6rem 1.75rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: var(--${(p) => p.$cor}-forte);
    box-shadow: var(--sombra);
    transform: translateY(-3px);
  }

  p {
    color: var(--texto-suave);
  }
`;

export const Topo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.85rem;

  h3 {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.6rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--${(p) => p.$cor}-forte);
  }
`;

export const Usuario = styled.span`
  margin-left: auto;
  font-family: var(--fonte-mono);
  font-size: 0.875rem;
  color: var(--${(p) => p.$cor}-forte);
  overflow-wrap: anywhere;
`;
