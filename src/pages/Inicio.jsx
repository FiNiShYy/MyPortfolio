import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Construo from "../components/Construo";
import Projetos from "../components/Projetos";
import Jornada from "../components/Jornada";
import Inspiracoes from "../components/Inspiracoes";
import ForaDoCodigo from "../components/ForaDoCodigo";
import Contato from "../components/Contato";
import { useTitulo } from "../hooks/useTitulo";
import { rolarPara } from "../utils/rolarPara";

const Inicio = () => {
  useTitulo();
  const { state, hash, pathname } = useLocation();
  const navegar = useNavigate();

  // Chegando de outra página pelo menu (state.secao) ou por link com #secao:
  // rola até a seção e limpa a URL, que fica sempre sem hash.
  useEffect(() => {
    const alvo = state?.secao || hash.slice(1);
    if (!alvo) return;
    requestAnimationFrame(() => rolarPara(alvo));
    navegar(pathname, { replace: true, state: null });
  }, [state, hash, pathname, navegar]);

  return (
    <>
      <Hero />
      <Stack />
      <Construo />
      <Projetos />
      <Jornada />
      <Inspiracoes />
      <ForaDoCodigo />
      <Contato />
    </>
  );
};

export default Inicio;
