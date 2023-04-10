import { EstimateButton } from '~/components/util/Buttons'
import { YoutubeIframe } from '../util/Iframes'
export default function HomeVideo() {
  return (
    <section className='video-section'>
      <YoutubeIframe />
      <div className='video-content'>
        <h2 className='content-h2'>Our Calgary Painters</h2>
        <p className='content-p'>
          When it comes to painting the interior or exterior of your home, it's
          important to choose a professional team that you can trust to deliver
          high-quality results. At Alberta Colour Painting, we take pride in
          providing top-notch service to our customers, ensuring that every
          project is completed with attention to detail and a focus on customer
          satisfaction.
        </p>
        <p className='content-p'>
          While painting your walls, ceilings, doors, frames, and baseboards
          might seem like a simple task at first glance, it's actually one of
          the most commonly mistaken jobs that people believe they can tackle on
          their own. However, there is much more to house painting than just the
          walls themselves. Any mistakes or obstacles can end up costing you
          more in the long run, and it's important to have a team of
          professionals who can handle the job with care and expertise.
        </p>
        <p className='content-p'>
          At Alberta Colour Painting, we put our customers first. We understand
          that your home is a special place, and we take the time to ensure that
          it is treated with the love and artistic touch that it deserves. Our
          painters in Calgary are experts at what they do, and they take the
          time to perfect your canvas before beginning their craft. We use only
          the best paints, rollers, brushes, and tapes on your unique walls, and
          we make sure to lay down protective sheets and use plastic to cover
          your furniture and belongings to ensure that everything is kept safe
          and clean during the painting process.
        </p>
        <p className='content-p'>
          When you choose Alberta Colour Painting for your interior or exterior
          house painting project, you can sit back and relax knowing that our
          team will arrive at your home with all of the materials and equipment
          needed to conduct an exceptional job. We take pride in our work and
          strive to exceed our customers' expectations every time.
        </p>
        <p>
          Alberta Colour Painting has been open to Calgarians for 4 years and
          thanks to our hard work and attention to detail, Alberta Colour
          Painting has won 4 times in raw the Best Of Awards
          <a
            className='external-link'
            href='https://blog.homestars.com/what-are-the-homestars-best-of-awards/'>
            Homestars Best Of Awards
          </a>
          . We also got an A+ with the
          <a
            className='external-link'
            href='https://www.bbb.org/ca/ab/calgary/profile/painting-contractors/alberta-colour-painting-0017-109407'>
            Better Business Bureau{' '}
          </a>
          . We aslo have over 100
          <a
            className='external-link'
            href='https://www.google.com/search?q=alberta+colour+painting&rlz=1C1VIQF_enCA974CA974&oq=alberta+colour+painting&aqs=chrome.0.35i39j46i175i199i512j35i39j0i22i30l2j69i60j69i65j69i60.4088j0j4&sourceid=chrome&ie=UTF-8'>
            Google Reviews.
          </a>
          Our google rating fell a bit from a perfect 5.0 to a 4.9, but we are
          working hard to making sure we get back to 5 in the near future. So if
          you want to transform your home with a fresh coat of paint, give us a
          call and let us help you bring your vision to life.
        </p>
        <EstimateButton url='/booking' myClass='book-button-wrapper-slider' />
      </div>
    </section>
  )
}
