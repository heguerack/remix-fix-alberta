import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  popcornRemovalImages,
  heading,
  paragraph,
} from '../../../public/data/popcornRemovalData'
// import { DrywallEstimateButton } from '~/components/util/Buttons'
import { PaintingEstimateButton } from '~/components/util/Buttons'
import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderServiceSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'
export default function PopcornCeilingRemovalPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={popcornRemovalImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        Popcorn ceiling removal in Calgary can be a complex process, which is
        why it's important to hire a professional team like Alberta Colour
        Painting to handle the job. We begin by protecting your interior
        flooring, furniture, and appliances to ensure that they are not damaged
        during the removal process. Next, we remove any light fixtures or fans
        to create a clear, open workspace. We then dampen your popcorn ceiling
        with a light mist of water and a small amount of softener to loosen the
        texture. This mixture is left to dry for 15 minutes, allowing the
        moisture to soak into the ceiling and soften the popcorn texture.
      </p>
      <p className='service-p'>
        Once the ceiling has been prepped, we carefully scrape away the popcorn
        texture using a wide blade. This is a delicate process that requires
        patience and attention to detail, as damaging the ceiling can occur if
        not done properly. After the texture has been removed, we sand back the
        surface to ensure a smooth finish. We then use a shop-vac to remove any
        excess water and debris, and apply a stain blocker primer to the
        ceiling. As you will see next, whole process of popcorn ceiling removal
        is of paramount importncs to us.
      </p>
      <p className='service-p'>
        Our professionals, take great care in ensuring that every step of the
        popcorn ceiling removal process is done with precision and attention to
        detail. Once the ceiling has been prepped, we carefully scrape away the
        popcorn texture using a wide blade / or putty knives, taking care not to
        damage the ceiling in the process. After the texture has been removed,
        we sand back the surface to ensure a smooth, even finish. We then use a
        shop-vac to remove any excess water and debris, and apply a stain
        blocker primer to the ceiling. This is an important step as it helps to
        create a smooth, even surface for the paint to adhere to and prevents
        any discoloration or staining.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we offer a complete popcorn ceiling removal
        service that is designed to meet the needs of our clients. We take great
        pride in our professionalism and are committed to delivering exceptional
        results for every project. Our team of experienced professionals will
        handle every step of the process, from removing the popcorn ceiling and
        adding a multiple coats uf mud to keep the surface smooth, to sanding,
        priming, and painting in the color of your choice. We understand that
        your home or office is a reflection of your style and values, which is
        why we are dedicated to delivering a finished product that exceeds your
        expectations. So if you're ready to transform your space with a new
        ceiling, don't hesitate to contact Alberta Colour Painting today.
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
    { rel: 'stylesheet', href: styledSliderServiceSection },
    { rel: 'stylesheet', href: styledSlider },
    { rel: 'stylesheet', href: styledService },
  ]
}
export function meta() {
  return {
    title: 'Calgary Popcorn Ceiling Removal and Repair: Professional Services',
    description:
      'Want ceiling popcorn removal services in Calgary? Look no further! Our team is here to transform your popcorn ceilings into smooth and flat surfaces. Contact us today to schedule your consultation and get started on your home renovation project."',
  }
}
