import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  drywallMudTapeImages,
  heading,
  paragraph,
} from '../../../public/data/drywallMudTapeData'
import { DrywallEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function DrywallMudTapePage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={drywallMudTapeImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        At Alberta Colour Painting, we understand that the quality of your
        drywall installation can have a significant impact on the overall
        appearance and functionality of your home or office. That's why we take
        great pride in our professionalism, patience, and focus when it comes to
        these types of projects. We know that proper drywall installation is
        essential for creating smooth, level, and uniformly straight walls, and
        we take the time to carefully plan and execute each step of the process
        to ensure that the final result meets our high standards for quality. We
        use only the highest-quality products to ensure that each wall
        seamlessly merges into the next, with no visible joins or imperfections.
        And we thoroughly inspect each piece of drywall to ensure that there are
        no holes, marks, or other damages that could compromise the finished
        product. We provide our clients with the best possible drywall
        installation service, ensuring that their walls are perfect in every
        way.
      </p>
      <p className='service-p'>
        We believe that proper preparation is essential for achieving the best
        possible results in any project. When it comes to drywall installation,
        this means taking the time to ensure that all screws and fasteners are
        properly driven below the surface of the drywall and that the joints are
        properly taped. This process involves placing the tape about 1/2”-1”
        short of the corners and then using a specialized drywall knife to press
        the tape firmly against the joint. By following these best practices, we
        can ensure that the drywall is securely and properly installed, setting
        the stage for a smooth and flawless finish.
      </p>
      <p className='service-p'>
        After the taping is completed, the next step in the drywall installation
        process is mudding. This involves mixing water with the drywall mud to
        create a thin, smooth consistency that can be easily applied to the
        surface of the drywall. It is important to apply multiple coats of mud
        to ensure that the drywall can be properly placed together and that the
        seams are fully covered and smooth. The team at Alberta Colour Painting
        has the experience and expertise to ensure that this process is
        completed with care and attention to detail, resulting in a flawless
        finish that meets the highest standards for quality.
      </p>

      <p className='service-p'>
        At Alberta Colour Painting, we pride ourselves on providing professional
        service and exceptional results for our clients. Whether you are in need
        of drywall installation, taping, or mudding services, we have the
        expertise and experience to deliver the highest-quality results. If you
        have any questions or would like to learn more about our drywall
        installation services in Calgary, please don't hesitate to reach out to
        us. We are always happy to help and answer any questions you may have.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        <DrywallEstimateButton url='../booking/drywall-ceiling-removal-and-texturing' />
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
      'Expert Drywall Repair, Installation, Tapping, and Mudding Services in Calgary',
    description:
      "Looking for reliable drywall repair and installation services in Calgary? At Alberta Colour Painting, we offer a range of services including repair, installation, tapping, and mudding for both residential and commercial properties. Whether you're working on a new construction or a renovation, we've got you covered. Contact us today to learn more.",
  }
}
