# SEO And Discoverability

Outruna currently ships as a client-only Vite SPA. It has no router, server-side rendering, prerendering, or service worker. The root HTML now contains a truthful public product introduction with one H1 before the authentication-gated wallet application replaces it during startup.

Stable metadata is emitted in `index.html`. The Vite build replaces the `__OUTRUNA_SITE_URL__` placeholder using `VITE_SITE_URL`, with `https://outruna.top` as the production fallback. Localhost and internal hostnames are rejected from production metadata.

`public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, and `public/llms-full.txt` are copied into `dist/`. The sitemap contains only the public root URL; authenticated wallet state and API routes are excluded.

Production hosting should serve HTML and these public text files with revalidation or short caching. Hashed JavaScript and CSS assets may use immutable caching. The frontend has no service worker that can pin stale metadata.

The signed production build remains the source of truth for deployment verification. Run `npm run verify` in `outruna/` after building.
