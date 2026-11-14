# AGENTS.md

Guía y estándares técnicos y de comunicación para agentes de IA que trabajen en el repositorio de **Pablo M.G. — Portfolio Web**.

---

## 1. Project Overview

Este proyecto es el portfolio profesional de **Pablo M.G.**, Desarrollador Web Freelance.
El objetivo del sitio es comunicar con claridad su propuesta de valor, exhibir casos de éxito reales, generar confianza inmediata y facilitar la captación y contacto con clientes potenciales.

* **Dominio en producción:** `https://pablomgdev.xyz`
* **Plataforma de despliegue:** Vercel (integración continua desde rama `main`).
* **Idioma principal del sitio:** Español.

---

## 2. Stack & Technologies

* **Framework:** [Astro v4](https://astro.build/) (`output: "static"`).
* **Hosting:** Vercel — sitio estático + Vercel Function en `/api/contact` (Node.js `24.x` vía `engines` en `package.json`).
* **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/) configurado mediante `@astrojs/tailwind`.
* **Tipografías:**
 * Serif (Títulos / Acentos): `Gabarito Variable` (`@fontsource-variable/gabarito`).
 * Sans (Cuerpo / UI): `Be Vietnam Pro` (`@fontsource/be-vietnam-pro`).
* **Lenguaje:** TypeScript estricto (`strict: true`).
* **Linter & Formateador:** ESLint, Prettier con `prettier-plugin-astro`, validación automatizada mediante `scripts/validate-build.js`.
* **Testing:** Vitest configurado con JSDOM.
* **Optimización de imágenes:** Módulo nativo de Astro (`astro:assets` / `<Image />`) y procesamiento Sharp.
* **Contacto:** Vercel Function `api/contact.ts` + Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). Rate limit en memoria = best-effort (no distribuido).

---

## 3. Project Structure

```text
├── public/                     # Archivos estáticos directos
│   ├── favicon.ico             # Favicon estático multi-resolución (16/32/48px)
│   ├── favicon.png             # Favicon estático 96x96px
│   ├── robots.txt              # Reglas para crawlers y sitemap
│   └── sitemap.xml             # Sitemap oficial
├── scripts/                    # Scripts de validación y automatización
│   ├── optimize-images.js      # Script de optimización de assets
│   └── validate-build.js       # Validación Prettier y configuraciones pre-build
├── src/
│   ├── assets/                 # Imágenes y recursos procesados por Astro
│   ├── components/             # Componentes modulares reutilizables
│   │   ├── About.astro         # Sección Sobre mí
│   │   ├── Background.astro    # Fondo con gradientes cósmicos y estrellas
│   │   ├── Benefits.astro      # Sección "Más que una web" (4 pilares de valor)
│   │   ├── Contact.astro       # Formulario de contacto (cliente → /api/contact)
│   │   ├── ExperienceProof.astro # Bloque de confianza por categorías y experiencia
│   │   ├── Footer.astro        # Pie de página y enlaces sociales
│   │   ├── Header.astro        # Barra de navegación fija con backdrop blur
│   │   ├── Hero.astro          # Presentación principal y llamado inicial
│   │   ├── MidCta.astro        # Bloque de conversión intermedio hacia #contact
│   │   ├── Process.astro       # Sección "Cómo trabajo" (01 al 04)
│   │   ├── Projects.astro      # Galería de proyectos reales
│   │   ├── ScrollToTop.astro   # Botón flotante para scroll superior
│   │   ├── Section.astro       # Contenedor de sección genérico
│   │   └── SpecialtyCard.astro # Card de diferenciales ("Expansión Digital")
│   ├── config/
│   │   └── translations.ts     # Fuente única de textos, copy y metadatos
│   ├── layouts/
│   │   └── Layout.astro        # Layout maestro (HTML head, SEO, OpenGraph, scripts)
│   ├── lib/
│   │   └── contactForm.ts      # Validación, sanitización y anti-spam (best-effort rate limit)
│   ├── pages/
│   │   └── index.astro         # Página principal estructurada
│   └── types/
│       └── index.ts            # Tipado TypeScript estricto de componentes y datos
├── api/
│   └── contact.ts              # Vercel Function POST /api/contact (Resend)
├── .env.example                # Variables requeridas para Resend / contacto
├── astro.config.mjs            # Configuración de Astro (static)
├── package.json                # Dependencias, scripts y engines Node 24.x
├── tailwind.config.mjs         # Paleta de colores, sombras y tokens de diseño
├── tsconfig.json               # TypeScript del sitio (incluye api/ en include)
├── tsconfig.api.json           # Typecheck estricto NodeNext de api/ + helpers
└── vercel.json                 # includeFiles para la Function de contacto
```

---

## 4. Development & Build Commands

* **Iniciar entorno de desarrollo:**
  ```bash
  pnpm dev
  ```
* **Verificar tipos y diagnósticos de Astro:**
  ```bash
  pnpm exec astro check
  ```
* **Validar y compilar producción:**
  ```bash
  pnpm run build
  ```
  *(Nota: Ejecuta automáticamente `validate-build.js`, validación Prettier, `astro check` y `astro build`).*
* **Ejecutar tests unitarios:**
  ```bash
  pnpm test
  ```
* **Linter:**
  ```bash
  pnpm run lint
  ```

---

## 5. Brand Identity & Portfolio Positioning

### Identidad
* **Profesional:** Pablo M.G.
* **Rol:** Desarrollador Web Freelance.

### Audiencia y Posicionamiento
* **Público objetivo principal:**
  1. Profesionales independientes (consultores, terapeutas, diseñadores, profesionales de la salud, etc.).
  2. Emprendedores.
  3. Proyectos y negocios independientes.
  4. Especialmente cercano a proyectos de bienestar, desarrollo personal y servicios, **sin limitarse exclusivamente a ese rubro**.
* **Regla estricta sobre terminología:** **NO utilizar "Pymes"** como concepto principal de marca ni en el copy principal.
* **No modificar el posicionamiento actual** sin una instrucción expresa y deliberada del usuario.

---

## 6. Content & Copywriting Guidelines

### Tono y Comunicación
* Profesional, cercano, claro, moderno, humano y transparente.
* Sin jerga corporativa inflada ni tecnicismos innecesarios en el copy comercial.

### Prohibiciones Estrictas de Contenido
* **NO inventar:**
  * Métricas ficticias (ej: "+100 clientes", "99% satisfacción", "10 años").
  * Testimonios inventados.
  * Clientes, marcas o proyectos falsos.
  * Promesas de resultados garantizados ("más ventas aseguradas", "primer puesto en Google").
* **NO hacer Keyword Stuffing** ni repeticiones forzadas de palabras clave.
* **NO vender tecnologías internas:** Comunicar los beneficios directos para el cliente (carga ultrarrápida, diseño a medida, autogestión, formularios listos para recibir consultas, pasarelas de pago seguras) en lugar de centrar la venta en nombres de librerías.

### Gestión de Proyectos
* Todos los proyectos listados en `translations.projects.items` son casos reales con clientes.
* **NO eliminar ni renombrar proyectos** sin autorización explícita.
* Las categorías de experiencia (*Bienestar, Desarrollo personal, Servicios profesionales, Ecommerce, Proyectos digitales*) deben estar siempre respaldadas por los proyectos reales del portafolio.

---

## 7. Design System & Aesthetics

El sitio utiliza una estética oscura premium, minimalista y cósmica ("Dark Glassmorphism"):

### Paleta de Colores (`tailwind.config.mjs`)
* `space` (`#080812`): Fondo espacial profundo del sitio.
* `midnight` (`#050508`): Fondo de cards y superficies con glassmorphism.
* `cream` (`#F5F5DC`): Texto principal de alta legibilidad.
* `primary` / `gold` (`#D4AF37`): Acento dorado suave para llamados a la acción, íconos y destellos.
* `sage` (`#B2AC88`): Verde salvia para acentos secundarios y notas sutiles.
* `nebula` (`#1a1a3a`): Gradientes de fondo.

### Patrones de Componentes y Cards
* **Contenedor Glassmorphic:** `bg-midnight/40 backdrop-blur-md border border-primary/10 rounded-3xl hover:shadow-aura hover:-translate-y-1 hover:bg-midnight/50 transition-all duration-500`.
* **Grilla estándar:** `grid grid-cols-1 md:grid-cols-2 gap-6` (el contenedor `<main>` mide `max-w-3xl`; evitar 4 columnas en este ancho para prevenir desbordes tipográficos).
* **Tipografía equilibrada:**
  * Títulos: `font-serif text-cream text-balance`.
  * Párrafos: `font-light text-cream/70 text-base leading-relaxed text-pretty`.
* **Animaciones de Scroll:** Elementos interactivos con atributo `data-scroll-animation` y clases iniciales `opacity-0 translate-y-16 transition-all duration-1000`.

---

## 8. Translation & Internationalization System

* **Ubicación central:** Todos los textos y copys viven en [`src/config/translations.ts`](file:///src/config/translations.ts).
* **Tipos correspondientes:** Definidos en [`src/types/index.ts`](file:///src/types/index.ts).
* **Regla:** Nunca hardcodear textos comerciales en plantillas `.astro` si corresponden a secciones configuradas en `translations.ts`.
* Al actualizar textos, mantener la estructura `as const` y asegurar compatibilidad de tipos (arrays readonly).

---

## 9. SEO & Accessibility Standards

* **Headings semánticos:** Un único `<h1>` en el Hero; las secciones principales utilizan `<h2>` y las cards `<h3>`.
* **Metadatos y Schema.org:** Centralizados en `Layout.astro` (`Person`, `knowsAbout`, OpenGraph, Twitter Cards, canonicals con `https://pablomgdev.xyz`).
* **Favicons estáticos:** Rutas permanentes `/favicon.ico` y `/favicon.png` referenciadas en `<head>` para compatibilidad total con Google Crawler.
* **Accesibilidad:**
  * Contraste accesible sobre fondo oscuro (`text-cream`, `text-primary`, `text-sage`).
  * Sin overflow horizontal en pantallas móviles (320px a 420px).
  * Todos los botones y enlaces interactivos tienen etiquetas legibles o `aria-label`.

---

## 10. Rules & Workflow for AI Agents

1. **Idioma de trabajo:**
   * Escribir todo el código, variables, tipos, nombres de componentes y mensajes de git en **Inglés**.
   * Escribir las explicaciones, respuestas y comentarios en **Español**.
2. **TypeScript Estricto:**
   * Prohibido el uso de `any`.
   * Utilizar tipado estricto e interfaces dedicadas en `src/types/index.ts`.
3. **Lectura previa obligatoria:**
   * Leer el archivo completo antes de modificarlo para entender el contexto.
4. **Respetar el alcance:**
   * Modificar únicamente los archivos indispensables para la tarea solicitada.
   * No realizar refactorizaciones no pedidas ni cambios "por iniciativa propia".
   * No alterar la identidad visual, colores ni tipografías salvo pedido explícito.
5. **No introducir dependencias innecesarias:**
   * Priorizar herramientas nativas de Astro, Tailwind CSS y Node.js.

---

## 11. Validation Checklist Before Finishing Tasks

Antes de dar por finalizada cualquier tarea, ejecutar y verificar:

- [ ] **Type Check:** `pnpm exec astro check` (0 errors, 0 warnings, 0 hints).
- [ ] **Production Build:** `pnpm run build` (debe completar con éxito).
- [ ] **Git Status:** `git status` (asegurarse de que no haya modificaciones accidentales en archivos no relacionados).
- [ ] **Git Diff:** `git diff` (revisar que los cambios sean atómicos y precisos).
- [ ] **Responsive & Visual Check:** Verificar que no existan desbordes de texto ni problemas de diseño en dispositivos móviles.
