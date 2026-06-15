import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Inter, Poppins } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'Product Knowledge Portal (PKP)',
    template: '%s – PKP'
  },
  description:
    'TrueMoney Cambodia Product Knowledge Portal — product features, release notes, and how-tos.'
}

const navbar = (
  <Navbar
    logo={
      <span className="tmn-brand">
        <img
          src="/truemoney-color.webp"
          alt="TrueMoney"
          className="tmn-brand__logo"
        />
        <span className="tmn-brand__name">Knowledge Portal</span>
      </span>
    }
  />
)

const footer = (
  <Footer>
    {new Date().getFullYear()} © TrueMoney Cambodia — Product Knowledge Portal.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ChrisLegaxy/sample-web-pkp/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
