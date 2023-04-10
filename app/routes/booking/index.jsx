import { Outlet } from '@remix-run/react'
import { InlineWidget } from 'react-calendly'
import styledBooking from '../../styles/booking.css'
export default function bookingPainting() {
  return (
    <>
      <main>
        <div className='inline-widget-wrapper'>
          {/* <InlineWidget
            className='booking-calendly-widget'
            url='https://calendly.com/alberta-colour-painting/painting-estimate?hide_gdpr_banner=1'
            // style='min-width:320px;height:750px;'
          /> */}
          <InlineWidget
            className='booking-calendly-widget'
            url='https://calendly.com/alberta-colour-painting/booking?hide_gdpr_banner=1'
            // style='min-width:320px;height:750px;'
          />
        </div>
      </main>
    </>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styledBooking }]
}
