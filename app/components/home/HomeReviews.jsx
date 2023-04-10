import {
  BigHomestarsIframe,
  SmallHomestarsIframe,
  GoogleIframe,
} from '../../components/util/Iframes'
import { EstimateButton } from '../util/Buttons'
export default function HomeReviews() {
  return (
    <section className='home-reviews'>
      {/* awards  awards  awards  awards  awards  awards */}
      <div className='home-reviews-awards-middlewrap'>
        <div>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/5-star-google-reviews_nfyqdb.webp'
            alt='alberta colour google reviews - rating 5.0'
            className='home-review-adward-google'
          />
        </div>
        <div className='home-reviews-awards-homestars'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/best-of-awards-winner-2021-black-version_cv3cih.webp'
            alt='best of the best award homestars winner 2022 - black version'
            className='home-reviews-awards-homestars-img'
          />
        </div>
        <div>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/awards/bbb-A_ogtk29.webp'
            alt='bbb - acredited business bureau with rating A+'
            className='home-review-adward-bbb-img'
          />
        </div>
      </div>
      <div className='homestars-iframe-container'>
        <SmallHomestarsIframe />
        <BigHomestarsIframe />
      </div>
      <div className='google-iframe-container'>
        <GoogleIframe />
      </div>
      {/* remember there isa book-button wrapper class inside them! */}
      <EstimateButton />
      {/* <DrywallEstimateButton /> */}
    </section>
  )
}
