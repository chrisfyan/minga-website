# minga.studio

Sitio de presentación de minga studio. Astro estático, desplegado en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # localhost:4321
npm run build
```

## Deploy

Automático con cada push a `main`, vía `.github/workflows/deploy.yml`.

Para que funcione, una sola vez en el repo: **Settings → Pages → Source: GitHub Actions**.

## Estructura

```
CLAUDE.md              contexto del proyecto para Claude Code
docs/                  design system, contenido aprobado, análisis de competencia
public/                favicon, og-image, CNAME
src/assets/brand/      SVG de marca
src/styles/tokens.css  tokens de diseño
```

## Antes de tocar código

Leer `CLAUDE.md`.
