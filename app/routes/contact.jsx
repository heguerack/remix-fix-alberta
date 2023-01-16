import {
  DrywallEstimateButton,
  PaintingEstimateButton,
} from '~/components/util/Buttons'
import ContactFormSmall from '~/components/util/ContactFormSmall'
import styledContactFormSmall from '../styles/contact-form-small.css'
import styledContact from '../styles/contact-page.css'
// import { addLead } from '../data-server/lead.server'
import { validateLeadInput } from '~/data-server/validation.server'
import sendEmail from '~/data-server/submitForm.server'
import { redirect } from '@remix-run/node'

export default function ContactPage() {
  return (
    <main className='contact-main'>
      <div className='contact-showcase-wrapper'></div>
      <h1>CONTACT US</h1>
      <p>
        Our goal is to provide the best painting experience for you. We are
        located at the South East quadrant of Calgary.
      </p>
      <div className='contact-content'>
        <iframe
          className='location-map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9807617116253!2d-113.95298178425132!3d50.924072879543495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717788b1786227%3A0x18e228a7ec17a85a!2s370+Brightonstone+Green+SE%2C+Calgary%2C+AB!5e0!3m2!1sen!2sca!4v1553645854182?zoom=12'></iframe>
        <div className='contact-info'>
          <h3>ADDRESS</h3>
          <p>370 Brightonstone Green SE, Calgary, Alberta, Canada</p>
          <h3>Email</h3>
          <p>info@albertacolourpainting.com</p>
          <h3>PHONE NUMBER</h3>
          <p>587-966-6547</p>
        </div>
      </div>

      <PaintingEstimateButton />
      <DrywallEstimateButton />

      <div className='questions-form'>
        <div className='conatct-form-wrap'>
          <ContactFormSmall comingFrom='Contact Page Form' />
        </div>
      </div>
    </main>
  )
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledContact },
    { rel: 'stylesheet', href: styledContactFormSmall },
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
  // await addLead(leadData)
  await sendEmail(leadData)
  return redirect('/thank-you')
}

export function meta() {
  return {
    title:
      'Contact Alberta Colour Painting: Your Trusted Calgary Painting Company ',
    description:
      "Looking to get in touch with Alberta Colour Painting, your trusted Calgary painting company? You're in the right place! On our contact page, you'll find all the information you need to get in touch with us, including our phone number, email address, and physical address. Don't hesitate to reach out to us with any questions or to schedule a consultation for your painting project. We look forward to hearing from you!",
  }
}
