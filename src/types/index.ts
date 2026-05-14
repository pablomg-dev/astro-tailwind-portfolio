/**
 * Tipos globales del proyecto
 */
import type { ImageMetadata } from "astro";

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
