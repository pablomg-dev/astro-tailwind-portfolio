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
    specialty: "Desarrollador Web Freelance en Argentina",
    summary:
      "Creo sitios web profesionales, landing pages y ecommerce a medida para pymes y emprendedores en Buenos Aires y todo Argentina. Especializado en React, Astro y Next.js.",
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
    greeting:
      "¡Hola! Soy Pablo, desarrollador web freelance en Buenos Aires, Argentina. 👋",
    description:
      "Ayudo a pymes, emprendedores y profesionales a crear presencia digital efectiva. Mi enfoque combina diseño atractivo con desarrollo técnico sólido (React, Astro, Next.js) para resultados que realmente impulsan tu negocio.",
    image: profileImage,
    specialties: {
      title: "Especialidades:",
      design:
        "Diseño web profesional y responsive para todos los dispositivos.",
      speed:
        "Sitios web ultrarrápidos que mejoran el posicionamiento en Google.",
      automation:
        "Sistemas de reservas, formularios y automatización de procesos.",
    },
    closing:
      "Cada proyecto es único, y mi objetivo es crear una web que refleje la esencia de tu negocio.",
    cta: "¿Listo para crear tu página web profesional? Hablemos.",
  },
  specialties: {
    title: "Expansión Digital",
    items: [
      {
        title: "Desarrollo con Tecnologías Modernas",
        description:
          "Trabajo con React, Astro y Next.js para crear sitios web rápidos, seguros y escalables que funcionan perfectamente en cualquier dispositivo.",
        icon: "💻",
      },
      {
        title: "Diseño que Convierte",
        description:
          "Cada sitio web está diseñado para convertir visitantes en clientes. Diseño UX/UI profesional que refleja la identidad de tu marca.",
        icon: "🎨",
      },
    ],
  },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Landing Pages Profesionales",
        description:
          "Landing pages optimizadas para convertir visitantes en clientes. Diseños atractivos, carga rápida y llamados a la acción efectivos para tu negocio.",
      },
      {
        title: "Ecommerce con MercadoPago",
        description:
          "Tienda online completa con integración de MercadoPago para que tus clientes puedan pagar con tarjeta, Mercado Pago o efectivo de forma segura.",
      },
      {
        title: "Sitios Web para Pymes y Emprendedores",
        description:
          "Presencia digital profesional para tu empresa. Sitios corporativos, portfolios y blogs diseñados para comunicar el valor de tu negocio.",
      },
      {
        title: "Mantenimiento Web",
        description:
          "Actualizaciones, modificaciones y soporte técnico continuo para tu sitio. Me ocupo de que tu web siempre esté actualizada y funcionando perfectamente.",
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
    title:
      "Desarrollador Web Freelance Argentina | Pablo M.G. - React, Astro & Next.js",
    description:
      "Desarrollador Web Freelance en Buenos Aires, Argentina. Creo páginas web profesionales, Landing Pages, Ecommerce con MercadoPago y Sitios Web a medida para Pymes y Emprendedores. Especializado en React, Astro y Next.js. Servicio de Mantenimiento Web incluido.",
    author: "Pablo M.G.",
  },
} as const;
