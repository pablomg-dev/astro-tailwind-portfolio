import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M. González — Desarrollador Web",
  author: "Pablo M. González",
  description:
    "Soy Pablo, desarrollador freelance desde enero 2024 👨‍💻 trabajando en remoto 🚀",
  lang: "es",
  siteLogo: "/pablo-small.png",
  navLinks: [
    { text: "Sobre mi", href: "#about" },
    { text: "Projectos", href: "#projects" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/W3Paul" },
    { text: "Instagram", href: "https://www.instagram.com/pablomg.3/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomg19/" },
    { text: "Github", href: "https://github.com/pmg369" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pablo M. González",
    specialty: "Desarrollador Web",
    summary:
      "Soy Pablo, desarrollador web freelance 🧑‍💻, potenciemos tu marca y proyecto 🚀",
    email: "pablomgonzalez.dev@gmail.com",
  },
  about: {
    description: `
      Soy una persona versátil y apasionado por el aprendizaje continuo, con experiencia en desarrollo web utilizando tecnologías como HTML, CSS, JavaScript, Node.js, y MongoDB. Mi enfoque es orientado a resultados, destacando por mi capacidad de adaptación a entornos cambiantes, iniciativa y organización. Además, soy un entusiasta de las criptomonedas y finanzas descentralizadas (DeFi), donde he desarrollado habilidades en trading y análisis de tendencias del mercado, lo que me ha permitido entender las dinámicas del ecosistema cripto.
    `,
    image: "/pablo-big.png",
  },
  projects: [
    {
      name: "Plataforma Disco Music",
      summary: "Este proyecto está inspirado en mi banda favorita, Audioslave. Permite a los usuarios registrarse, editar álbumes y canciones, agregar nuevos elementos, y ofrece la opción de escuchar canciones en streaming o enlazarlas a videos de YouTube.",
      link: "https://audioslave-fanpage-p5.onrender.com/",
      code: "https://github.com/pmg369/plataforma-disco-music",
      image: "/platdismu.png",
    },
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
  ],
};

// #5755ff
