import styledAbout from '~/styles/about.css'
import ContactFormSmall from '../components/util/ContactFormSmall'
import styledForm from '../styles/contact-form-small.css'
import {
  DrywallEstimateButton,
  PaintingEstimateButton,
} from '../components/util/Buttons'
import { AiFillCheckCircle, AiFillCheckSquare } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { addLead } from '../data-server/lead.server'
import { validateLeadInput } from '~/data-server/validation.server'
import sendEmail from '~/data-server/submitForm.server'
import { redirect } from '@remix-run/node'

export default function About() {
  return (
    <main className='about'>
      <div className='banner-wrap'>
        <img
          src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797231/about/homestars-best-of-the-best-banner_jeerbl.webp'
          alt='homestars banner - Best of the best award winner 2022 '
          className='banner-img'
        />
      </div>
      <div className='video-wrap'>
        <iframe
          className='iframe'
          src='https://www.youtube.com/embed/u3HHpLQDVsk?autoplay=1&mute=1'
          allow='accelerometer;  autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      </div>
      <div className='cards-wrapper'>
        {/* CARD1  CARD1  --- CARD1  CARD1    CARD1  CARD1  --- CARD1  CARD1  --- CARD1  CARD1  --- CARD1  CARD1  --- CARD1*/}
        <div className='about-card '>
          <h4>TRAINED SKILLED HOUSE PAINTERS</h4>
          <p>
            Have piece of mind knowing that we bring experience and skilled
            painters to you! Here are a few points to keep in mind:
          </p>
          <div className='about-card-item'>
            <p>
              <AiFillCheckCircle className='about-card-item-icon' />
              We cover your furniture and all necessary areas prior to painting.
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <AiFillCheckCircle className='about-card-item-icon' />
              We respect all of our clients homes as if they were our own. We
              take pride in our professionalism and ability to keep your space
              neat
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <AiFillCheckCircle className='about-card-item-icon' />
              Our team believes that skill is highly important. So we go above
              and beyond to deliver you a freshly painted home that will leave
              you very satisfied.
            </p>
          </div>
        </div>
        {/* CARD2  CARD  --- CARD2  CARD    CARD2  CARD  --- CARD2  CARD  --- CARD2  CARD  --- CARD2  CARD  --- CARD2*/}
        <div
          className='about-card about-card-dark'
          data-sal='slide-right slide-up'
          data-sal-delay='100'
          data-sal-easing='easeOutCirc'>
          <h4>REPUTATION FOR QUALITY</h4>
          <p>
            We not only use the best materials on the market, but we have the
            best house painters out there too!
          </p>
          <div className='about-card-item'>
            <p>
              <AiFillCheckSquare className='about-card-item-icon' />
              We cover your furniture and all necessary areas prior to painting.
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <AiFillCheckSquare className='about-card-item-icon' />
              We cover your furniture and all necessary areas prior to painting.
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <AiFillCheckSquare className='about-card-item-icon' />
              We cover your furniture and all necessary areas prior to painting.
            </p>
          </div>
        </div>
        {/* CARD3  CARD  --- CARD3  CARD    CARD3  CARD  --- CARD3  CARD  --- CARD3  CARD   --- CARD3  CARD  --- CARD3*/}
        <div
          className='about-card'
          data-sal='slide-left'
          data-sal-delay='100'
          data-sal-easing='easeOutCirc'>
          <h4>GREENER THAN EVER</h4>
          <p>
            At Alberta Colour we strive to make a positive impact on our
            environment.
          </p>
          <div className='about-card-item'>
            <p>
              <BsPatchCheckFill className='about-card-item-icon' />
              We use a range of zero to almost zero VOC paints for all of our
              projects. It is a win, win situation for clients, our painters and
              the environment.
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <BsPatchCheckFill className='about-card-item-icon' />
              Do you have left over paints? Let us give you a hand with them! We
              can take any leftover paints that you do not want and take them
              directly to our shop. We then take those paints to a landfill
              where they are collected for recycling purposes.
            </p>
          </div>
          <div className='about-card-item'>
            <p>
              <BsPatchCheckFill className='about-card-item-icon' />
              All of our garbage, cardboard and plastics used from our projects,
              are carefully sorted and selected for disposal at our shop
            </p>
          </div>
        </div>
      </div>
      <PaintingEstimateButton url='/booking/house-painting' />
      <DrywallEstimateButton url='/booking/drywall-ceiling-removal-and-texturing' />

      <div className='about-contact-form-wrapper'>
        <ContactFormSmall comingFrom='About form' />
      </div>
    </main>
  )
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledAbout },
    { rel: 'stylesheet', href: styledForm },
  ]
}
export async function action({ request }) {
  const formData = await request.formData()
  const leadData = Object.fromEntries(formData)
  try {
    validateLeadInput(leadData)
  } catch (error) {
    return error
  }
  await addLead(leadData)
  await sendEmail(leadData)
  return redirect('/thank-you')
}

export function meta() {
  return {
    title:
      'Learn More About Alberta Colour Painting: Your Trusted Calgary Painting Company',
    description:
      'Our team of experienced painters is dedicated to delivering top-quality results for your home or business. From interior and exterior painting to wallpaper removal and more, we have the skills and expertise to handle all of your painting needs. Contact us today to learn more about our services and to schedule a consultation.',
  }
}
