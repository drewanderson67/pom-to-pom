# Pom to Pom

A rebuild of the Pom to Pom marketing site (private club for professional NFL cheerleaders) with a clean, product-page aesthetic: translucent sticky nav, large type, bento tiles, scroll reveals, card carousel. Mobile-first, installable PWA, works offline.

Pages (hash routes): Home, How It Works, The Huddle, Our Story, FAQ, Privacy, Apply (Founding 50 form), Member Login.

## Build

    python3 build.py        # -> dist/index.html (single self-contained file, images inlined) + sw.js + manifest + icons
    cd dist && python3 -m http.server 8080

Source: `src/index.html`, `src/styles.css`, `src/app.js`, `src/img/`. Bump `VERSION` in `build.py` for each release (shown in the footer; also the service-worker cache key).

The application form has no backend: it validates, saves to localStorage, and offers a prefilled email to hello@pomtopom.com. Member Login is a placeholder (member area "coming soon").
