import SliderWidget from '../../components/util/SliderWidget'
import { gallery5 } from '../../../public/data/galleryPageData'
import styledSliderWidget from '../../styles/slider-widget.css'
import styledSliderFullscreen from '../../styles/slider-fullscreen.css'
export default function gallery5SliderPage() {
  return (
    <main>
      <div className='slider-fullscreen-wrapper-container'>
        <div className='slider-fullscreen-wrapper'>
          <SliderWidget images={gallery5} url='/gallery' />
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
    title: 'Drywall Art Gallery: Creative Inspiration for Your Home',
    description:
      "Get inspired by our drywall art gallery! Featuring a variety of creative designs and finishes, this collection is sure to have something for every taste. From textured finishes to intricate patterns, our drywall art is the perfect way to add a unique touch to your home. Whether you're looking to add a statement wall or just want to add some subtle interest to your space, our drywall art gallery has plenty of ideas to spark your creativity. Take a look and get inspired today!",
  }
}
