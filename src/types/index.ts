/**
 * Tipos globales del proyecto
 */
import type { ImageMetadata } from "astro";

export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
  projects: ProjectProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  image: ImageMetadata;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: ImageMetadata;
  link?: string;
  code?: string;
}

export interface AboutProps {
  description: string;
  image: ImageMetadata;
}

export interface HeaderProps {
  navLinks: { text: string; href: string }[];
}

export interface AnimatedTextProps {
  text: string;
}

export interface LogoProps {
  name: string;
}

export interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProps {
  title: string;
  description: string;
}

export interface SectionProps {
  text: string;
  href: string;
  class?: string;
}

export interface FooterProps {
  author: string;
}
