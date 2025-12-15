import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M.G. — Web Developer",
  author: "Pablo M.G.",
  description:
    "Soy Pablo 🙋‍♂️, Web Developer 🧑‍💻",
  lang: "es",
  siteLogo: "/foto-perfil.jpg",
  navLinks: [
    { text: "Projectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
    { text: "Github", href: "https://github.com/pablomg-dev" },
    { text: "Instagram", href: "https://www.instagram.com/pablomg.dev/" },
    { text: "TikTok", href: "https://www.tiktok.com/@pablomg.dev" },
  ],
  socialImage: "/vistaprevia.png",
  canonicalURL: "https://pablomgdev.netlify.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pablo M.G.",
    specialty: "Web Developer",
    summary:
      "¡Bienvenido/a!, Soy Pablo 🙋‍♂️, te ayudo a crear tu sitio 🧑‍💻",
    email: "pablomartingonzalez2025@gmail.com",
  },
  projects: [
    {
      name: "Astro-Conciencia",
      summary: "Sitio web para una astróloga profesional dedicada a la interpretación de carta natal, revolución solar y otros servicios astrológicos personalizados. El objetivo fue crear un espacio cálido y profesional donde los visitantes puedan conocer los servicios, reservar sesiones y acceder a recursos sobre autoconocimiento y crecimiento personal a través de la astrología.",
      link: "https://astro-conciencia.com/",
      code: "https://github.com/pablomg-dev/astro-conciencia",
      image: "/astrocon.png",
    },
    {
      name: "Soy Jessi Carmona",
      summary: "Sitio web para una terapeuta de artes sanadoras. El enfoque estuvo en crear una experiencia visual armoniosa que refleje su trabajo en meditación, yoga y desarrollo personal. La web comunica cercanía, claridad y bienestar, invitando a la exploración del autoconocimiento y la conexión con la comunidad.",
      link: "https://soyjessicarmona.com/",
      code: "https://github.com/pablomg-dev/jessiCarmona",
      image: "/soyjessi.png",
    },
    {
      name: "Espacio Luminem",
      summary: "Sitio personal para terapeuta holístico. La página busca transmitir serenidad y confianza desde el primer momento, creando un espacio donde los visitantes se sientan en paz y acogidos.",
      link: "https://espacio-luminem.com/",
      code: "https://github.com/pmg369/espacio-luminem",
      image: "/esplum.png",
    },
    {
      name: "Cora Astrología Viva",
      summary: "Este sitio web está diseñado para reflejar la esencia y los servicios de una terapeuta holística, combinando un enfoque visual relajante con información clara y accesible.",
      link: "https://corastrologiaviva.netlify.app/",
      code: "https://github.com/pmg369/CoraAstrologiaViva",
      image: "/corastro.png",
    },
    {
      name: "Plataforma Disco Music",
      summary: "Este proyecto está inspirado en mi banda favorita, Audioslave. Permite a los usuarios registrarse, editar álbumes y canciones, agregar nuevos elementos, y ofrece la opción de escuchar canciones en streaming o enlazarlas a videos de YouTube.",
      link: "https://audioslave-fanpage-p5.onrender.com/",
      code: "https://github.com/pmg369/plataforma-disco-music",
      image: "/platdismu.png",
    },
  ],
  about: {
    description: `
      ¡Hola! Soy Pablo, Desarrollador Web.

      Creo soluciones digitales para proyectos personales y emprendimientos. Especializado en:

      - Páginas personales que destaquen tu marca
      - Proyectos a medida
      - Optimización de tu sitio web

      Me enfoco en calidad y funcionalidad, trabajando de cerca con cada cliente.

      ¿Listo/a para llevar tu proyecto al siguiente nivel?
    `,
    image: "/foto-perfil.jpg",
  },
};

