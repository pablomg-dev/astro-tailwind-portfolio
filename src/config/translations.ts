/**
 * Bilingual translations (es / en)
 */

import type { Locale, ProjectProps } from '../types'
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

const projectsEs: ProjectProps[] = [
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

const projectsEn: ProjectProps[] = [
  {
    name: 'Malena Burns',
    summary:
      'Personal website for a wellness guide and holistic mentor. A serene portal designed to connect visitors with her story, services, and a path of personal transformation.',
    link: 'https://www.malenaburns.com/',
    image: malenaBurnsImage,
  },
  {
    name: 'Éfeso Experiencias',
    summary:
      'Website for a boutique studio specializing in the design and architecture of private celebrations. An refined space showcasing celebration experiences through art, symbolism, and play.',
    link: 'https://www.efesoproductora.com/',
    image: efesoImage,
  },
  {
    name: 'El Portal Oracular de Anna Luna',
    summary:
      'Digital platform to explore oracles, intuition, and self-discovery. An immersive visual space that supports personal journeys with experiences and resources for inner connection.',
    link: 'https://elportaloraculardeannaluna.com/',
    image: portalOracularImage,
  },
  {
    name: 'Entre Eras',
    summary:
      'Digital magazine dedicated to social transition, permaculture, and holistic wellbeing. An editorial space bringing together articles, experiences, and resources to connect community and conscious living.',
    link: 'https://entreeras.com.ar/',
    image: entreErasImage,
  },
  {
    name: 'MariaVE Creativa',
    summary:
      'Personal portal for María Luján Villani, writer and creative process facilitator. A space dedicated to creative personal research, 1:1 sessions, ebooks, and self-knowledge resources.',
    link: 'https://mariavecreativa.com/',
    image: mariaveImage,
  },
  {
    name: 'Olga Addesso',
    summary:
      'Website for a health insurance and financial protection advisor in Argentina. A professional platform offering personalized guidance to choose medical coverage, life insurance, and retirement plans.',
    link: 'https://olgaaddesso.lat/',
    image: olgaImage,
  },
  {
    name: 'Florencia Villeneuve',
    summary:
      'Website for a mentor and guide in symbolism, art, and psychology. A portal crafted to support personal transformation processes with depth and a human touch.',
    link: 'https://florenciavilleneuve.com/',
    image: florwebImage,
  },
  {
    name: 'Günün a küna',
    summary:
      'Online store specializing in wellness products. Ecommerce with integrated payments allowing customers to shop quickly and securely.',
    link: 'https://gununakuna.mitiendanube.com/',
    image: tiendanubeImage,
  },
  {
    name: 'Nu Spacio Web',
    summary:
      'Coworking and wellness space with a minimalist design. A warm, professional digital presence that makes getting in touch and booking spaces intuitive.',
    link: 'https://www.nu-spacio.com/',
    code: 'https://github.com/pablomg-dev/nu-spacio',
    image: nuspacioImage,
  },
  {
    name: 'Elizabeth Gilardini',
    summary:
      'Personal website for a coaching and personal development practitioner. A space dedicated to family constellations and bio-emotional decoding to support healing.',
    link: 'https://elizabethgilardini.netlify.app/',
    image: eliwebImage,
  },
  {
    name: 'Astro-Conciencia',
    summary:
      'Website for a professional astrologer specializing in natal charts. A warm portal designed for booking sessions and accessing personal growth resources.',
    link: 'https://astro-conciencia.com/',
    code: 'https://github.com/pablomg-dev/astro-conciencia',
    image: astroconImage,
  },
  {
    name: 'Soy Jessi Carmona',
    summary:
      'Platform for a healing arts therapist. A harmonious visual experience reflecting wellbeing and meditation, inviting visitors to connect with the community.',
    link: 'https://soyjessicarmona.com/',
    code: 'https://github.com/pablomg-dev/jessiCarmona',
    image: soyjessiImage,
  },
  {
    name: 'Espacio Luminem',
    summary:
      'Personal website for a holistic therapist designed to convey calm and trust. A digital sanctuary with soothing visual aesthetics and client connection tools.',
    link: 'https://espacio-luminem.com/',
    code: 'https://github.com/pmg369/espacio-luminem',
    image: esplumImage,
  },
  {
    name: 'Cora Astrología Viva',
    summary:
      'Portal dedicated to astrology and holistic therapy. Reflects the essence of the practice through an intuitive interface integrating educational resources and session booking.',
    link: 'https://corastrologiaviva.netlify.app/',
    code: 'https://github.com/pmg369/CoraAstrologiaViva',
    image: corastroImage,
  },
]

const es = {
  nav: {
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    homeLabel: 'Ir al inicio',
    openMenuLabel: 'Abrir menú de navegación',
    closeMenuLabel: 'Cerrar menú de navegación',
    menuLabel: 'Menú principal',
    languageSwitcherLabel: 'Cambiar idioma',
    goToPrefix: 'Ir a',
  },
  hero: {
    name: 'Pablo M.G.',
    specialty: 'Desarrollador Web Freelance',
    summary:
      'Diseño y desarrollo sitios Web profesionales, Landing Pages y tiendas online a medida. También construyo productos y agentes de IA con LLMs para potenciar negocios de profesionales, emprendedores y proyectos independientes.',
    email: 'pablomg.developer@gmail.com',
    image: profileImage,
    imageAlt: 'Foto de Pablo M.G., Desarrollador Web Freelance de habla hispana',
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ir a Sitio',
    viewCode: 'Ver Detalles',
    altPrefix: 'Proyecto',
    items: projectsEs,
  },
  about: {
    title: 'Sobre mí',
    greeting: '¡Hola! Soy Pablo, Desarrollador Web Freelance. 👋',
    description:
      'Ayudo a profesionales, emprendedores y proyectos independientes a construir una presencia digital auténtica y funcional. Combino un diseño visual cuidado con un desarrollo técnico rápido y sólido, enfocado en conectar con tu audiencia, transmitir tu propuesta de valor y facilitar reservas o ventas.',
    image: profileImage,
    imageAlt: 'Foto de Pablo M.G., desarrollador web freelance en Buenos Aires, Argentina',
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
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@email.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿En qué puedo ayudarte?',
    sendButton: 'Enviar Mensaje',
    sendingButton: 'Enviando…',
    successMessage: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
    errorMessage: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    genericErrorMessage: 'No se pudo enviar el mensaje',
    honeypotLabel: 'Este campo no debe ser completado:',
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
  scrollToTop: {
    ariaLabel: 'Volver arriba',
  },
  seo: {
    title: 'Desarrollador Web Freelance | Pablo M.G.',
    description:
      'Desarrollador Web Freelance. Diseño y desarrollo sitios Web a medida, Landing Pages y Tiendas Online para profesionales, emprendedores y proyectos independientes.',
    author: 'Pablo M.G.',
    keywords:
      'Desarrollador Web Freelance, Programador Web Freelance, Desarrollo Web a Medida, Crear Página Web Profesional, Diseño y Desarrollo Web, Landing Pages de Conversión, Web para Profesionales y Emprendedores, Tienda Nube Ecommerce, Sitios Web para Servicios',
    ogLocale: 'es_ES',
    jobTitle: 'Desarrollador Web Freelance',
    knowsAbout: [
      'Desarrollo Web',
      'Landing Pages',
      'Ecommerce',
      'Tienda Nube',
      'Diseño UX/UI',
      'Webs para Profesionales',
    ],
  },
} as const

const en = {
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    homeLabel: 'Go to home',
    openMenuLabel: 'Open navigation menu',
    closeMenuLabel: 'Close navigation menu',
    menuLabel: 'Main menu',
    languageSwitcherLabel: 'Switch language',
    goToPrefix: 'Go to',
  },
  hero: {
    name: 'Pablo M.G.',
    specialty: 'Freelance Web Developer',
    summary:
      'I design and build custom professional websites, landing pages, and online stores. I also create AI products and LLM-powered agents to help independent professionals, entrepreneurs, and independent projects grow.',
    email: 'pablomg.developer@gmail.com',
    image: profileImage,
    imageAlt: 'Photo of Pablo M.G., Freelance Web Developer',
  },
  projects: {
    title: 'Projects',
    viewProject: 'Visit Site',
    viewCode: 'View Details',
    altPrefix: 'Project',
    items: projectsEn,
  },
  about: {
    title: 'About Me',
    greeting: "Hi! I'm Pablo, a Freelance Web Developer. 👋",
    description:
      'I help independent professionals, entrepreneurs, and standalone projects build an authentic, functional digital presence. I combine thoughtful visual design with fast, solid engineering focused on connecting with your audience, communicating your value, and making bookings or sales effortless.',
    image: profileImage,
    imageAlt: 'Photo of Pablo M.G., freelance web developer based in Buenos Aires, Argentina',
    specialties: {
      title: 'Specialties:',
      design: 'Intuitive, professional web design tailored to every screen.',
      speed: 'Fast-loading websites optimized for search engines (SEO & Core Web Vitals).',
      automation: 'Booking systems, contact forms, and workflow automations.',
      ecommerce: 'Online stores with Tienda Nube, secure payment gateways, and shipping.',
    },
    closing:
      'Every project is unique, and my goal is to build a website that truly reflects the essence of your work.',
    cta: "Ready to take the next step with your website? Let's talk.",
  },
  contact: {
    title: 'Contact',
    subtitle:
      "Have a project in mind or looking to refresh your website? Send me a message and let's work together.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'How can I help you?',
    sendButton: 'Send Message',
    sendingButton: 'Sending…',
    successMessage: 'Thank you! Your message has been sent successfully.',
    errorMessage: 'There was an error sending your message. Please try again.',
    genericErrorMessage: 'Could not send message',
    honeypotLabel: 'Do not fill out this field:',
  },
  specialties: {
    title: 'Digital Expansion',
    items: [
      {
        title: 'Modern & Fast Technology',
        description:
          'Built with modern web standards to deliver fast, secure, and responsive sites across every device.',
        icon: '💻',
      },
      {
        title: 'Design with Purpose',
        description:
          'Every website is crafted to turn visitors into clients through a clear, aesthetic user experience (UX/UI) aligned with your brand.',
        icon: '🎨',
      },
    ],
  },
  services: {
    title: 'Services',
    items: [
      {
        title: 'High-Converting Landing Pages',
        description:
          'Pages designed to attract clients, showcase your services, or launch new projects. Instant loading, persuasive structure, and clear calls to action.',
        icon: '🎯',
      },
      {
        title: 'Online Stores with Tienda Nube',
        description:
          'Setup and customization of ready-to-sell online stores with secure payment gateways, shipping, and a smooth checkout experience.',
        icon: '🛍️',
      },
      {
        title: 'Custom Professional Websites',
        description:
          'Tailored digital presence for professionals, consultants, and independent businesses. Portfolios and service platforms built to inspire trust.',
        icon: '💻',
      },
      {
        title: 'Web Maintenance & Optimization',
        description:
          'Ongoing updates, continuous improvements, and technical support so your site stays secure, up to date, and performing at its best.',
        icon: '⚙️',
      },
    ],
  },
  experienceProof: {
    title: 'Real-World Project Experience',
    description:
      'I have worked across diverse industries and needs, from independent professionals and wellness spaces to professional services, ecommerce, and digital platforms.',
    categories: [
      'Wellness',
      'Personal Development',
      'Professional Services',
      'Ecommerce',
      'Digital Projects',
    ],
    note: 'Especially experienced with wellness, personal development, and service-based projects.',
    subnote:
      'I also partner with projects in other fields that need a professional, custom-built digital presence.',
  },
  process: {
    title: 'How I Work',
    subtitle: 'A clear process, from your idea to a live website.',
    steps: [
      {
        step: '01',
        title: 'We Talk',
        description:
          'You share what you do, what you need, and what you want to achieve with your website.',
      },
      {
        step: '02',
        title: 'We Design',
        description: 'We define the structure, visual style, and key features your project needs.',
      },
      {
        step: '03',
        title: 'We Build',
        description:
          'I turn the concept into a fast, responsive website optimized for a smooth user experience.',
      },
      {
        step: '04',
        title: 'We Launch',
        description:
          'Your site goes live, running smoothly and ready to welcome visitors, inquiries, bookings, or sales.',
      },
    ],
  },
  benefits: {
    title: 'More Than a Website',
    subtitle: 'A digital presence designed to help your project grow.',
    items: [
      {
        title: 'Professional Design',
        description:
          'A cohesive visual identity that builds trust and reflects the essence of your work.',
        icon: '✨',
      },
      {
        title: 'Clear Experience',
        description:
          'Intuitive navigation so your visitors quickly find what they are looking for.',
        icon: '🧭',
      },
      {
        title: 'Performance & SEO',
        description: 'A fast, responsive website optimized for search engines and mobile devices.',
        icon: '⚡',
      },
      {
        title: 'More Opportunities',
        description:
          'Forms, bookings, contact flows, sales, and features designed to connect you with your clients.',
        icon: '🌱',
      },
    ],
  },
  midCta: {
    title: 'Have an idea for your project?',
    description: "Tell me what you need and let's figure out how to bring it to the web.",
    buttonText: "Let's Talk",
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
  scrollToTop: {
    ariaLabel: 'Back to top',
  },
  seo: {
    title: 'Freelance Web Developer | Pablo M.G.',
    description:
      'Freelance Web Developer. I design and build custom websites, landing pages, and online stores for independent professionals, entrepreneurs, and standalone projects.',
    author: 'Pablo M.G.',
    keywords:
      'Freelance Web Developer, Custom Web Development, Professional Website Design, High Converting Landing Pages, Ecommerce Web Development, AI Agents and LLM Products, Portfolio Web Developer',
    ogLocale: 'en_US',
    jobTitle: 'Freelance Web Developer',
    knowsAbout: [
      'Web Development',
      'Landing Pages',
      'Ecommerce',
      'UX/UI Design',
      'AI Agents',
      'Websites for Professionals',
    ],
  },
} as const

export const translationsByLocale = { es, en } as const
export const translations = es

export function getTranslations(locale: Locale) {
  return translationsByLocale[locale]
}
