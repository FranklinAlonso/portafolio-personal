# franklinalonso.dev

Portafolio bilingüe (ES/EN) construido con [Astro](https://astro.build), salida 100 % estática.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
```

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Textos de la interfaz (ES/EN) | `src/i18n.ts` |
| Changelog, proyectos, certificados, stack, enlaces | `src/data/portfolio.ts` |
| Foto de perfil / capturas / badges | Copia la imagen en `public/images/` y pon su ruta (`/images/...`) en `src/data/portfolio.ts` (`images.avatar`, `img` en proyectos y certificados) |
| Posts del blog | `src/content/blog/*.md` (frontmatter validado en `src/content.config.ts`) |
| Estilos | `src/styles/global.css` |

### Posts

- Los bloques de código aceptan un título: ` ```json title="package.json" `.
- Una cita (`> texto`) se muestra como nota de advertencia.
- `example: true` muestra la etiqueta "post de ejemplo"; `draft: true` lo oculta.

## Rutas

ES (por defecto): `/`, `/changelog`, `/proyectos`, `/blog`, `/blog/<slug>`
EN: `/en`, `/en/changelog`, `/en/projects`, `/en/blog`, `/en/blog/<slug>`
