import Error from './components/util/Error'
import { AiOutlineArrowRight } from 'react-icons/ai'

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'

import styledDocumentErrors from '~/styles/document-errors.css'
import styledButtons from '~/styles/buttons.css'
import styledHeader from '~/styles/header.css'
import styledMain from '~/styles/main.css'

import Header from './components/navigation/Header'
import Sitemap from './components/Sitemap'
import Footer from './components/Footer'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Alberta Colou Painting',
  viewport: 'width=device-width,initial-scale=1',
})

function Document({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {/* <Outlet /> */}
        {children}
        <Sitemap />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    // document becomes a reusable componet that we can use in the cath errors
    <Document>
      <Outlet />
    </Document>
  )
}

// default fallback error handling
export function CatchBoundary() {
  //useCatch is a hook that gives us acces to the error response
  //  tha coused this component to render
  const caughtResponse = useCatch()
  // caughtResponse.manythings in there
  return (
    //status text should be something like not found or something like that
    <Document title={caughtResponse.statusText}>
      <main className='catchboundary-error'>
        <Error title={caughtResponse.statusText}>
          <p>
            {caughtResponse.data?.message ||
              'Our sincere apologies, something when wrong when loading the page'}
          </p>
          <p>
            Go to
            <Link className='error-goto-homepage' to='/'>
              Home Page
            </Link>
          </p>
        </Error>
      </main>
    </Document>
  )
}

// handles all other kind of erros, any unhandled error, say we try to add or remove a lead , then we catch that erros here, as we we just throw error in the catch error, it wont be an eero response but  a regular error. we wont be able to catch an error response but an error object provided by remix. it sends the erros as prop, the error pro.
//now, instead trwing th regular error we can throw a newError like new Error('Failed to delete expnse) or new Error('Failed to add lead'), at the end you dont want to show critical information that was thrown back as response
export function ErrorBoundary({ error }) {
  return (
    <Document title='An error Ocurred'>
      <main className='catchboundary-error'>
        <Error title='An error Ocurred'>
          <p>
            {error.message ||
              'Our sincere apologies, something when executing your request'}
          </p>
          <p>
            Go to
            <Link className='error-goto-homepage' to='/'>
              Home Page
            </Link>
          </p>
        </Error>
      </main>
    </Document>
  )
}

export function links() {
  return [
    { rel: 'stylesheet', href: styledDocumentErrors },
    { rel: 'stylesheet', href: styledHeader },
    { rel: 'stylesheet', href: styledButtons },
    { rel: 'stylesheet', href: styledMain },
  ]
}
