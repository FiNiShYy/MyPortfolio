import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export const WHATSAPP = "5544997579646";
export const EMAIL = "kauagabrielramkg@gmail.com";

// O texto de cada canal vem de conteudo:contato.canais.<id>.
// O link do WhatsApp é montado no componente, com a mensagem traduzida.
export const CANAIS = [
  {
    id: "linkedin",
    nome: "LinkedIn",
    usuario: "kauagabriell",
    href: "https://www.linkedin.com/in/kauagabriell/",
    Icone: FaLinkedin,
    cor: "azul",
  },
  {
    id: "github",
    nome: "GitHub",
    usuario: "FiNiShYy",
    href: "https://github.com/FiNiShYy",
    Icone: FaGithub,
    cor: "violeta",
  },
  {
    id: "whatsapp",
    nome: "WhatsApp",
    usuario: "+55 44 99757-9646",
    Icone: FaWhatsapp,
    cor: "verde",
  },
  {
    id: "email",
    nome: "E-mail",
    usuario: EMAIL,
    href: `mailto:${EMAIL}`,
    Icone: LuMail,
    cor: "rosa",
  },
];
