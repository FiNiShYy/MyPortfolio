import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import * as S from "./styles";

// Faixa com scroll-snap: arrastar/rolar funciona nativo; os botões só rolam a faixa.
const Carrossel = ({ imagens, legendas = [] }) => {
  const { t } = useTranslation("comum");
  const ref = useRef(null);
  const [atual, setAtual] = useState(0);

  const irPara = (i) => {
    const faixa = ref.current;
    faixa.scrollTo({ left: i * faixa.clientWidth, behavior: "smooth" });
  };

  const aoRolar = () => {
    const faixa = ref.current;
    setAtual(Math.round(faixa.scrollLeft / faixa.clientWidth));
  };

  return (
    <S.Carrossel aria-roledescription="carousel">
      <S.Faixa ref={ref} onScroll={aoRolar}>
        {imagens.map((src, i) => (
          <figure
            key={src}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${imagens.length}`}
          >
            <img src={src} alt={legendas[i] ?? ""} loading={i ? "lazy" : "eager"} width="1200" height="750" />
            {legendas[i] && <figcaption>{legendas[i]}</figcaption>}
          </figure>
        ))}
      </S.Faixa>
      <S.SetaCarrossel
        type="button"
        $lado="esquerda"
        onClick={() => irPara(atual - 1)}
        disabled={atual === 0}
        aria-label={t("acoes.anterior")}
      >
        <LuChevronLeft />
      </S.SetaCarrossel>
      <S.SetaCarrossel
        type="button"
        $lado="direita"
        onClick={() => irPara(atual + 1)}
        disabled={atual === imagens.length - 1}
        aria-label={t("acoes.proxima")}
      >
        <LuChevronRight />
      </S.SetaCarrossel>
      <S.Pontos>
        {imagens.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => irPara(i)}
            aria-label={`${i + 1} / ${imagens.length}`}
            aria-current={i === atual}
          />
        ))}
      </S.Pontos>
    </S.Carrossel>
  );
};

export default Carrossel;
