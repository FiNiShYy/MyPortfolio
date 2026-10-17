import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Título da aba por página; sem argumento usa o título padrão do idioma atual.
export function useTitulo(titulo) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = titulo ? `${titulo} · Kauã Gabriel` : t("tituloPadrao");
  }, [titulo, t, i18n.language]);
}
