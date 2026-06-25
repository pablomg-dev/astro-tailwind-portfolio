/**
 * Traducciones en español (es-AR)
 */

import type { ProjectProps } from '../types'
import tiendanubeImage from '../assets/tiendanube1.png'
import nuspacioImage from '../assets/nuspacioweb.png'
import astroconImage from '../assets/astrocon.png'
import soyjessiImage from '../assets/soyjessi.png'
import esplumImage from '../assets/esplum.png'
import corastroImage from '../assets/corastro.png'
import eliwebImage from '../assets/eliweb.png'
import florwebImage from '../assets/florweb.png'
import olgaImage from '../assets/olga-addesso.png'
import mariaveImage from '../assets/mariavecreativa.png'
import profileImage from '../assets/foto-pablo.jpg'

const projects: ProjectProps[] = [
  {
    name: 'MariaVE Creativa',
    summary:
      'Portal personal de María Luján Villani, escritora y facilitadora de procesos creativos. Un espacio dedicado a la investigación personal creativa, sesiones 1:1, ebooks y recursos de autoconocimiento.',
    link: 'https://mariavecreativa.com/',
    image: mariaveImage,
  },
  {
    name: 'Olga Addesso',
    summary:
      'Sitio Web para asesora de prepagas y seguros en Argentina. Plataforma profesional que ofrece asesoramiento personalizado para elegir la mejor cobertura médica y seguros de vida y retiro.',
    link: 'https://olgaaddesso.lat/',
    image: olgaImage,
  },
  {
    name: 'Florencia Villeneuve',
    summary:
      'Sitio Web para mentora y guía en simbología, arte y psicología. Un portal diseñado para acompañar procesos de transformación personal con un enfoque profundo y humano.',
    link: 'https://florenciavilleneuve.com/',
    image: florwebImage,
  },
  {
    name: 'Günün a küna',
    summary:
      'Tienda online especializada en productos de bienestar. Ecommerce con integración de MercadoPago que permite a los clientes comprar de forma segura y rápida.',
    link: 'https://gununakuna.mitiendanube.com/',
    image: tiendanubeImage,
  },
  {
    name: 'Nu Spacio Web',
    summary:
      'Espacio de coworking y bienestar con diseño minimalista. Presencia digital profesional y cálida que facilita el contacto y la reserva de espacios de forma intuitiva.',
    link: 'https://www.nu-spacio.com/',
    code: 'https://github.com/pablomg-dev/nu-spacio',
    image: nuspacioImage,
  },
  {
    name: 'Elizabeth Gilardini',
    summary:
      'Sitio personal para profesional de coaching y desarrollo personal. Un espacio dedicado a las constelaciones familiares y decodificación bioemocional para facilitar la sanación.',
    link: 'https://elizabethgilardini.netlify.app/',
    image: eliwebImage,
  },
  {
    name: 'Astro-Conciencia',
    summary:
      'Sitio Web para astróloga profesional especializada en cartas natales. Un portal cálido diseñado para reservar sesiones y acceder a recursos de crecimiento personal.',
    link: 'https://astro-conciencia.com/',
    code: 'https://github.com/pablomg-dev/astro-conciencia',
    image: astroconImage,
  },
  {
    name: 'Soy Jessi Carmona',
    summary:
      'Plataforma para terapeuta de artes sanadoras. Experiencia visual armoniosa que refleja el bienestar y la meditación, invitando a la conexión con la comunidad.',
    link: 'https://soyjessicarmona.com/',
    code: 'https://github.com/pablomg-dev/jessiCarmona',
    image: soyjessiImage,
  },
  {
    name: 'Espacio Luminem',
    summary:
      'Sitio personal para terapeuta holístico diseñado para transmitir paz y confianza. Un refugio digital con estética visual relajante y herramientas de conexión con pacientes.',
    link: 'https://espacio-luminem.com/',
    code: 'https://github.com/pmg369/espacio-luminem',
    image: esplumImage,
  },
  {
    name: 'Cora Astrología Viva',
    summary:
      'Portal dedicado a la astrología y terapia holística. Refleja la esencia del servicio mediante una interfaz intuitiva que integra recursos educativos y agenda de sesiones.',
    link: 'https://corastrologiaviva.netlify.app/',
    code: 'https://github.com/pmg369/CoraAstrologiaViva',
    image: corastroImage,
  },
]

export const translations = {
  nav: {
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  hero: {
    name: 'Pablo M.G.',
    specialty: 'Desarrollador Web Freelance',
    summary:
      'Creo sitios Web profesionales, Landing Pages y Ecommerce a medida para Pymes y emprendedores de habla hispana en todo el mundo.',
    email: 'pablomg.developer@gmail.com',
    image: profileImage,
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ir a Sitio',
    viewCode: 'Ver Detalles',
    items: projects,
  },
  about: {
    title: 'Sobre mí',
    greeting: '¡Hola! Soy Pablo, Desarrollador Web Freelance. 👋',
    description:
      'Ayudo a Pymes, emprendedores y profesionales de todo el mundo a crear una presencia digital efectiva. Trabajo de forma remota para ofrecer soluciones personalizadas que combinan un diseño atractivo con un desarrollo técnico sólido, impulsando resultados sin importar las fronteras.',
    image: profileImage,
    specialties: {
      title: 'Especialidades:',
      design: 'Diseño Web profesional y responsive para todos los dispositivos.',
      speed: 'Sitios Web ultrarrápidos que mejoran el posicionamiento en Google.',
      automation: 'Sistemas de reservas, formularios y automatización de procesos.',
      ecommerce: 'Tiendas online con Tienda Nube, integrando pagos, logística y gestión de stock.',
    },
    closing:
      'Cada proyecto es único, y mi objetivo es crear una Web que refleje la esencia de tu negocio.',
    cta: '¿Listo para crear tu página Web profesional? Hablemos.',
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Escríbeme y trabajemos juntos.',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    messageLabel: 'Mensaje',
    sendButton: 'Enviar Mensaje',
    successMessage: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
  },
  specialties: {
    title: 'Expansión Digital',
    items: [
      {
        title: 'Desarrollo con Tecnologías Modernas',
        description:
          'Trabajo con las últimas tecnologías para crear sitios Web rápidos, seguros y escalables que funcionan perfectamente en cualquier dispositivo.',
        icon: '💻',
      },
      {
        title: 'Diseño que Convierte',
        description:
          'Cada sitio Web está diseñado para convertir visitantes en clientes. Diseño UX/UI profesional que refleja la identidad de tu marca.',
        icon: '🎨',
      },
    ],
  },
  services: {
    title: 'Servicios',
    items: [
      {
        title: 'Landing Pages Profesionales',
        description:
          'Landing Pages optimizadas para convertir visitantes en clientes. Diseños atractivos, carga rápida y llamados a la acción efectivos para tu negocio.',
      },
      {
        title: 'Tiendas Online con Tienda Nube',
        description:
          'Implementación de tiendas online con Tienda Nube, integrando múltiples formas de pago, sistemas de logística y todo lo necesario para empezar a vender de inmediato.',
      },
      {
        title: 'Sitios Web para Pymes y Emprendedores',
        description:
          'Presencia digital profesional para tu empresa. Sitios corporativos, portfolios y blogs diseñados para comunicar el valor de tu negocio.',
      },
      {
        title: 'Mantenimiento Web',
        description:
          'Actualizaciones, modificaciones y soporte técnico continuo para tu sitio. Me ocupo de que tu Web siempre esté actualizada y funcionando perfectamente.',
      },
    ],
  },
  footer: {
    tagline: '',
    socialLinks: [
      { text: 'Instagram', href: 'https://www.instagram.com/pablomg.dev/' },
      { text: 'GitHub', href: 'https://github.com/pablomg-dev' },
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/pablomg-developer/',
      },
    ],
  },
  seo: {
    title: 'Desarrollador Web Freelance | Pablo M.G.',
    description:
      'Desarrollador Web Freelance. Creo páginas Web profesionales, Landing Pages, Tiendas Online con Tienda Nube y Sitios Web a medida para Pymes y Emprendedores de habla hispana. Servicio de Mantenimiento Web incluido.',
    author: 'Pablo M.G.',
  },
} as const
