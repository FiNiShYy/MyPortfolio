import styled, { keyframes } from "styled-components";

const flutuar = keyframes`
  50% { transform: translateY(-8px); }
`;

export const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: clamp(2.5rem, 6vw, 5rem);
  min-height: calc(100svh - 4.25rem);
  padding: clamp(3rem, 8vw, 6rem) var(--cap);
  overflow: hidden;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

// Brilhos difusos atrás do terminal. Puramente decorativos.
export const Brilho = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(40rem 28rem at 85% 30%, color-mix(in oklch, var(--vivo-violeta) 18%, transparent), transparent 70%),
    radial-gradient(30rem 22rem at 70% 85%, color-mix(in oklch, var(--vivo-verde) 16%, transparent), transparent 70%);
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Titulo = styled.h1`
  margin-top: 1.5rem;
  font-size: clamp(3.5rem, 9vw, 6.75rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
`;

export const Espectro = styled.span`
  display: block;
  width: min(18rem, 60%);
  height: 3px;
  margin: 2rem 0;
  border-radius: 3px;
  background: var(--espectro);
`;

export const Lead = styled.p`
  max-width: 36rem;
  font-size: clamp(1.125rem, 1.9vw, 1.375rem);
  line-height: 1.55;
  color: var(--texto-suave);
`;

export const Botoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2.5rem;
  color: var(--texto-suave);
  font-size: 0.9375rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--superficie);
    box-shadow: 0 0 0 1px var(--borda);
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Visual = styled.div`
  animation: ${flutuar} 7s ease-in-out infinite;
`;
