import { useInView } from 'react-cool-inview'
// import HomeGallery from '../home/HomeGallery'
const bigHomestarsUrl =
  'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd/large'
const smallHomestarsUrl =
  'https://HomeStars.com/widgets/reviews/alberta-colour-painting-ltd'

// BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS
// BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS
export function SmallHomestarsIframe() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '1500px',
  })
  return (
    <div
      className='placeholder homestars-iframe-wrapper homestars-iframe-wrapper-small'
      ref={observe}>
      {inView && (
        <iframe
          className='homestars-small-iframe'
          height='280'
          frameborder='0'
          width='330'
          src={smallHomestarsUrl}
          scrolling='no'></iframe>
      )}
    </div>
  )
}
// BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS
// BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS BIG-HOMESTARS

export function BigHomestarsIframe() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '1500px',
  })
  return (
    <div
      className='placeholder homestars-iframe-wrapper homestars-iframe-wrapper-big'
      ref={observe}>
      {inView && (
        <iframe
          className='homestars-big-iframe'
          height='490'
          frameborder='0'
          width='490'
          src={bigHomestarsUrl}
          scrolling='no'></iframe>
      )}
    </div>
  )
}

export function GoogleIframe() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '2000px',
  })
  return (
    <div className='placeholder google-iframe-wrapper' ref={observe}>
      {inView && (
        <>
          <div className='elfsight-app-b58b23de-5664-445b-abfd-1bfb3f486561 google-iframe'></div>
          {/* <script src='https://apps.elfsight.com/p/platform.js'></script> */}
        </>
      )}
      <script src='https://apps.elfsight.com/p/platform.js'></script>
    </div>
  )
}

// YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE
// YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE  YOUTUBE
export function YoutubeIframe({ myClass }) {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: '3000px',
  })
  return (
    <div className={`iframe-wrapper ${myClass}`} ref={observe}>
      {inView && (
        <iframe
          className='iframe  video-iframe'
          src='https://www.youtube.com/embed/u3HHpLQDVsk'
          allow='accelerometer;  autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      )}
    </div>
  )
}

// homeGalleryLazy homeGalleryLazy homeGalleryLazy homeGalleryLazy
// homeGalleryLazy homeGalleryLazy homeGalleryLazy homeGalleryLazy
// export function HomeGalleryLazy({ images, heading, paragraph, myButton }) {
//   const { observe, inView } = useInView({
//     unobserveOnEnter: true,
//     rootMargin: '2000px',
//   })
//   return (
//     <section ref={observe} className='home-gallery-section'>
//       {inView && (
//         <section>
//           <HomeGallery />
//         </section>
//       )}
//     </section>
//   )
// }
