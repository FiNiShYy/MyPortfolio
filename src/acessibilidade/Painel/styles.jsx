import styled, { css } from "styled-components";

export const Gatilho = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 80;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--tinta-escura);
  color: var(--sobre-tinta);
  box-shadow: var(--sombra), 0 0 0 3px var(--fundo), 0 0 0 5px var(--vivo-verde);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const Painel = styled.div`
  position: fixed;
  right: 1.25rem;
  bottom: 5.75rem;
  z-index: 85;
  width: min(25rem, calc(100vw - 2.5rem));
  max-height: min(42rem, calc(100svh - 7.5rem));
  overflow-y: auto;
  padding: 1.25rem;
  border-radius: var(--radius);
  border: 1px solid var(--borda);
  background: var(--superficie);
  color: var(--texto);
  box-shadow: var(--sombra);
`;

export const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
  }
`;

export const Fechar = styled.button`
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  color: var(--texto-suave);

  &:hover {
    background: var(--tinta);
    color: var(--texto);
  }
`;

export const Rotulo = styled.p`
  margin: 1.1rem 0 0.5rem;
  font-family: var(--fonte-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--texto-suave);
`;

export const Tamanho = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 999px;
  background: var(--tinta);

  output {
    flex: 1;
    text-align: center;
    font-family: var(--fonte-mono);
    font-weight: 600;
  }
`;

export const BotaoRedondo = styled.button`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--superficie);
  border: 1px solid var(--borda);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const Opcao = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 3.25rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--borda);
  background: var(--superficie);
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.25;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;

  svg {
    flex-shrink: 0;
    width: 1.15rem;
    height: 1.15rem;
    color: var(--texto-suave);
  }

  &:hover {
    border-color: var(--texto-suave);
  }

  ${(p) =>
    p["aria-pressed"] &&
    css`
      border-color: var(--verde-forte);
      background: var(--verde-suave);

      svg {
        color: var(--verde-forte);
      }
    `}
`;

export const Filtros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Filtro = styled.button`
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--borda);
  font-size: 0.85rem;
  font-weight: 600;

  ${(p) =>
    p["aria-pressed"] &&
    css`
      border-color: var(--verde-forte);
      background: var(--verde-suave);
      color: var(--verde-forte);
    `}
`;

export const Dica = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--texto-suave);
`;

export const Restaurar = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--borda);
  font-weight: 700;

  &:hover {
    background: var(--tinta);
  }
`;

export const Pular = styled.a`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.75rem 1.1rem;
  border-radius: 999px;
  background: var(--primaria);
  color: var(--sobre-primaria);
  font-family: var(--fonte-display);
  font-weight: 700;
  transform: translateY(-200%);
  transition: transform 0.2s ease;

  &:focus {
    transform: none;
  }
`;
