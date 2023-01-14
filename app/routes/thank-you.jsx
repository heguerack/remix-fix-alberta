import styledThankyou from '../styles/thankyou.css'
import styledSliderCarrusel from '../styles/slider-carrusel.css'
import styledSliderFullscreen from '../styles/slider-fullscreen.css'
// import SlidersCarrusel from '~/components/util/SliderCarrusel'
import { Link } from '@remix-run/react'

export default function ThankYouPage() {
  return (
    <main>
      <div className='thankyou-headings-wrap'>
        <h1>Thank you for Contacting Alberta Colour Painting</h1>
        <h2>Your information has been submitted</h2>
      </div>
      <p>Feel free to check our picture galleries!</p>{' '}
      <Link className='gallery-link-button' to='/gallery'>
        Go to Gallery
      </Link>
      {/* <SlidersCarrusel /> */}
    </main>
  )
}
export function meta() {
  return {
    title:
      'Thank You for Choosing Alberta Colour Painting: Your Trusted Calgary Painting Company',
    description:
      "Thank you for choosing Alberta Colour Painting for your painting needs in Calgary. Our team of experienced painters is dedicated to delivering top-quality results and excellent customer service. We appreciate your business and look forward to the opportunity to work with you again in the future. If you have any questions or concerns, please don't hesitate to contact us. Thank you again for choosing Alberta Colour Painting - we appreciate your business!",
  }
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledThankyou },
    { rel: 'stylesheet', href: styledSliderCarrusel },
    { rel: 'stylesheet', href: styledSliderFullscreen },
  ]
}
