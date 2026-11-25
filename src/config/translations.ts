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
import portalOracularImage from '../assets/elportaloracular.png'
import entreErasImage from '../assets/entreeras.png'
import efesoImage from '../assets/efesoproductora.png'
import malenaBurnsImage from '../assets/malenaburns.jpg'
import profileImage from '../assets/foto-pablo.jpg'

const projects: ProjectProps[] = [
  {
    name: 'Malena Burns',
    summary:
      'Sitio personal para guía en bienestar y acompañamiento integral. Un portal sereno diseñado para conectar con su historia, servicios y un camino de transformación personal.',
    link: 'https://www.malenaburns.com/',
    image: malenaBurnsImage,
  },
  {
    name: 'Éfeso Experiencias',
    summary:
      'Sitio Web para productora boutique de diseño y arquitectura de celebraciones privadas. Un espacio elegante que presenta universos de celebración a través del arte, la simbología y el juego.',
    link: 'https://www.efesoproductora.com/',
    image: efesoImage,
  },
  {
    name: 'El Portal Oracular de Anna Luna',
    summary:
      'Plataforma digital para explorar el mundo de los oráculos, la intuición y el autoconocimiento. Un espacio visual y envolvente que acompaña cada proceso personal con experiencias y recursos de conexión interior.',
    link: 'https://elportaloraculardeannaluna.com/',
    image: portalOracularImage,
  },
  {
    name: 'Entre Eras',
    summary:
      'Revista digital dedicada a la transición social, la permacultura y el bienestar integral. Un espacio editorial que reúne contenidos, experiencias y recursos para conectar comunidad, conciencia y nuevas formas de habitar.',
    link: 'https://entreeras.com.ar/',
    image: entreErasImage,
  },
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
      'Diseño y desarrollo sitios Web profesionales, Landing Pages y tiendas online a medida. También construyo productos y agentes de IA con LLMs para potenciar negocios de profesionales, emprendedores y proyectos independientes.',
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
      'Ayudo a profesionales, emprendedores y proyectos independientes a construir una presencia digital auténtica y funcional. Combino un diseño visual cuidado con un desarrollo técnico rápido y sólido, enfocado en conectar con tu audiencia, transmitir tu propuesta de valor y facilitar reservas o ventas.',
    image: profileImage,
    specialties: {
      title: 'Especialidades:',
      design: 'Diseño web intuitivo, profesional y adaptable a cualquier dispositivo.',
      speed: 'Sitios ultrarrápidos y optimizados para Google (SEO y Core Web Vitals).',
      automation: 'Integración de sistemas de reservas, formularios y automatizaciones.',
      ecommerce: 'Tiendas online con Tienda Nube, pasarelas de pago y logística integrada.',
    },
    closing:
      'Cada proyecto es único y mi objetivo es construir una web que refleje la esencia de tu trabajo.',
    cta: '¿Listo para dar el siguiente paso con tu web? Hablemos.',
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tenés un proyecto en mente o querés renovar tu web? Escribime y trabajemos juntos.',
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
        title: 'Tecnología Moderna y Rápida',
        description:
          'Desarrollo con tecnologías modernas para lograr sitios rápidos, seguros y optimizados para cualquier dispositivo.',
        icon: '💻',
      },
      {
        title: 'Diseño con Propósito',
        description:
          'Cada web está pensada para transformar visitantes en clientes mediante una experiencia de usuario (UX/UI) clara, estética y alineada a tu identidad.',
        icon: '🎨',
      },
    ],
  },
  services: {
    title: 'Servicios',
    items: [
      {
        title: 'Landing Pages de Alta Conversión',
        description:
          'Páginas diseñadas para captar clientes, presentar tus servicios o lanzar nuevos proyectos. Carga instantánea, estructura persuasiva y llamados a la acción claros.',
        icon: '🎯',
      },
      {
        title: 'Tiendas Online con Tienda Nube',
        description:
          'Implementación y personalización de tiendas online listas para vender, con pasarelas de pago (MercadoPago), envíos y experiencia de compra fluida.',
        icon: '🛍️',
      },
      {
        title: 'Sitios Web Profesionales a Medida',
        description:
          'Presencia digital a medida para profesionales, consultores y negocios. Portfolios, sitios institucionales y plataformas de servicios diseñadas para transmitir confianza.',
        icon: '💻',
      },
      {
        title: 'Mantenimiento y Optimización Web',
        description:
          'Actualizaciones, mejoras continuas y soporte técnico para que tu sitio siempre esté seguro, actualizado y funcionando al máximo rendimiento.',
        icon: '⚙️',
      },
    ],
  },
  experienceProof: {
    title: 'Experiencia en proyectos reales',
    description:
      'Ya trabajé en proyectos de distintos rubros y necesidades, desde profesionales independientes y espacios de bienestar hasta servicios, ecommerce y plataformas digitales.',
    categories: [
      'Bienestar',
      'Desarrollo personal',
      'Servicios profesionales',
      'Ecommerce',
      'Proyectos digitales',
    ],
    note: 'Experiencia especialmente cercana a proyectos de bienestar, desarrollo personal y servicios.',
    subnote:
      'También trabajo con proyectos de otros rubros que necesitan una presencia digital profesional y personalizada.',
  },
  process: {
    title: 'Cómo trabajo',
    subtitle: 'Un proceso claro, desde la idea hasta tu web online.',
    steps: [
      {
        step: '01',
        title: 'Hablamos',
        description: 'Me contás qué hacés, qué necesitás y qué querés lograr con tu web.',
      },
      {
        step: '02',
        title: 'Diseñamos',
        description:
          'Definimos la estructura, el estilo visual y las funcionalidades que necesita tu proyecto.',
      },
      {
        step: '03',
        title: 'Desarrollamos',
        description:
          'Transformo la propuesta en una web rápida, responsive y optimizada para ofrecer una buena experiencia.',
      },
      {
        step: '04',
        title: 'Publicamos',
        description:
          'Dejamos tu sitio online, funcionando correctamente y preparado para recibir visitas, consultas, reservas o ventas.',
      },
    ],
  },
  benefits: {
    title: 'Más que una web',
    subtitle: 'Una presencia digital pensada para que tu proyecto pueda crecer.',
    items: [
      {
        title: 'Diseño profesional',
        description:
          'Una identidad visual coherente que transmite confianza y refleja la esencia de tu proyecto.',
        icon: '✨',
      },
      {
        title: 'Experiencia clara',
        description:
          'Una navegación intuitiva para que tus visitantes encuentren rápidamente lo que buscan.',
        icon: '🧭',
      },
      {
        title: 'Rendimiento y SEO',
        description:
          'Un sitio rápido, responsive y optimizado para buscadores y dispositivos móviles.',
        icon: '⚡',
      },
      {
        title: 'Más oportunidades',
        description:
          'Formularios, reservas, contacto, ventas y otras funcionalidades pensadas para facilitar la conexión con tus clientes.',
        icon: '🌱',
      },
    ],
  },
  midCta: {
    title: '¿Tenés una idea para tu proyecto?',
    description: 'Contame qué necesitás y vemos juntos cómo llevarlo a la web.',
    buttonText: 'Hablemos',
    href: '#contact',
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
      'Desarrollador Web Freelance. Diseño y desarrollo sitios Web a medida, Landing Pages y Tiendas Online para profesionales, emprendedores y proyectos independientes.',
    author: 'Pablo M.G.',
  },
} as const
