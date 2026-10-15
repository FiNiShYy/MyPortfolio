import { useEffect } from "react";

const PADRAO = "Kauã Gabriel · Desenvolvedor full stack";

// Título da aba por página; sem argumento volta ao título padrão.
export function useTitulo(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} · Kauã Gabriel` : PADRAO;
  }, [titulo]);
}
