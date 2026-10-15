import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";

import { trocarIdioma } from "../../i18n";
import { useTema } from "../../hooks/useTema";
import { aoClicarAncora } from "../../utils/rolarPara";
import { Botao } from "../ui";
import * as S from "./styles";

const SECOES = ["stack", "construo", "projetos", "jornada", "contato"];

const Cabecalho = () => {
  const { t, i18n } = useTranslation();
  const { tema, alternar } = useTema();
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const emPortugues = i18n.language === "pt-BR";
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <S.Container $rolou={rolou || menuAberto}>
        <S.Marca href="#topo" onClick={aoClicarAncora("topo", fecharMenu)}>
          Kauã Gabriel
        </S.Marca>

        <S.Nav aria-label="Principal">
          {SECOES.map((id) => (
            <a key={id} href={`#${id}`} onClick={aoClicarAncora(id)}>
              {t(`nav.${id}`)}
            </a>
          ))}
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
        {SECOES.map((id) => (
          <a key={id} href={`#${id}`} onClick={aoClicarAncora(id, fecharMenu)}>
            {t(`nav.${id}`)}
          </a>
        ))}
      </S.MenuMobile>
    </>
  );
};

export default Cabecalho;
