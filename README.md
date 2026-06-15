# Knowledge Center

A frontend-only company knowledge center built with [Next.js](https://nextjs.org)
and [Nextra](https://nextra.site) (docs theme). Content is plain Markdown/MDX,
and the site builds to a static set of HTML/JS files — no backend required.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build (static export)

```bash
npm run build
```

This runs `next build` (exporting to `out/`) and then `pagefind` to generate the
full-text search index. The `out/` folder is a complete static site you can host
on any static host (S3, GitHub Pages, Netlify, internal nginx, etc.).

To preview the production build locally:

```bash
npm run serve
```

## Adding / editing content

All content lives in [`content/`](content/):

- Add a `.md` or `.mdx` file — it becomes a page automatically.
- Folders become sidebar sections.
- Control labels and ordering with `_meta.js` files (see existing ones).
- Frontmatter `title:` sets the page/browser title.

You can use MDX components (callouts, tabs, steps, etc.) imported from
`nextra/components`.

## Project structure

```
app/                    # Next.js App Router entry (catch-all renders MDX)
  layout.jsx            # Navbar, footer, theme config
  [[...mdxPath]]/       # Renders any content/ page
content/                # ← your Markdown/MDX lives here
  _meta.js              # Top-level nav order
mdx-components.js       # MDX component overrides
next.config.mjs         # Static export + Nextra config
```
