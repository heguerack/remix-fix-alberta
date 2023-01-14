import styledOffers from '../styles/offers.css'
import ContactForm from '../components/util/ContactFormTwoForOne'
import styledForm from '../styles/contact-form-2for1.css'
import {
  PaintingEstimateButton,
  DrywallEstimateButton,
} from '../components/util/Buttons'
import { FaCheckCircle } from 'react-icons/fa'
import { addLead } from '../data-server/lead.server'
import { validateLeadInput } from '~/data-server/validation.server'
import sendEmail from '~/data-server/submitForm.server'
import { redirect } from '@remix-run/node'

export default function OffersPage() {
  return (
    <main className='offers-main'>
      <div className='fixed-background-image'></div>

      <div className='card-wrap'>
        <div className='card card-left'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797220/offers/interior-painting-offer-2-bedrooms-for-the-price-of-1_pb9lw7.png'
            alt='A paint roller rolling a blue colour, and in the blue colour it says: 2 for 1 deal, receive 2 rooms painted and only pay for 1'
            className='card-img'
          />
          <h6>pay for one bedroom, get the second one half price!!</h6>
          <p>
            You simply pay for one standard bedroom and we paint two (Walls only
            , not closets, 2 coats, 2 colours, no feature walls, 30 minutes of
            drywall repair included). All labour and materials are included! The
            main idea of this offer is to ensure you get to know our
            workmanship, ethics and exceptional quality. 2 standard bedrooms,
            small to medium size for $320 (Super 2 eggshell from Cloverdale
            paints). Or $380 (Emerald matte from Sherwin Williams paints or
            Regal eggshell from Benjamin Moore paints). This offer does not
            apply to calgary surraunded areas. Email us now!!
            <span className='offer-ends'>Offer Ends January 30 / 2023</span>
          </p>
          <ContactForm comingFrom='2for1' />
        </div>
      </div>

      <div className='card-wrap card-wrap-right'>
        <div className='card'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797220/offers/interior-painting-offer-5_lnz9hf.png'
            alt='A paint roller rolling a blue colour, and in the blue colour it says: 5% Off, Receive a 5% off 0n interior painting projects'
            className='card-img'
          />
          <h6>5% OFF - Interior Painting</h6>
          <p>
            Take advantage of this great deal and save big on your next interior
            painting project. Note: this offer does not include cabinet painting
            projects.
          </p>
          <span className='offer-ends'>Offer Ends March 27 / 2023</span>
          <div>
            <PaintingEstimateButton
              bg='black'
              url='../booking/house-painting'
            />
          </div>
        </div>
      </div>

      <div className='card-wrap'>
        <div className='card '>
          <img
            src='../images/offers/interior-painting-offer-5.png'
            alt=''
            className='card-img'
          />
          <h6>Paint ceilings for half price!</h6>
          <p>We will paint your ceiling have price if:</p>
          <ul>
            <li>
              <FaCheckCircle />
              You hire us to scrape your popcorn ceilings
            </li>
            <li>
              <FaCheckCircle />
              You hire us to convert you knockdown ceilings to flat
            </li>
            <li>
              <FaCheckCircle />
              You hire us to drywall or board your new ceilings
            </li>
            <li>
              <FaCheckCircle />
              You hire us to paint your walls and ceilings
            </li>
          </ul>
          <p>
            <span className='offer-ends'>Offer Ends February 27 / 2023</span>
          </p>
          <DrywallEstimateButton bg='black' url='../booking/house-painting' />
        </div>
      </div>
    </main>
  )
}

export function links() {
  return [
    { rel: 'stylesheet', href: styledOffers },
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
      'Contact Alberta Colour Painting: Your Trusted Calgary Painting Company',
    description:
      "Get access to special painting offers in Calgary with Alberta Colour Painting. Our team of professional painters is dedicated to delivering top-quality results for your home or business. Contact us today to learn more about our current offers and to schedule a consultation for your painting project. Don't miss out on these limited-time deals - contact us now to take advantage of these great savings!",
  }
}
