import { useRevelar } from "../../hooks/useRevelar";
import * as S from "./styles";

export { Tag, Botao, Chip } from "./styles";

// nivel="h1" nas páginas próprias (blog, bastidores); h2 nas seções da home.
export function Secao({ id, titulo, sub, tinta, nivel = "h2", children }) {
  return (
    <S.Secao id={id} $tinta={tinta} aria-labelledby={`${id}-titulo`}>
      <Revelar>
        <S.Cabeca>
          <S.Titulo as={nivel} id={`${id}-titulo`}>
            {titulo}
          </S.Titulo>
          {sub && <S.Sub>{sub}</S.Sub>}
        </S.Cabeca>
      </Revelar>
      {children}
    </S.Secao>
  );
}

export function Revelar({ atraso = 0, as, className, children }) {
  const [ref, visivel] = useRevelar();
  return (
    <S.Revelar
      ref={ref}
      as={as}
      className={className}
      $visivel={visivel}
      // eslint-disable-next-line no-restricted-syntax -- inline-dinamico: atraso escalonado por item
      style={{ "--atraso": `${atraso}ms` }}
    >
      {children}
    </S.Revelar>
  );
}
