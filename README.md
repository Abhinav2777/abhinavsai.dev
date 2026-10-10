# abhinavsai.dev

Source of [abhinavsai.dev](https://abhinavsai.dev): my portfolio, with case studies of a real-time
multiplayer chess platform and a production cache migration.

Static site built with [Astro](https://astro.build), deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. Fonts are self-hosted; there are no
third-party scripts, cookies or trackers.

## Develop

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Layout

| Path | Contents |
|---|---|
| `src/pages/` | Home, About, the two case studies under `work/`, 404 |
| `src/layouts/` | `Base` (head, header, footer, theme), `Case` (case-study header) |
| `src/components/` | Section headings, demo video, the architecture diagram (inline SVG) |
| `src/data/site.ts` | Name, links, email, CV path |
| `src/styles/global.css` | Design tokens (light and dark), typography, tables, code blocks |
| `public/media/` | Demo videos (H.264, converted from the chess repo's GIFs) and screenshots |
| `public/` | `CNAME`, `og.png` (social preview), `favicon.svg`, `robots.txt`, the CV PDF |

Figures on the case-study pages come from reports in the
[chess-platform repository](https://github.com/Abhinav2777/chess-platform), each linked from the
page.
