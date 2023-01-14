import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styledMain from '~/styles/main.css'
import styledHeader from '~/styles/header.css'
import styledButtons from '~/styles/buttons.css'
import Header from './components/navigation/Header'
import Sitemap from './components/Sitemap'
import Footer from './components/Footer'
export const meta = () => ({
  charset: 'utf-8',
  title: 'Alberta Colou Painting',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Sitemap />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledHeader },
    { rel: 'stylesheet', href: styledMain },
    { rel: 'stylesheet', href: styledButtons },
  ]
}
