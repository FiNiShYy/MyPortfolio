import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { trocarIdioma } from "../../i18n";
import { useTema } from "../../hooks/useTema";
import { rolarPara } from "../../utils/rolarPara";
import { Botao } from "../ui";
import * as S from "./styles";

// Seções da home (rolagem) e páginas próprias (rota).
const SECOES = ["stack", "construo", "projetos", "jornada", "contato"];
const PAGINAS = [
  { id: "blog", rota: "/blog" },
  { id: "bastidores", rota: "/bastidores" },
];

const Cabecalho = () => {
  const { t, i18n } = useTranslation();
  const { tema, alternar } = useTema();
  const { pathname } = useLocation();
  const navegar = useNavigate();
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => setMenuAberto(false), [pathname]);

  const emPortugues = i18n.language === "pt-BR";
  const fecharMenu = () => setMenuAberto(false);

  // Na home só rola; fora dela volta para a home e a Inicio rola até a seção.
  // Ctrl/meio-clique seguem o href normal (/#secao), que a Inicio também entende.
  const irPara = (id) => (evento) => {
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.button !== 0) return;
    evento.preventDefault();
    fecharMenu();
    if (pathname === "/") rolarPara(id);
    else navegar("/", { state: { secao: id } });
  };

  const linksSecoes = SECOES.map((id) => (
    <a key={id} href={`/#${id}`} onClick={irPara(id)}>
      {t(`nav.${id}`)}
    </a>
  ));
  const linksPaginas = PAGINAS.map(({ id, rota }) => (
    <NavLink key={id} to={rota} onClick={fecharMenu}>
      {t(`nav.${id}`)}
    </NavLink>
  ));

  return (
    <>
      <S.Container $rolou={rolou || menuAberto}>
        <S.Marca href="/" onClick={irPara("topo")}>
          Kauã Gabriel
        </S.Marca>

        <S.Nav aria-label="Principal">
          {linksSecoes}
          <S.Separador aria-hidden="true" />
          {linksPaginas}
        </S.Nav>

        <S.Acoes>
          <S.BotaoIcone
            as="a"
            href="https://github.com/FiNiShYy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </S.BotaoIcone>
          <S.BotaoIcone
            type="button"
            onClick={() => trocarIdioma(emPortugues ? "en" : "pt-BR")}
            aria-label={t("idioma.trocar")}
            title={t("idioma.trocar")}
          >
            {t("idioma.sigla")}
          </S.BotaoIcone>
          <S.BotaoIcone
            type="button"
            onClick={alternar}
            aria-label={t(tema === "escuro" ? "tema.claro" : "tema.escuro")}
            title={t(tema === "escuro" ? "tema.claro" : "tema.escuro")}
          >
            {tema === "escuro" ? <LuSun /> : <LuMoon />}
          </S.BotaoIcone>
          <Botao
            className="curriculo"
            href={t("curriculoArquivo")}
            target="_blank"
            rel="noopener noreferrer"
            $pequeno
          >
            {t("acoes.curriculo")}
          </Botao>
          <S.Hamburguer
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={t(menuAberto ? "nav.fecharMenu" : "nav.abrirMenu")}
          >
            {menuAberto ? <LuX /> : <LuMenu />}
          </S.Hamburguer>
        </S.Acoes>
      </S.Container>

      <S.MenuMobile id="menu-mobile" $aberto={menuAberto} aria-label="Menu">
        {linksSecoes}
        {linksPaginas}
      </S.MenuMobile>
    </>
  );
};

export default Cabecalho;
