import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  stuccoImages,
  heading,
  paragraph,
} from '../../../public/data/stuccoData'
// import { DrywallEstimateButton } from '~/components/util/Buttons'
import { PaintingEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function ExteriorStuccoPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={stuccoImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        Stucco is a mixture of cement, sand, and water that is applied to the
        exterior of a building in layers. The first layer, known as the scratch
        coat, is applied to the surface of the building and then scored with a
        tool to create a rough texture. The second layer, known as the brown
        coat, is applied over the scratch coat and is smoothed out to create a
        uniform surface. The final layer, known as the finish coat, is applied
        over the brown coat and is textured or smoothed to the desired finish.
      </p>
      <p className='service-p'>
        There are several benefits to using stucco for the exterior of your
        property in Calgary. Stucco is a durable material that is resistant to
        weathering and can last for many years with proper maintenance. It is
        also a low-maintenance option, as it does not require painting or other
        regular upkeep. Stucco is also energy-efficient, as it helps to insulate
        the building and can reduce energy costs.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we are committed to providing our clients
        with the highest-quality stucco application services. We take pride in
        our attention to detail and our ability to deliver excellent results on
        every project. Whether you are looking to add stucco to a new
        construction project or are updating the exterior of an existing
        building, we have the skills and experience to get the job done right.
        In addition to stucco application, we also offer stucco repair and
        maintenance services to help keep your stucco looking its best.
      </p>
      <p className='service-p'>
        If you are considering adding stucco to the exterior of your property in
        Calgary, look no further than Alberta Colour Painting. Our team of
        skilled professionals is trained in all aspects of stucco application
        and is committed to delivering exceptional results. We use only the
        highest-quality materials and follow industry best practices to ensure
        that your stucco application is of the highest quality. Contact us today
        to learn more about our stucco services and to schedule a consultation.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        {/* <DrywallEstimateButton url='../booking/drywall-ceiling-removal-and-texturing' /> */}
        <PaintingEstimateButton url='../booking/house-painting-and-commercial-painting' />
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
      'Professional Exterior Stucco Repair and Application Services in Calgary',
    description:
      'Need to repair or apply stucco to the exterior of your property in Calgary? Look no further! Our team of expert contractors specialize in stucco repair and application for both residential and commercial properties. Contact us today to schedule a consultation and get a quote for your project.',
  }
}
