import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M.G. — Desarrollador Web",
  author: "Pablo M.G.",
  description:
    "Soy Pablo 🙋‍♂️, desarrollador web freelance 🧑‍💻, potenciemos tu marca y/o proyecto 🚀",
  lang: "es",
  siteLogo: "/pablo-small.jpg",
  navLinks: [
    { text: "Projectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/pablomg.dev/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
    { text: "Github", href: "https://github.com/pablomg-dev" },
  ],
  socialImage: "/vistaprevia.png",
  canonicalURL: "https://pablomgdev.netlify.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pablo M.G.",
    specialty: "Desarrollador Web",
    summary:
      "¡Bienvenido/a!, soy Pablo 🙋‍♂️, desarrollador web freelance 🧑‍💻, potenciemos tu marca y/o proyecto 🚀",
    email: "pablomgonzalez.dev@gmail.com",
  },
  projects: [
    {
      name: "Cora Astrología Viva",
      summary: "Este sitio web está diseñado para reflejar la esencia y los servicios de una terapeuta holística, combinando un enfoque visual relajante con información clara y accesible.",
      link: "https://corastrologiaviva.netlify.app/",
      code: "https://github.com/pmg369/CoraAstrologiaViva",
      image: "/corastro.png",
    },
    {
      name: "Espacio Luminem",
      summary: "Sitio personal para terapeuta holístico. La página busca transmitir serenidad y confianza desde el primer momento, creando un espacio donde los visitantes se sientan en paz y acogidos.",
      link: "https://espacio-luminem.com/",
      code: "https://github.com/pmg369/espacio-luminem",
      image: "/esplum.png",
    },
    {
      name: "Plataforma Disco Music (en desarrollo)",
      summary: "Este proyecto está inspirado en mi banda favorita, Audioslave. Permite a los usuarios registrarse, editar álbumes y canciones, agregar nuevos elementos, y ofrece la opción de escuchar canciones en streaming o enlazarlas a videos de YouTube.",
      link: "https://audioslave-fanpage-p5.onrender.com/",
      code: "https://github.com/pmg369/plataforma-disco-music",
      image: "/platdismu.png",
    },
  ],
  about: {
    description: `
      Soy una persona dinámica y apasionada por el aprendizaje continuo, con experiencia en desarrollo web y un enfoque en obtener resultados efectivos. Busco siempre nuevas maneras de aportar valor en cada proyecto. Además de mi profesión, soy autodidacta en astrología y tengo un interés en las criptomonedas, áreas que me han permitido crecer como profesional y conectar con personas afines.
    `,
    image: "/pablo-big.jpg",
  },
};

// #5755ff
