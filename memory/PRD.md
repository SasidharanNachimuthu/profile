# Portfolio — PRD

## Original problem statement
> I need to create portfolio application. which needs to neat and clean. I would
> like to have home page, Blog page. Blogs will be posted by me by providing
> markdown content. I am going to publish this github.io feature. Build a Neat
> and crisp theme one.

## User choices
- About section: placeholder content (editable later)
- Home sections: Hero + About + Skills + Projects + Contact
- Blog: static markdown files committed to the repo (no admin backend)
- Theme: Light, minimal, editorial
- Hosting: GitHub Pages (static)

## Architecture
- **Frontend only**, single React app (CRA + craco), no backend required.
- Routing: `HashRouter` (`/#/`, `/#/blog`, `/#/blog/:slug`) — compatible with
  GitHub Pages deep links.
- Markdown posts live in `/app/frontend/public/blog/*.md`; a manifest in
  `/app/frontend/src/content/posts.js` controls listing order and metadata.
- Personal info in `/app/frontend/src/content/portfolio.js`.

## Implemented (2026-06-21)
- Light/editorial design system (Cormorant Garamond + Outfit + JetBrains Mono),
  tinted neutrals (`#FAF9F6` / `#1A1A19`), Tetris/asymmetric layout.
- Sticky glass header with desktop + mobile nav (Index / Work / About / Journal
  / Contact). Smooth scroll to in-page anchors (HashRouter-safe).
- Home page: hero with avatar grid, editorial marquee for skills
  (`react-fast-marquee`), about section, projects list, journal preview.
- Blog list page: numbered entries, date + read-time, tag chips.
- Blog post page: front-matter parsing (`front-matter`), GFM + raw HTML
  rendering (`react-markdown` + `remark-gfm` + `rehype-raw`), prev/next
  pagination, graceful "missing" state.
- Footer: massive "Say hello" mailto CTA, sitemap, socials, colophon.
- 404 fallback page.
- All interactive elements carry kebab-case `data-testid`.
- README in `/app/frontend/public/blog/` explaining how to add new posts.

## Bug fixes
- 2026-06-21: HashRouter + in-page anchor incompatibility (testing agent
  iteration 1). Replaced `<a href="#section">` with programmatic
  `scrollIntoView` in Header nav, hero CTA, and Footer sitemap.
- 2026-06-21: Patched `react-scripts` webpack-dev-server config for v5 API
  compatibility (setupMiddlewares + server.type).

## Test status
- iteration_1: 8/9 flows pass. CRITICAL HashRouter anchor bug found.
- Fix applied; visual verification confirms Work nav + hero CTA now scroll to
  `#work` instead of 404.

## Backlog / Next actions
- **P0**: User needs to personalize `/app/frontend/src/content/portfolio.js`
  (name, bio, contact email, socials, project list).
- **P1**: Add a build/deploy script for `github.io` (`gh-pages` package +
  `homepage` field + `predeploy: yarn build`).
- **P1**: Add an RSS feed generator for blog posts (build-time).
- **P2**: Per-post hero images / OG meta tags for social sharing.
- **P2**: Dark-mode toggle.
- **P2**: Tag filtering on the journal index.
- **P2**: A real favicon and meta description.
