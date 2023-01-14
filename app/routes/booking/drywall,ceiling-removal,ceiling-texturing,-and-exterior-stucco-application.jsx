import { Outlet } from '@remix-run/react'
import { InlineWidget } from 'react-calendly'
import styledBooking from '../../styles/booking.css'
export default function bookingDrywall() {
  return (
    <>
      <main>
        <div className='inline-widget-wrapper'>
          <InlineWidget
            className='booking-calendly-widget'
            url='https://calendly.com/ryan-1407/30min?hide_gdpr_banner=1'
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
