/**
 * English translations
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
      "Coworking and wellness space with minimalist design. Professional and warm digital presence that facilitates contact and space booking with a user-centered approach.",
    link: "https://www.nu-spacio.com/",
    code: "https://github.com/pablomg-dev/nu-spacio",
    image: nuspacioImage,
  },
  {
    name: "Astro-Conciencia",
    summary:
      "Website for a professional astrologer specializing in natal charts. A warm portal designed to book sessions and access personal growth resources with clarity.",
    link: "https://astro-conciencia.com/",
    code: "https://github.com/pablomg-dev/astro-conciencia",
    image: astroconImage,
  },
  {
    name: "Soy Jessi Carmona",
    summary:
      "Platform for a healing arts therapist. Harmonious visual experience that reflects wellness and meditation, inviting connection with the community and self-knowledge.",
    link: "https://soyjessicarmona.com/",
    code: "https://github.com/pablomg-dev/jessiCarmona",
    image: soyjessiImage,
  },
  {
    name: "Espacio Luminem",
    summary:
      "Personal website for a holistic therapist designed to convey peace and confidence. A digital refuge that combines relaxing visual aesthetics with tools to facilitate patient connection.",
    link: "https://espacio-luminem.com/",
    code: "https://github.com/pmg369/espacio-luminem",
    image: esplumImage,
  },
  {
    name: "Cora Astrología Viva",
    summary:
      "Portal dedicated to astrology and holistic therapy. Reflects the essence of the service through an intuitive interface that integrates educational resources, session scheduling, and a design in tune with the cosmos.",
    link: "https://corastrologiaviva.netlify.app/",
    code: "https://github.com/pmg369/CoraAstrologiaViva",
    image: corastroImage,
  },
];

export const EN = {
  nav: {
    projects: "Projects",
    about: "About",
  },
  hero: {
    name: "Pablo M.G.",
    specialty: "Conscious Digital Spaces Architect",
    summary:
      "I accompany holistic therapists and entrepreneurs to materialize their purpose in the digital world with serenity and structure.",
    email: "pablomartingonzalez2025@gmail.com",
    image: profileImage,
  },
  projects: {
    title: "Projects",
    viewProject: "View Space",
    viewCode: "View Details",
    items: projects,
  },
  about: {
    title: "About Me",
    greeting: "Hi! I'm Pablo, Digital Architect for Wellbeing. 🌿",
    description:
      "I help therapists and holistic spaces translate their essence into high-performing websites. My approach combines the sensitivity of your purpose with technical solidity (Astro & TypeScript).",
    image: profileImage,
    specialties: {
      title: "I specialize in:",
      design: "Conscious Design: Portals that breathe your energy.",
      speed: "Zen Speed: Ultra-fast sites that convey calm.",
      automation: "Automation: Booking systems to free up your time.",
    },
    closing: "I believe in clean code so your project can grow without limits.",
    cta: "Shall we take your consultation to the next level?",
  },
  specialties: {
    title: "Digital Expansion",
    items: [
      {
        title: "Astral Synchronicity",
        description:
          "Ability to integrate astrology APIs for mystical personalization of the user experience.",
        icon: "🌌",
      },
      {
        title: "Energy Scalability",
        description:
          "I understand money as moving energy. We co-create digital systems that allow your abundance to scale with purpose and coherence.",
        icon: "✨",
      },
    ],
  },
  footer: {
    tagline: "Co-creating with the Universe",
    socialLinks: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/pablomgdev/" },
      { text: "Github", href: "https://github.com/pablomg-dev" },
      { text: "Instagram", href: "https://www.instagram.com/pablomg.dev/" },
      { text: "TikTok", href: "https://www.tiktok.com/@pablomg.dev" },
    ],
  },
  seo: {
    title: "Pablo M.G. — Web Developer",
    description: "I'm Pablo 🙋‍♂️, Web Developer 🧑‍💻",
    author: "Pablo M.G.",
  },
} as const;
