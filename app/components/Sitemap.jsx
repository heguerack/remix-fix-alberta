import { Link } from '@remix-run/react'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai'
export default function Sitemap() {
  return (
    <section className='sitemap'>
      <h6 className='lighter'>NAVIGATION</h6>
      <Link to='/' className='lightdark'>
        HOME
      </Link>
      <Link to='about-us' className='lightdark'>
        ABOUT
      </Link>
      <div className='lightdark'>SERVICES</div>
      <div className='sitemap-services'>
        <Link to='/services/interior-painting-calgary' className='darker'>
          Interior Painting
        </Link>
        <Link to='services/exterior-painting-calgary' className='darker'>
          Exterior Painting
        </Link>
        <Link to='/services/commercial-painting-calgary' className='darker'>
          Commercial Painting
        </Link>
        <Link to='/services/ceiling-painting-calgary' className='darker'>
          Ceiling Painting
        </Link>
        <Link to='/services/popcorn-ceiling-removal-calgary' className='darker'>
          Popcorn Removal
        </Link>
        <Link to='/services/drywall-mud-&-tape-calgary' className='darker'>
          drywall Tape & Mud
        </Link>
        <Link to='/services/ceiling-texturing-calgary' className='darker'>
          Ceiling Texturing
        </Link>
        <Link
          to='/services/exterior-stucco-application-calgary'
          className='darker'>
          Stucco Aplication
        </Link>
      </div>

      <Link to='gallery' className='lightdark'>
        GALLERY
      </Link>
      <Link to='offers' className='lightdark'>
        OFFERS
      </Link>
      <Link to='blogs' className='lightdark'>
        BLOGS
      </Link>
      <Link to='contact' className='lightdark'>
        CONTACT
      </Link>
      <h3 className='lighter'>CONTACT US</h3>
      <h4 className='lightdark'>ADDRESS</h4>
      <p className='lightdark'>370 Brightonstone Green SE, Calgary, AB.</p>
      <h4 className='lightdark'>Phone Number</h4>
      <p className='lightdark'>587-966-6547</p>
      <h4 className='lightdark'>Email</h4>
      <p className='lightdark'>info@albertacolourpainting.com</p>
      <div className='sitemap-social-icons'>
        <a
          href='https://www.facebook.com/albertacolourpainting/'
          aria-label='Visit Alberta COlour Painting facebook page'>
          <AiFillFacebook className='lightdark social-icon' />
        </a>
        <a
          href='https://www.youtube.com/watch?v=u3HHpLQDVsk'
          aria-label='Visit Alberta Colour Painting youtube page'>
          <AiFillYoutube className='lightdark social-icon' />
        </a>
        <a
          href='https://twitter.com/albertacolour'
          aria-label='Visit Alberta Colour Painting twitter page'>
          <AiFillTwitterCircle className='lightdark social-icon' />
        </a>
        <a
          href='https://www.instagram.com/albertacolourpainting/?hl=en'
          aria-label='Visit Alberta Colour Painting instagram page'>
          <AiFillInstagram className='lightdark social-icon' />
        </a>
      </div>
    </section>
  )
}
