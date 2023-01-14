import SliderSection from '../util/SliderServiceSection'
import SliderCarrusel from '../util/SliderCarrusel'
import {
  homeGalleryImages,
  heading,
  paragraph,
} from '../../../public/data/homeData'

export default function HomeGallery() {
  const myButton = true
  return (
    <section>
      <SliderSection
        myClass='home-gallery-section'
        images={homeGalleryImages}
        heading={heading}
        paragraph={paragraph}
        myButton={myButton}
      />
      <SliderCarrusel />
    </section>
  )
}
