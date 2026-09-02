# CLAUDE.md — minga.studio

Contexto del proyecto para Claude Code. Leer completo antes de tocar código.

---

## Qué es esto

Sitio de presentación de **minga studio**, un estudio independiente de software y mejora de procesos con base en Buenos Aires, orientado a pymes, comercios y negocios chicos argentinos.

- **Dominio:** minga.studio
- **Público:** dueños de comercios y pymes argentinas. No son técnicos. Muchos llegan desde el celular.
- **Objetivo del sitio:** que agenden una primera reunión. Una sola conversión, todo lo demás es secundario.
- **Idioma:** español rioplatense, únicamente. No hay versión en inglés y no se planea.

---

## Stack y restricciones

| | |
|---|---|
| Framework | Astro, salida estática |
| Hosting | GitHub Pages, vía GitHub Actions |
| Dominio | `minga.studio` (archivo `public/CNAME`) |
| Tipografías | Fraunces Variable + Manrope Variable, self-hosted vía `@fontsource-variable` |

**GitHub Pages no corre código de servidor.** Consecuencias que no se pueden ignorar:

- Nada de API routes, funciones serverless ni SSR. `output: 'static'` no se cambia.
- El formulario de contacto va contra un servicio externo (Web3Forms o Formspree). Nunca asumir un endpoint propio.
- Sin redirects de servidor. Los enlaces internos apuntan a rutas que existen.

---

## Reglas de marca — no negociables

La fuente de verdad es `docs/design-system.md`. Lo esencial:

**Color**
- Todo componente consume **tokens semánticos** de `src/styles/tokens.css`: `--text-primary`, `--surface`, `--btn-primary-bg`, etc.
- **Un hex literal o un `--color-*` primitivo dentro de un componente es un error.** Si falta un token, se agrega a `tokens.css` y se usa desde ahí.
- El naranja `#F47A20` es acento. **Nunca como texto corrido, label, link ni dato sobre fondo claro** (2,44:1, no cumple). Sí como forma gráfica, fondo de botón o lettering del logo.
- Botón naranja: texto en navy. **Nunca blanco** (2,74:1, no cumple).
- El celeste es para superficies y elementos grandes. Como texto, solo sobre fondo oscuro.
- El gris es para divisores de 1 px. Nunca texto.

**Logo**
- Los SVG están en `src/assets/brand/`. No redibujarlos, no generarlos con código, no reemplazarlos por texto.
- `isologo` = símbolo orbital + minga + STUDIO. Es la firma principal, va en el header.
- `isotipo` = minga + STUDIO, sin órbita. Para espacios horizontales limitados.
- `logo` = símbolo `m` con planeta. Solo favicon, avatar y navegación compacta en mobile.
- El `— S T U D I O —` en naranja sobre crema es correcto y se mantiene. Es lettering de marca, exento de contraste por WCAG 1.4.3.

**Tipografía**
- Display: Fraunces 900. UI y texto: Manrope 400–700.
- Texto corrido nunca por debajo de 16 px.

**Estética**
- Cálida, humana, con espacio negativo visible. Separación entre secciones de 64 a 96 px.
- **Evitar:** íconos genéricos de tecnología, degradados, glow, sombras marcadas, cards muy redondeadas, ilustraciones de robots o cerebros de IA, stock corporativo. La identidad se apoya en skate, surf y outdoor, no en enterprise tech.

---

## Contenido

**El copy está escrito y aprobado en `docs/contenido-sitio.md`. Usarlo textual.** No reescribir, no "mejorar", no inventar secciones ni datos.

Orden de secciones:

1. Hero
2. Franja de capacidades
3. Cómo trabajamos → CTA principal
4. Franja de enfoque (fondo oscuro)
5. Qué hacemos
6. Caso de éxito: Feel-In
7. Quiénes somos
8. De dónde viene el nombre
9. Contacto
10. Footer

Notas:

- El hero **no** lleva el botón de conversión. Solo baja a "Cómo trabajamos". El CTA fuerte cierra esa sección.
- La franja de enfoque va sobre `--surface-inverse`, sin título ni botón. Una sola frase con aire.
- El caso Feel-In tiene un hueco marcado entre corchetes. **Dejarlo como está.** No inventar el texto faltante.
- Nunca inventar métricas, cantidad de clientes, testimonios ni logos. Hoy no hay clientes.

---

## Convenciones de código

- Componentes `.astro` en `src/components/`, un archivo por sección, `PascalCase.astro`.
- Estilos con `<style>` dentro de cada componente. Nada de CSS global salvo `tokens.css`.
- Sin frameworks de UI ni librerías de componentes. Sin Tailwind.
- **JavaScript en el cliente solo si es imprescindible.** Se abre desde el celular con datos móviles.
- HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Un solo `<h1>` por página.
- Todo interactivo con foco visible. No eliminar el outline.
- Imágenes con `alt` real. Si es decorativa, `alt=""`.
- Mobile primero. Se prueba a 375 px de ancho antes que en desktop.

---

## Checklist antes de dar por terminada una tarea

- [ ] `npm run build` pasa sin warnings
- [ ] No hay hex literales ni `--color-*` primitivos en componentes
- [ ] Ningún naranja como texto sobre fondo claro fuera del logo
- [ ] Todo elemento interactivo tiene foco visible
- [ ] Se ve bien a 375 px
- [ ] Meta tags, Open Graph y favicon presentes
- [ ] Los enlaces internos apuntan a anclas que existen
- [ ] El copy coincide con `docs/contenido-sitio.md`

---

## Pendientes conocidos

- [ ] Conectar el formulario a Web3Forms y probar un envío real de punta a punta
- [ ] Instalar analytics (GA4 o Plausible)
- [ ] Enlace a la agenda en el CTA principal
- [ ] Página de política de privacidad (el formulario capta datos personales, Ley 25.326)
- [ ] Completar el párrafo faltante del caso Feel-In (lo escribe Christian)
- [ ] Links reales a App Store y Google Play de Feel-In

---

## Comandos

```bash
npm install        # primera vez
npm run dev        # desarrollo en localhost:4321
npm run build      # build a dist/
npm run preview    # previsualizar el build
```

El deploy es automático: cada push a `main` dispara `.github/workflows/deploy.yml`.

---

## Qué NO hacer

- No cambiar `output: 'static'` ni agregar un adaptador de servidor.
- No agregar dependencias sin necesidad clara. El sitio tiene que cargar rápido en celular.
- No inventar contenido, datos ni prueba social.
- No redibujar ni regenerar los SVG de marca.
- No usar hex literales.
- No agregar versión en inglés.
