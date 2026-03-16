import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pablo M.G. — Web Developer",
  author: "Pablo M.G.",
  description:
    "Soy Pablo 🙋‍♂️, Web Developer 🧑‍💻",
  lang: "es",
  siteLogo: "/foto-perfil.jpg",
  navLinks: [
    { text: "Proyectos", href: "#projects" },
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
    specialty: "Arquitecto de Espacios Digitales Conscientes",
    summary:
      "Acompaño a terapeutas y emprendedores holísticos a materializar su propósito en el mundo digital con serenidad y estructura.",
    email: "pablomartingonzalez2025@gmail.com",
    image: "/foto-perfil.jpg",
  },
  projects: [
    {
      name: "Nu Spacio Web",
      summary: "Espacio de coworking y bienestar con diseño minimalista. Presencia digital profesional y cálida que facilita el contacto y la reserva de espacios con un enfoque centrado en el usuario.",
      link: "https://www.nu-spacio.com/",
      code: "https://github.com/pablomg-dev/nu-spacio",
      image: "/nuspacioweb.png",
    },
    {
      name: "Astro-Conciencia",
      summary: "Sitio web para una astróloga profesional especializado en cartas natales. Un portal cálido diseñado para reservar sesiones y acceder a recursos de crecimiento personal con claridad.",
      link: "https://astro-conciencia.com/",
      code: "https://github.com/pablomg-dev/astro-conciencia",
      image: "/astrocon.png",
    },
    {
      name: "Soy Jessi Carmona",
      summary: "Plataforma para una terapeuta de artes sanadoras. Experiencia visual armoniosa que refleja el bienestar y la meditación, invitando a la conexión con la comunidad y el autoconocimiento.",
      link: "https://soyjessicarmona.com/",
      code: "https://github.com/pablomg-dev/jessiCarmona",
      image: "/soyjessi.png",
    },
    {
      name: "Espacio Luminem",
      summary: "Sitio personal para terapeuta holístico diseñado para transmitir paz y confianza. Un refugio digital que combina una estética visual relajante con herramientas para facilitar la conexión con los pacientes.",
      link: "https://espacio-luminem.com/",
      code: "https://github.com/pmg369/espacio-luminem",
      image: "/esplum.png",
    },
    {
      name: "Cora Astrología Viva",
      summary: "Portal dedicado a la astrología y terapia holística. Refleja la esencia del servicio mediante una interfaz intuitiva que integra recursos educativos, agenda de sesiones y un diseño en sintonía con el cosmos.",
      link: "https://corastrologiaviva.netlify.app/",
      code: "https://github.com/pmg369/CoraAstrologiaViva",
      image: "/corastro.png",
    },
  ],
  about: {
    description: `
      ¡Hola! Soy Pablo, Arquitecto Digital para el Bienestar. 🌿
Ayudo a terapeutas y espacios holísticos a traducir su esencia en webs de alto rendimiento. Mi enfoque une la sensibilidad de tu propósito con la solidez técnica (Astro & TypeScript).

Me especializo en:
✨ Diseño Consciente: Portales que respiran tu energía.
⚡ Velocidad Zen: Sitios ultra-rápidos que transmiten calma.
📅 Automatización: Sistemas de turnos para liberar tu tiempo.

Creo en el código limpio para que tu proyecto crezca sin límites.

¿Llevamos tu consulta al siguiente nivel?
    `,
    image: "/foto-perfil.jpg",
  },
};

