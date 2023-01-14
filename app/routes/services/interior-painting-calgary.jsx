import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  interiorPaintingImages,
  heading,
  paragraph,
} from '../../../public/data/interiorPaintingData'
import { PaintingEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function InteriorPaintingPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={interiorPaintingImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        At Alberta Colour Painting, we understand that your home is a reflection
        of your personal style and taste. That's why we focus on enhancing the
        pre-existing design of your space through our interior painting
        services. We believe that every home has the potential to be beautiful,
        and a fresh coat of paint can go a long way towards bringing out its
        best features. While many people believe that they can tackle wall
        painting on their own, it's actually one of the most difficult and
        time-consuming tasks in the world of home improvement. That's why we
        encourage our clients to sit back and relax, while we handle all of the
        hard work for them. From wall painting to cabinet painting, trim
        painting, and ceiling painting, we have the expertise and experience to
        transform the interior of your home into a space that you'll be proud to
        call your own.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we are committed to providing our clients
        with exceptional results at an affordable price. Our team of experienced
        professionals uses only the highest quality products to ensure that your
        interior painting project is a success, no matter the size of the space.
        From bedrooms and kitchens to living rooms and beyond, we have the
        expertise and equipment to handle any project. We understand that the
        inside of your home or commercial space should match your dreams and
        desires aesthetically, which is why we work closely with our clients to
        understand their vision and bring it to life. So if you're ready to
        transform the look and feel of your space, don't hesitate to contact
        Alberta Colour Painting today. We'll be happy to help you make your
        colour dreams a reality.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        <PaintingEstimateButton url='../booking/interio/painting/calgary' />
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
      "Calgary's Top House Painters: Professional Interior Painting Services",
    description:
      'Looking for top-quality residential painting and interior painting services in Calgary? Look no further! Our team of professional house painters is dedicated to delivering the best results for your home. We are your one-stop resource for all of your painting needs in Calgary, Alberta. Contact us today to schedule your consultation and get started on your dream home transformation.',
  }
}
