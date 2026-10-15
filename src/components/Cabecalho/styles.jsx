import styled, { css } from "styled-components";

// Texto ampliado (125%+) pelo painel de acessibilidade: o menu completo não cabe,
// então vale o mesmo layout do celular.
const textoGrande = ':is([data-a11y-texto="2"], [data-a11y-texto="3"], [data-a11y-texto="4"])';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4.25rem;
  padding: 0 var(--cap);
  background: color-mix(in oklch, var(--fundo) 82%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease;

  ${(p) =>
    p.$rolou &&
    css`
      border-bottom-color: var(--borda);
    `}
`;

export const Marca = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--fonte-display);
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  white-space: nowrap;

  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: var(--vivo-verde);
    box-shadow: 0 0 0 4px var(--verde-suave);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    white-space: nowrap;
    font-family: var(--fonte-display);
    font-weight: 600;
    color: var(--texto-suave);
    transition: color 0.2s ease;

    &:hover,
    &.active {
      color: var(--texto);
    }

    /* Página atual (NavLink): sublinhado com o espectro. */
    &.active {
      background: var(--espectro) left bottom / 100% 2px no-repeat;
      padding-bottom: 2px;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }

  ${textoGrande} & {
    display: none;
  }
`;

export const Separador = styled.span`
  width: 1px;
  height: 1.1rem;
  background: var(--borda);
`;

export const Acoes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: auto;
`;

export const BotaoIcone = styled.button`
  display: inline-grid;
  place-items: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 999px;
  color: var(--texto-suave);
  font-family: var(--fonte-mono);
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    color: var(--texto);
    background: var(--tinta);
  }
`;

export const Hamburguer = styled(BotaoIcone)`
  display: none;

  ${textoGrande} & {
    display: inline-grid;
  }

  @media (max-width: 1100px) {
    display: inline-grid;
  }
`;

export const MenuMobile = styled.nav`
  position: fixed;
  inset: 4.25rem 0 auto 0;
  z-index: 49;
  display: none;
  flex-direction: column;
  padding: 1rem var(--cap) 1.5rem;
  background: var(--fundo);
  border-bottom: 1px solid var(--borda);
  box-shadow: var(--sombra);

  a {
    padding: 0.85rem 0;
    font-family: var(--fonte-display);
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid var(--borda);

    &:last-child {
      border-bottom: 0;
    }
  }

  @media (max-width: 1100px) {
    ${(p) =>
      p.$aberto &&
      css`
        display: flex;
      `}
  }

  ${(p) =>
    p.$aberto &&
    css`
      ${textoGrande} & {
        display: flex;
      }
    `}
`;
