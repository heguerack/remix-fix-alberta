import { Link } from '@remix-run/react'

export default function HomeServices() {
  return (
    <section className='our-services-section'>
      <h2>MAIN PAINTING SERVICES</h2>
      {/* PAINTING SERVICES  PAINTING SERVICES  PAINTING SERVICES */}
      <div className='our-services-wrapper painting-services-wrapper'>
        <div className='service-card-wrapper '>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797217/home/services/interior-painting-brush_gooksk.png'
            alt='a paint brush inside a house'
          />
          <h3 className='single-service'>
            <span>INTERIOR</span>
            <span>PAINTING</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/house-painting-and-commercial-painting'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/interior-painting-calgary'>VISIT PAGE</Link>
          </div>
        </div>
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797217/home/services/exterior-painting-brush_ukhh2h.png'
            alt='a paint brush outside a house'
          />
          <h3 className='single-service'>
            <span>EXTERIOR </span>
            <span>PAINTING</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/house-painting-and-commercial-painting'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/exterior-painting-calgary'>VISIT PAGE</Link>
          </div>
        </div>
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797216/home/services/commercial-painting-icon_rwbsf9.png'
            alt='commercial building - black background'
          />
          <h3 className='single-service'>
            <span>COMMERCIAL</span>
            <span>PAINTING</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/house-painting-and-commercial-painting'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/commercial-painting-calgary'>VISIT PAGE</Link>
          </div>
        </div>
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797215/home/credentials/house-painter-icon_qygmaj.png'
            alt='a painter holding a paint can with one arm and a paint roller up with the other hand, like if he was going to paint a ceiling '
          />
          <h3 className='single-service'>
            <span>CELING </span>
            <span>PAINTING</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/house-painting-and-commercial-painting'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/ceiling-painting-calgary'>VISIT PAGE</Link>
          </div>
        </div>
      </div>
      {/* DRYWALL SERVICES  DRYWALL SERVICES  DRYWALL SERVICES */}
      <h2>DRYWALL & STUCCO SERVICES</h2>
      <div className='our-services-wrapper'>
        <div className='service-card-wrapper'>
          <img
            className='popcorn-image'
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797217/home/services/gg_hrotnm.png'
            alt='a guy scraping popcorn texture from a ceiling'
          />
          <h3 className='single-service'>
            <span>POPCORN</span>
            <span>REMOVAL</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/popcorn-ceiling-removal-calgary'>
              VISIT PAGE
            </Link>
          </div>
        </div>
        {/* // */}
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797216/home/services/drywall-mud_scepy2.jpg'
            alt='a guy applying drywall mud on a wall'
          />
          <h3 className='single-service'>
            <span>DRYWALL</span>
            <span>MUD & TAPE</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/drywall-mud-&-tape-calgary'>VISIT PAGE</Link>
          </div>
        </div>
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797217/home/services/popcorn-ceiling-icon_bgmyhh.png'
            alt='celing texture spray gun in action'
          />
          <h3 className='single-service'>
            <span>CEILING</span>
            <span>TEXTURING</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/ceiling-texturing-calgary'>VISIT PAGE</Link>
          </div>
        </div>
        <div className='service-card-wrapper'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797216/home/services/commercial-painting-brush-and-roll_nd1ueh.png'
            alt='big house, it shows equipment and tools for exterior stucco application'
          />
          <h3 className='single-service'>
            <span>STUCCO</span>
            <span>APPLICATION</span>
          </h3>
          <div className='service-buttons-div'>
            <Link to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
              BOOK ESTIMATE!
            </Link>
            <span>OR</span>
            <Link to='/services/exterior-stucco-application-calgary'>
              VISIT PAGE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
