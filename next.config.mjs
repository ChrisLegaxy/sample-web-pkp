import nextra from 'nextra'

const withNextra = nextra({
  // Nextra reads MDX from the `content/` directory by default.
  // Search is handled at build time by Pagefind (see `build` script).
  search: {
    codeblocks: false
  }
})

export default withNextra({
  // Frontend-only static site: emit plain HTML/JS into `out/`.
  output: 'export',
  // `next/image` optimization needs a server; disable it for static export.
  images: {
    unoptimized: true
  },
  // Serve clean URLs as directories (knowledge-center/page/index.html).
  trailingSlash: true
})
