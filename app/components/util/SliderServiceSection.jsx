import SliderWidget from './SliderWidget'
import { Button } from './Buttons'

export default function SliderSection({
  images,
  heading,
  paragraph,
  myButton,
  myClass,
}) {
  // console.log(images)
  return (
    <div className={`slider-section ${myClass}`}>
      <div className='slider-content'>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        {myButton ? <Button url='/gallery' title='Visit Gallery' /> : ''}
      </div>
      <div className='slider-wrapper'>
        <SliderWidget images={images} />
      </div>
    </div>
  )
}
