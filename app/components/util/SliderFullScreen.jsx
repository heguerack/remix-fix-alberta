import SliderWidget from './SliderWidget'

export default function SliderFullScreenn({ images, url, setFullScreenOff }) {
  const imagesArray = images[0]
  return (
    <div className='slider-fullscreen-wrapper-container'>
      <div className='slider-fullscreen-wrapper'>
        <SliderWidget
          images={imagesArray}
          setFullScreenOff={setFullScreenOff}
          url={url}
          fullscreen='true'
        />
      </div>
    </div>
  )
}
