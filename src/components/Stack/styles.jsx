import styled, { css } from "styled-components";

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 1020px) {
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

export const Cartao = styled.article`
  height: 100%;
  padding: 1.75rem;
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

  h3 {
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--texto-suave);
    font-size: 0.975rem;
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
  list-style: none;
`;

export const Tecnologia = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.85rem 0.45rem 0.45rem;
  border-radius: 999px;
  background: var(--tinta);
  font-weight: 600;
  font-size: 0.9375rem;

  span {
    display: inline-grid;
    place-items: center;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    background: var(--${(p) => p.$cor}-suave);
    color: var(--${(p) => p.$cor}-forte);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
