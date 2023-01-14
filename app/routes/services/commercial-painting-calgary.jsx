import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  commercialPaintingImages,
  heading,
  paragraph,
} from '../../../public/data/commercialPaintingData'
import { PaintingEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'
export default function CommercialPaintingPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={commercialPaintingImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        With our profesional painters and people involved in commercial
        painting, we make sure we work with you to come up with a painting plan
        that fits your company`'`s needs. From small to medium projects such as
        office spaces, retail stores or rentals, we display professionalism and
        quality in your place of work.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we understand that every commercial painting
        project is unique, which is why we work closely with our clients to
        develop a personalized painting plan that fits their specific needs. Our
        team of professional painters has the skills and experience necessary to
        handle a wide range of commercial painting projects, from small office
        spaces to medium-sized retail stores and rentals. We are committed to
        displaying the highest level of professionalism and delivering
        exceptional quality workmanship. We understand that your place of work
        is a reflection of your company's values and reputation, which is why we
        take pride in delivering results that exceed your expectations. So if
        you're looking for a commercial painting team that will work with you to
        achieve the best possible results,we are here to help.
      </p>
      <p className='service-p'>
        We understand that every commercial painting project is unique and
        requires a customized approach. From diverse layouts and designs to
        building age and structure, there are many factors that can impact the
        price of a commercial painting project. That's why we take the time to
        thoroughly assess the details of each project before providing a quote.
        Our goal is to ensure that we deliver exceptional services that meet
        your needs and budget. We believe that open communication is key to
        success, which is why we work closely with our clients to understand
        their goals and expectations. Whether you have a small office space or a
        large commercial property, we have the expertise and resources to
        deliver the best possible results. We work with you to achieve the best
        commercial paintg results.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we aslo understand that quality should
        always come first, especially when it comes to large commercial painting
        projects. While other companies may prioritize man power over quality,
        we believe that our clients deserve the best. That's why we specialize
        in small to medium commercial painting projects, where we can provide
        the highest level of attention and care. Our team of experienced
        professionals is dedicated to delivering exceptional results and an
        unparalleled service experience for our clients. We understand that your
        commercial property is a reflection of your company's values and
        reputation, which is why we are committed to delivering the best
        possible results. So if you're ready to give your commercial property a
        new look and a new lease on life, don't hesitate to contact Alberta
        Colour Painting today.
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
    title: 'Expert Commercial Painters for Properties and Spaces in Calgary',
    description:
      'Looking for experienced commercial painters in Calgary? Look no further! Our team of expert painters specializes in painting commercial properties and spaces. Contact us today to schedule a consultation and get a quote for your project.',
  }
}
