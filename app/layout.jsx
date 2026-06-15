import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Product Knowledge Portal (PKP)',
    template: '%s – PKP'
  },
  description:
    'Product Knowledge Portal — product features, release notes, and how-tos.'
}

const navbar = (
  <Navbar
    logo={<b>🧾 Product Knowledge Portal</b>}
    // projectLink can point to an internal repo or be removed entirely.
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()} © Product Knowledge Portal (PKP).
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          // Points the "Edit this page" link at your content folder.
          // Update this URL when you have an internal repo, or remove it.
          docsRepositoryBase="https://github.com/ChrisLegaxy/sample-web-pkp/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
