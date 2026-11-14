<div align="center">

# Pablo MG — Portfolio

[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=fff&style=for-the-badge)](https://vercel.com)

**Sitio web personal** construido con Astro — estático, rápido y fácil de personalizar.

🔗 [Ver en vivo →](https://pablomgdev.xyz/)

</div>

---

Portfolio web con generación estática, SEO optimizado y diseño minimalista. Basado en [astro-zen](https://github.com/immois/astro-zen) con mejoras propias de rendimiento, accesibilidad y personalización.

Desplegado en **Vercel** (`https://pablomgdev.xyz`). El sitio es estático; el formulario de contacto usa la Vercel Function `/api/contact` (Node.js 24) con Resend.

---

## Inicio rápido

```bash
git clone https://github.com/pmg369/astro-tailwind-portfolio.git
cd astro-tailwind-portfolio
pnpm install
cp .env.example .env
pnpm dev
# → http://localhost:4321
```

**Requisitos:** Node.js 18+ y pnpm

Para que el formulario de contacto envíe emails, configurá las variables de `.env.example` en Vercel (y en `.env` local). Usá una **API key exclusiva** del portfolio.

En local, el sitio estático se sirve con `pnpm dev`; la function `/api/contact` requiere `vercel dev` (o un Preview en Vercel) para probar el envío real.

---

## Comandos

| Comando | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción |
| `pnpm preview` | Previsualizar la build localmente |
| `pnpm test` | Tests unitarios |

---

## Personalización

El contenido está centralizado — no hay que tocar los componentes para actualizarlo:

| Qué | Dónde |
|---|---|
| Contenido | `src/config/translations.ts` |
| Estilos | `tailwind.config.mjs` / componentes |
| Imágenes | `src/assets/` y `public/` |
| SEO y metadatos | `astro.config.mjs` / `src/layouts/Layout.astro` |

---

## Características

- **Generación estática** con Astro — function serverless solo para contacto.
- **SEO optimizado** — metadatos, sitemap y estructura semántica.
- **Responsive** — funciona en cualquier dispositivo.
- **Accesible** — siguiendo buenas prácticas WCAG.
- **Animaciones de scroll** suaves y no invasivas.

---

## Contribuciones

Abrí un issue o un PR si encontrás algo para mejorar. Todo feedback es bienvenido.

---

<div align="center">

Hecho por [Pablo MG](https://github.com/pmg369) · Si te sirve, dejá una estrella ⭐️

</div>
