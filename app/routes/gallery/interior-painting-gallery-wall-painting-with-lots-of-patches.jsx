import SliderWidget from '../../components/util/SliderWidget'
import { gallery3 } from '../../../public/data/galleryPageData'
import styledSliderFullscreen from '../../styles/slider-fullscreen.css'
import styledSliderWidget from '../../styles/slider-widget.css'

export default function gallery3SliderPage() {
  // console.log(gallery1)
  return (
    <main>
      <div className='slider-fullscreen-wrapper-container'>
        <div className='slider-fullscreen-wrapper'>
          <SliderWidget images={gallery3} url='/gallery' />
        </div>
      </div>
    </main>
  )
}

export function links() {
  return [
    { rel: 'stylesheet', href: styledSliderFullscreen },
    { rel: 'stylesheet', href: styledSliderWidget },
  ]
}
export function meta() {
  return {
    title: 'Interior Painting Gallery: Wall Painting with Many Patches',
    description:
      "Take a look at our interior painting gallery and see the transformation we achieved with this wall painting project featuring many patches! From the before photos to the stunning after shots, you can see the difference a fresh coat of paint and some expert patching can make. Whether you're considering a similar project for your own home or just want to see the quality of our work, our interior painting gallery is the perfect place to start. Take a look and get inspired today!",
  }
}
