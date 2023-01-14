import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  exteriorPaintingImages,
  heading,
  paragraph,
} from '../../../public/data/exteriorPaintingData'
import { PaintingEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function ExteriorPaintingPage() {
  // console.log(interiorPaintingImages)
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={exteriorPaintingImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>

      <p className='service-p'>
        When you choose Alberta Colour Painting for your exterior painting
        needs, you can rest assured that you are getting a high-quality service
        that will both enhance the appearance of your property and protect its
        value in the long run. Our team of experienced professionals uses only
        the highest quality exterior paints and materials to ensure that the
        final product not only looks sharp, but also stands up to the elements
        and lasts for years to come. We understand that your home or business is
        likely one of the biggest investments you will ever make, which is why
        we are committed to helping you protect that investment through our
        exterior painting services. Whether you want to refresh the look of your
        home, update its color scheme, or simply protect its exterior from the
        elements, we have the expertise to get the job done right.
      </p>

      <p className='service-p'>
        Most exterior painting in Calgary is done during the summer months to
        take advantage of the long, dry days and ensure the best finish on your
        building. While we can handle all of the preparation work in any
        weather, we recommend scheduling your exterior painting project for dry
        conditions to ensure the best results. So if you're ready to make your
        property look its best and protect its value for years to come, don't
        hesitate to contact Alberta Colour Painting today. Our team of
        experienced professionals will work with you to identify the best
        solutions for your needs and budget, and we'll use only the highest
        quality exterior paints and materials to ensure that your paint job
        lasts for years to come.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        <PaintingEstimateButton url='../booking/house-painting' />
      </div>
    </main>
  )
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledSliderSection },
    { rel: 'stylesheet', href: styledSlider },
    { rel: 'stylesheet', href: styledService },
  ]
}
export function meta() {
  return {
    title:
      'Expert Exterior Painters in Calgary: Quality Painting Services and Contractors',
    description:
      'Looking for top-quality residential exterior painting services in Calgary? We are the best exterior painters in the city! Our team of expert contractors is dedicated to delivering the best results for your home. Contact us today to schedule your consultation and get started on your dream home transformation.',
  }
}
