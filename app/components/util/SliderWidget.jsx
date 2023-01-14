import { useState, useEffect } from 'react'
import { Link } from '@remix-run/react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { AiFillCloseSquare } from 'react-icons/ai'
import styledSliderWidget from '~/styles/slider-widget.css'
import {
  BsPauseCircleFill,
  BsPlayCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

export default function HomeSlider({
  images,
  url,
  setFullScreenOff,
  fullscreen,
}) {
  const data = images
  // console.log(data)
  const [number, setNumber] = useState(0)
  const [run, setRun] = useState(false)

  useEffect(() => {
    if (run) {
      let slider = setInterval(() => {
        let myNumber = number + 1
        if (myNumber > data.length - 1) {
          myNumber = 0
        }
        setNumber(myNumber)
        // console.log(myNumber)
      }, 2000)
      return () => {
        clearInterval(slider)
      }
    } else {
      return
    }
  }, [number, run])

  const togleSlider = () => {
    setRun(!run)
  }

  const goRight = () => {
    let newNumber = number + 1
    if (newNumber > data.length - 1) {
      newNumber = 0
      // console.log('moving right')
    }
    setNumber(newNumber)
  }
  const goLeft = () => {
    let newNumber = number - 1
    if (newNumber < 0) {
      newNumber = data.length - 1
      // console.log('moving left')
    }
    setNumber(newNumber)
  }

  return (
    <div className='slider-widget'>
      <div className='slider-player'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === number
                  ? 'img-wrapper active-img-wrapper'
                  : 'img-wrapper'
              }>
              <img src={item.url} alt={item.alt} className='slider-img' />
              {/* <img src={item.url} className='slider-img' /> */}
            </div>
          )
        })}
      </div>
      <div className='slider-buttons'>
        {url ? (
          <Link to={url} className='gallery-page-link'>
            <RiArrowGoBackFill />
          </Link>
        ) : (
          <div className='gallery-page-link'>
            {fullscreen === 'true' ? (
              <RiArrowGoBackFill onClick={setFullScreenOff} />
            ) : (
              ''
            )}
          </div>
        )}

        <BsFillArrowLeftCircleFill onClick={goLeft} className='slider-button' />
        {run ? (
          <BsPauseCircleFill
            onClick={togleSlider}
            className='slider-button slider-button-pause'
          />
        ) : (
          <BsPlayCircleFill
            onClick={togleSlider}
            className='slider-button slider-button-play'
          />
        )}
        <BsFillArrowRightCircleFill
          onClick={goRight}
          className='slider-button'
        />
        {url ? (
          <Link to={url} className='gallery-page-link'>
            <AiFillCloseSquare />
          </Link>
        ) : (
          <div className='gallery-page-link'>
            {fullscreen === 'true' ? (
              <AiFillCloseSquare onClick={setFullScreenOff} />
            ) : (
              ''
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styledSliderWidget }]
}
