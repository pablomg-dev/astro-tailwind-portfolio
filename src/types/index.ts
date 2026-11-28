/**
 * Tipos globales del proyecto
 */
import type { ImageMetadata } from 'astro'

export type Locale = 'es' | 'en'

export interface HeroProps {
  name: string
  specialty: string
  summary: string
  image: ImageMetadata
  imageAlt?: string
}

export interface ProjectProps {
  name: string
  summary: string
  image: ImageMetadata
  link?: string
  code?: string
}

export interface AboutProps {
  description: string
  image: ImageMetadata
}

export interface SpecialtyCardProps {
  title: string
  description: string
  icon: string
}

export interface ServiceProps {
  title: string
  description: string
  icon?: string
}

export interface SectionProps {
  text: string
  href: string
  class?: string
}

export interface ProcessStepProps {
  step: string
  title: string
  description: string
}

export interface BenefitProps {
  title: string
  description: string
  icon?: string
}

export interface ExperienceProofProps {
  title: string
  description: string
  categories: readonly string[] | string[]
  note: string
  subnote: string
}

export interface MidCtaProps {
  title: string
  description: string
  buttonText: string
  href: string
}
