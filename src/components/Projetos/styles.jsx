import styled, { css, keyframes } from "styled-components";

const surgir = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

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

export const Cartao = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  overflow: hidden;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: var(--${(p) => p.$cor}-forte);
    box-shadow: var(--sombra);
    transform: translateY(-4px);
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export const Imagem = styled.div`
  aspect-ratio: 16 / 10;

  /* Card duplo: mais largo, mesma altura de imagem dos vizinhos. */
  ${(p) =>
    p.$destaque &&
    css`
      aspect-ratio: 33 / 10;

      @media (max-width: 1020px) {
        aspect-ratio: 16 / 7;
      }

      @media (max-width: 640px) {
        aspect-ratio: 16 / 10;
      }
    `}
  overflow: hidden;
  background: var(--tinta);
  border-bottom: 1px solid var(--borda);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s ease;
  }
`;

export const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.4rem 1.5rem 1.5rem;

  h3 {
    margin-top: 0.85rem;
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--texto-suave);
    font-size: 0.975rem;
  }
`;

export const Rodape = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1.25rem;
`;

export const VerMais = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: auto;
  font-family: var(--fonte-display);
  font-weight: 700;
  color: var(--${(p) => p.$cor}-forte);
`;

export const Dialogo = styled.dialog`
  width: min(52rem, calc(100% - 2rem));
  max-height: calc(100svh - 2rem);
  margin: auto;
  padding: 0;
  border: 1px solid var(--borda);
  border-radius: calc(var(--radius) * 1.25);
  background: var(--superficie);
  color: var(--texto);
  box-shadow: var(--sombra);

  &[open] {
    animation: ${surgir} 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  &::backdrop {
    background: oklch(16% 0.05 285 / 0.6);
    backdrop-filter: blur(4px);
  }
`;

export const Fechar = styled.button`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--superficie);
  border: 1px solid var(--borda);

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const ImagemModal = styled.img`
  width: 100%;
  aspect-ratio: 16 / 8;
  object-fit: cover;
  object-position: top;
  border-bottom: 1px solid var(--borda);
`;

export const Carrossel = styled.div`
  position: relative;
  border-bottom: 1px solid var(--borda);
`;

export const Faixa = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  figure {
    position: relative;
    flex: 0 0 100%;
    margin: 0;
    scroll-snap-align: start;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
  }

  figcaption {
    position: absolute;
    left: 0.85rem;
    bottom: 0.85rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.4rem;
    background: oklch(16% 0.05 285 / 0.75);
    color: white;
    font-family: var(--fonte-mono);
    font-size: 0.8rem;
  }
`;

export const SetaCarrossel = styled.button`
  position: absolute;
  top: 50%;
  ${(p) => (p.$lado === "esquerda" ? "left" : "right")}: 0.85rem;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--superficie);
  border: 1px solid var(--borda);
  transform: translateY(-50%);
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0;
    pointer-events: none;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Pontos = styled.div`
  position: absolute;
  right: 0.85rem;
  bottom: 0.85rem;
  display: flex;
  gap: 0.4rem;

  button {
    width: 0.55rem;
    height: 0.55rem;
    padding: 0;
    border-radius: 50%;
    border: 1px solid white;
    background: oklch(100% 0 0 / 0.35);
  }

  button[aria-current="true"] {
    background: white;
  }
`;

export const ConteudoModal = styled.div`
  padding: clamp(1.5rem, 4vw, 2.5rem);

  h3 {
    margin-top: 0.85rem;
    font-size: clamp(2rem, 5vw, 2.75rem);
  }

  > p {
    margin-top: 0.85rem;
    font-size: 1.125rem;
    color: var(--texto-suave);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    list-style: none;
  }

  li {
    display: flex;
    gap: 0.75rem;
    align-items: baseline;

    &::before {
      content: "→";
      color: var(--${(p) => p.$cor}-forte);
      font-family: var(--fonte-mono);
    }
  }
`;

export const AcoesModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;
