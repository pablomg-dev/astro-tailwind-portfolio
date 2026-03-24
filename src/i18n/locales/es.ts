/**
 * Traducciones en español
 */

import type { ProjectProps } from "../../types";
import nuspacioImage from "../../assets/nuspacioweb.png";
import astroconImage from "../../assets/astrocon.png";
import soyjessiImage from "../../assets/soyjessi.png";
import esplumImage from "../../assets/esplum.png";
import corastroImage from "../../assets/corastro.png";
import profileImage from "../../assets/foto-perfil.jpg";

const projects: ProjectProps[] = [
  {
    name: "Nu Spacio Web",
    summary:
      "Espacio de coworking y bienestar con diseño minimalista. Presencia digital profesional y cálida que facilita el contacto y la reserva de espacios con un enfoque centrado en el usuario.",
    link: "https://www.nu-spacio.com/",
    code: "https://github.com/pablomg-dev/nu-spacio",
    image: nuspacioImage,
  },
  {
    name: "Astro-Conciencia",
    summary:
      "Sitio web para una astróloga profesional especializado en cartas natales. Un portal cálido diseñado para reservar sesiones y acceder a recursos de crecimiento personal con claridad.",
    link: "https://astro-conciencia.com/",
    code: "https://github.com/pablomg-dev/astro-conciencia",
    image: astroconImage,
  },
  {
    name: "Soy Jessi Carmona",
    summary:
      "Plataforma para una terapeuta de artes sanadoras. Experiencia visual armoniosa que refleja el bienestar y la meditación, invitando a la conexión con la comunidad y el autoconocimiento.",
    link: "https://soyjessicarmona.com/",
    code: "https://github.com/pablomg-dev/jessiCarmona",
    image: soyjessiImage,
  },
  {
    name: "Espacio Luminem",
    summary:
      "Sitio personal para terapeuta holístico diseñado para transmitir paz y confianza. Un refugio digital que combina una estética visual relajante con herramientas para facilitar la conexión con los pacientes.",
    link: "https://espacio-luminem.com/",
    code: "https://github.com/pmg369/espacio-luminem",
    image: esplumImage,
  },
  {
    name: "Cora Astrología Viva",
    summary:
      "Portal dedicado a la astrología y terapia holística. Refleja la esencia del servicio mediante una interfaz intuitiva que integra recursos educativos, agenda de sesiones y un diseño en sintonía con el cosmos.",
    link: "https://corastrologiaviva.netlify.app/",
    code: "https://github.com/pmg369/CoraAstrologiaViva",
    image: corastroImage,
  },
];

export const ES = {
  nav: {
    projects: "Proyectos",
    about: "Sobre mí",
  },
  hero: {
    name: "Pablo M.G.",
    specialty: "Arquitecto de Espacios Digitales Conscientes",
    summary:
      "Acompaño a terapeutas y emprendedores holísticos a materializar su propósito en el mundo digital con serenidad y estructura.",
    email: "pablomartingonzalez2025@gmail.com",
    image: profileImage,
  },
  projects: {
    title: "Proyectos",
    viewProject: "Conocer Espacio",
    viewCode: "Ver Detalles",
    items: projects,
  },
  about: {
    title: "Sobre mí",
    greeting: "¡Hola! Soy Pablo, Arquitecto Digital para el Bienestar. 🌿",
    description:
      "Ayudo a terapeutas y espacios holísticos a traducir su esencia en webs de alto rendimiento. Mi enfoque une la sensibilidad de tu propósito con la solidez técnica (Astro & TypeScript).",
    image: profileImage,
    specialties: {
      title: "Me especializo en:",
      design: "Diseño Consciente: Portales que respiran tu energía.",
      speed: "Velocidad Zen: Sitios ultra-rápidos que transmiten calma.",
      automation: "Automatización: Sistemas de turnos para liberar tu tiempo.",
    },
    closing:
      "Creo en el código limpio para que tu proyecto crezca sin límites.",
    cta: "¿Llevamos tu consulta al siguiente nivel?",
  },
  specialties: {
    title: "Expansión Digital",
    items: [
      {
        title: "Sincronía Astral",
        description:
          "Capacidad de integrar APIs de astrología para personalización mística de la experiencia del usuario.",
        icon: "🌌",
      },
      {
        title: "Escalabilidad Energética",
        description:
          "Entiendo el dinero como energía en movimiento. Co-creamos sistemas digitales que permiten que tu abundancia escale con propósito y coherencia.",
        icon: "✨",
      },
    ],
  },
  footer: {
    tagline: "Co-creando con el Universo",
    socialLinks: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
      { text: "Github", href: "https://github.com/pablomg-dev" },
      { text: "Instagram", href: "https://www.instagram.com/pablomg.dev/" },
      { text: "TikTok", href: "https://www.tiktok.com/@pablomg.dev" },
    ],
  },
  seo: {
    title: "Pablo M.G. — Web Developer",
    description: "Soy Pablo 🙋‍♂️, Web Developer 🧑‍💻",
    author: "Pablo M.G.",
  },
} as const;
