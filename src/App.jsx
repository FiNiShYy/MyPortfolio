import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Cabecalho from "./components/Cabecalho";
import Blog from "./components/Blog";
import Bastidores from "./components/Bastidores";
import Rodape from "./components/Rodape";
import PainelAcessibilidade from "./acessibilidade/Painel";
import { FiltrosSvg } from "./acessibilidade/estilos";
import { GuiaLeitura, LeitorVoz, VLibras } from "./acessibilidade/ferramentas";
import Inicio from "./pages/Inicio";
import { useTitulo } from "./hooks/useTitulo";

const PaginaBlog = () => {
  const { t } = useTranslation("conteudo");
  useTitulo(t("blog.titulo"));
  return <Blog />;
};

const PaginaBastidores = () => {
  const { t } = useTranslation("conteudo");
  useTitulo(t("bastidores.titulo"));
  return <Bastidores />;
};

// Troca de página começa do topo; ida para uma seção da home é tratada lá.
function TopoAoNavegar() {
  const { pathname, state, hash } = useLocation();
  useEffect(() => {
    if (!state?.secao && !hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

const App = () => (
  <>
    <TopoAoNavegar />
    <PainelAcessibilidade />
    <Cabecalho />
    <main id="conteudo" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<PaginaBlog />} />
        <Route path="/bastidores" element={<PaginaBastidores />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Rodape />
    <GuiaLeitura />
    <LeitorVoz />
    <VLibras />
    <FiltrosSvg />
  </>
);

export default App;
