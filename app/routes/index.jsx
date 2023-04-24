import styledHome from '../styles/home.css'
import styledSliderSection from '../styles/slider-service-section'
import styledSliderWidget from '../styles/slider-widget.css'
import styledContactFormSmall from '../styles/contact-form-small.css'
import styledSliderCarrusel from '../styles/slider-carrusel.css'
import styledSliderFullscreen from '../styles/slider-fullscreen.css'
import HomeServices from '~/components/home/HomeServices'
import HomeShowcase from '~/components/home/HomeShowcase'
import HomeReviews from '~/components/home/HomeReviews'
import HomeVideo from '~/components/home/HomeVideo'
import HomeBlogOffers from '~/components/home/HomeBlogOffers'
import HomeCredentials from '~/components/home/HomeCredentials'
import HomeGallery from '~/components/home/HomeGallery'
// import { addLead } from '../data-server/lead.server'
import { validateLeadInput } from '~/data-server/validation.server'
import sendEmail from '~/data-server/submitForm.server'
import { redirect } from '@remix-run/node'

export default function Index() {
  return (
    <main>
      <HomeShowcase />
      <HomeServices />
      <HomeReviews />
      <HomeGallery />
      <HomeVideo />
      <HomeBlogOffers />
      <HomeCredentials />
    </main>
  )
}
//request simply store info about about the request sp that we can pase it to the addLead funtion
// params is about dynamic path segments
export async function action({ request, params }) {
  const formData = await request.formData()
  // we dont use formData.firstName  instead as follows
  //formData.get('fisrtName'); however we dont wann wqrite that multiple times so:
  const leadData = Object.fromEntries(formData)
  //validation, will throw an error if at leadt one errom from validateLeadInput()

  try {
    validateLeadInput(leadData)
  } catch (error) {
    // so instead of throwing an error, we return the error object to place it in the form so that they know whats wront right there at he form, it can be obtain in the form with the useActionData hook
    return error
  }
  // await addLead(leadData)
  await sendEmail(leadData)
  return redirect('/thank-you')
}

export function links() {
  return [
    { rel: 'stylesheet', href: styledHome },
    { rel: 'stylesheet', href: styledSliderSection },
    { rel: 'stylesheet', href: styledSliderWidget },
    { rel: 'stylesheet', href: styledContactFormSmall },
    { rel: 'stylesheet', href: styledSliderCarrusel },
    { rel: 'stylesheet', href: styledSliderFullscreen },
  ]
}

export function meta() {
  return {
    title:
      'Calgary Painters | Interior House Painters | Best Quality Among Calgary Painting Companies',
    description:
      'Looking for top-quality interior house painting services in Calgary? Look no further! Our team of professional Calgary painters is dedicated to delivering the best results for your home. We are proud to be the best quality among Calgary painting companies, and we stand behind our work with a 100% satisfaction guarantee. Contact us today to schedule your consultation and get started on your dream home transformation.',
  }
}
