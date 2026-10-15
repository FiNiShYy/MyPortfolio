import { useCallback, useState } from "react";

const CHAVE = "tema";

// O tema inicial já foi aplicado no <html> pelo script do index.html;
// aqui só lemos de lá e mantemos em sincronia.
export function useTema() {
  const [tema, setTema] = useState(() => document.documentElement.dataset.tema || "claro");

  const alternar = useCallback(() => {
    setTema((atual) => {
      const novo = atual === "escuro" ? "claro" : "escuro";
      document.documentElement.dataset.tema = novo;
      try {
        localStorage.setItem(CHAVE, novo);
      } catch {
        // Sem persistência: vale só para esta visita.
      }
      return novo;
    });
  }, []);

  return { tema, alternar };
}
