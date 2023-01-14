import { useState } from 'react'
import SliderFullScreen from './SliderFullScreen'
import {
  galleryPageData,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from '../../../public/data/galleryPageData'

export default function SlidersCarrusel() {
  const [showSliderFullScreen, setShowSliderFullScreen] = useState(false)

  const [fullScreenImages, setFullScreenImages] = useState([])
  const allImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

  const getImages = (index) => {
    setShowSliderFullScreen(true)
    const filteredImages = allImages.filter((items, i) => i === index)
    setFullScreenImages(...fullScreenImages, filteredImages)
  }

  const setFullScreenOff = () => {
    setShowSliderFullScreen(false)
    setFullScreenImages([])
  }
  return (
    <>
      <div className='sliders-carrusel-wraper'>
        {galleryPageData.map((card, index) => (
          <div
            className='gallery-card'
            key={index}
            onClick={() => getImages(index)}>
            <div className='card-img-wrapper'>
              <img src={card.img} alt={card.alt} className='gallery-card-img' />
              <div className='gallery-card-img-backdrop'></div>
            </div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      {showSliderFullScreen && (
        <div className='slider-fullscreen-wrapper-container'>
          <div className='slider-fullscreen-wrapper'>
            <SliderFullScreen
              images={fullScreenImages}
              setFullScreenOff={setFullScreenOff}
              fullscreen
            />
          </div>
        </div>
      )}
    </>
  )
}
