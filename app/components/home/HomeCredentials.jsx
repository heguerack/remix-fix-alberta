import { Link } from '@remix-run/react'
import { PaintingEstimateButton } from '../util/Buttons'
export default function HomeCredentials() {
  return (
    <section className='home-credentials'>
      <h2 className='home-credentials-heading'>CALGARY PAINTING COMPANY</h2>
      <p className='home-credentials-p1'>
        Receive amazing house painting results at competitive prices
      </p>
      <p className='home-credentials-p2'>
        Our Touch Of Paint Makes A Difference!
      </p>
      <div className='credentials-cards-wrapper'>
        <Link to='booking' className='credential-card'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797215/home/credentials/calendar-clock-icon_jh48go.jpg'
            alt='calendar and clock icon. The clock is on top of the calendard, they kind of merge together'
            className='credential-card-img'
          />
          <div className='credential-card-bar'></div>
          <p className='credential-card-p'>FREE</p>
          <p className='credential-card-p'>DETAILED</p>
          <p className='credential-card-p'>ESTIMATES</p>
        </Link>
        <Link to='about' className='credential-card'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797215/home/credentials/house-painter-icon_qygmaj.png'
            alt='A guy holding a poaint can with one hand and a roller with the other hand, like fi he was  going to paint a ceiling'
            className='credential-card-img'
          />
          <div className='credential-card-bar'></div>
          <p className='credential-card-p'>SKILLED</p>
          <p className='credential-card-p'>PROFESSIONAL</p>
          <p className='credential-card-p'>PAINTERS</p>
        </Link>
        <Link to='about' className='credential-card'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797216/home/credentials/licensed-icon_klkybk.png'
            alt='an icon - implying a document or business licence'
            className='credential-card-img'
          />
          <div className='credential-card-bar'></div>
          <p className='credential-card-p'>LICENSED</p>
          <p className='credential-card-p'>INSURED</p>
          <p className='credential-card-p'>ECO-FRIENDLY</p>
        </Link>
        <Link to='about' className='credential-card'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797217/home/credentials/reputation-for-quality-icon_etjeio.png'
            alt='an icon implyinh a distiction or medal'
            className='credential-card-img'
          />
          <div className='credential-card-bar'></div>
          <p className='credential-card-p'>REPUTATION</p>
          <p className='credential-card-p'>FOR</p>
          <p className='credential-card-p'>QUALITY</p>
        </Link>
      </div>
      <h3 className='credential-h3'></h3>
      <p></p>
      <p></p>
      <p></p>
      <PaintingEstimateButton url='/booking/house-painting' />
    </section>
  )
}
