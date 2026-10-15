import { useEffect, useRef, useState } from "react";

// Marca o elemento como visível na primeira vez que entra na viewport.
// Só revela uma vez: rolar de volta não reanima nada.
export function useRevelar({ margem = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisivel(true);
      return undefined;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { rootMargin: margem },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, [margem]);

  return [ref, visivel];
}
