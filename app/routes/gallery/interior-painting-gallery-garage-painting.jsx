import SliderWidget from '../../components/util/SliderWidget'
import { gallery2 } from '../../../public/data/galleryPageData'
import styledSliderWidget from '../../styles/slider-widget.css'
import styledSliderFullscreen from '../../styles/slider-fullscreen.css'

export default function gallery2SliderPage() {
  return (
    <main>
      <div className='slider-fullscreen-wrapper-container'>
        <div className='slider-fullscreen-wrapper'>
          <SliderWidget images={gallery2} url='/gallery' />
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
    title:
      'Alberta Colour Painting Image Gallery: Before and After Transformations',
    description:
      "Take a look at the amazing transformations we've achieved for our clients with Alberta Colour Painting! Our image gallery showcases a variety of before and after photos of interior and exterior painting projects. From cozy cottages to modern apartments, we've got a wide range of styles and finishes to inspire you. Whether you're looking for ideas for your own home or just want to see the quality of our work, our image gallery is the perfect place to start. Take a look and get inspired today!",
  }
}
