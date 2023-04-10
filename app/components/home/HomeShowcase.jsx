// import {
//   // DrywallEstimateButton,
//   // PaintingEstimateButton,
//   // CallEstimateButton,
// } from '../util/Buttons'
import { EstimateButton } from '../util/Buttons'
import ContactFormSmall from '~/components/util/ContactFormSmall'

export default function HomeShowcase() {
  return (
    <section className='home-showcase'>
      <div className='backdrop'>
        <div className='backdrop-left'>
          <h1 className='h1 home-h1'>
            <span>The Best Calgary Painters</span>
            <span> for Affordable</span>
            <span>Interior and Exterior Painting Services</span>
          </h1>
          <EstimateButton />
          {/* <DrywallEstimateButton /> */}
          <div className='home-showcase-awards'>
            <div>
              <img
                src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/5-star-google-reviews_nfyqdb.webp'
                alt='alberta colour google reviews - rating 5.0'
                className='home-showcase-awards-google'
              />
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp'
                alt='best of the best award homestars winner 2022 - white version'
                className='home-showcase-awards-homestars'
              />
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/bbb-A_ogtk29.webp'
                alt='bbb - acredited business bureau with rating A+'
                className='home-showcase-awards-bbb'
              />
            </div>
          </div>
        </div>
        <div className='back-drop-right'>
          <ContactFormSmall comingFrom='showcase-home' />
        </div>
      </div>
    </section>
  )
}
export function links() {
  return [{ rel: 'stylesheet', href: styledContact }]
}
