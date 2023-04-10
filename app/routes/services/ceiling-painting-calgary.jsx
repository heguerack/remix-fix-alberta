import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  ceilingPaintingImages,
  heading,
  paragraph,
} from '../../../public/data/ceilingPaintingData'
import { EstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function ceilingPaintingPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={ceilingPaintingImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        To start, we take great care to protect your floors first , we bring in
        drop cloths to cover them to prevent any accidental spills or drips. we
        then bring our tools and then, we carefully cover your furniture and
        belongings with plastic sheets to ensure that they are protected from
        any paint splatters or drips. We also shield window frames, door frames,
        and any other surfaces that may come into contact with paint to prevent
        any accidental messes. If your walls are not being painted, we'll make
        sure to cover them as well to protect them from any overspray or
        splatters. To ensure that everything is fully protected, we use
        high-quality tapes such as Frog tapes to carefully seal off any edges or
        corners. This way, we can ensure that your home remains clean and
        protected throughout the entire painting process.
      </p>
      <p className='service-p'>
        Before we begin the actual painting process, we take the time to
        carefully remove any necessary lights and mask around the ones that we
        are unable to remove. This is to ensure that no paint gets on any
        electrical fixtures and to protect your home's lighting. To achieve a
        beautiful, flawless finish on your walls, we use airless pumps with fine
        nozzles to apply the paint evenly and smoothly. We also use flat paint
        to eliminate any unwanted shine and to create a more matte, subtle
        finish. If there are any stains or imperfections on the ceiling, we take
        the extra step of priming them with an oil-based primer before painting.
        This helps to cover and conceal any blemishes, ensuring that your
        ceiling looks clean and smooth once it is painted.
      </p>
      <p className='service-p'>
        On average, our ceiling painting process takes approximately one day to
        complete on a standard sized house. However, for larger homes, it may
        take up to two days to fully paint the ceiling. We have a
        well-established process that we follow to ensure that the job is done
        efficiently and to the highest possible standards. If you would like to
        see the entire process in action, you can check out our gallery page to
        see some examples of our previous work. If you are looking for the best
        ceiling painting experience in Calgary, choose Alberta Colour Painting.
        Our team of experienced professionals is dedicated to providing
        top-quality service and delivering excellent results every time.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        <EstimateButton />
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
