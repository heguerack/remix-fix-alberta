import SliderWidget from '../../components/util/SliderWidget'
import { gallery6 } from '../../../public/data/galleryPageData'
import styledSliderWidget from '../../styles/slider-widget.css'
import styledSliderFullscreen from '../../styles/slider-fullscreen.css'
export default function gallery6SliderPage() {
  return (
    <main>
      <div className='slider-fullscreen-wrapper-container'>
        <div className='slider-fullscreen-wrapper'>
          <SliderWidget images={gallery6} url='/gallery' />
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
    title: 'Exterior Painting Gallery: Blue Siding Projecte',
    description:
      "ake a look at our exterior painting gallery and see the transformation we achieved with this blue siding project! From the before photos to the stunning after shots, you can see the difference a fresh coat of paint can make. Whether you're considering a similar project for your own home or just want to see the quality of our work, our exterior painting gallery is the perfect place to start. Take a look and get inspired today!",
  }
}
