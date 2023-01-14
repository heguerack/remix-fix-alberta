import { NavLink } from '@remix-run/react'
import ServiceSubmenu from './ServiceSubmenu'
import BookingSubmenu from '../navigation/BookingSubmenu'
import AboutSubmenu from './AboutSubmenu'
import { useState } from 'react'

export default function MainNav({ toggleMenu }) {
  const [servicesSubmenu, setServicesSubmenu] = useState(false)
  const [bookingSubmenu, setBookingSubmenu] = useState(false)
  const [aboutSubmenu, setAboutSubmenu] = useState(false)

  const onMouseOverAbout = () => {
    setAboutSubmenu(true)
  }
  const onMouseOutAbout = () => {
    setAboutSubmenu(false)
  }

  const onMouseOverServices = () => {
    setServicesSubmenu(true)
  }
  const onMouseOutServices = () => {
    setServicesSubmenu(false)
  }

  const onMouseOverBooking = () => {
    setBookingSubmenu(true)
  }
  const onMouseOutBooking = () => {
    setBookingSubmenu(false)
  }

  return (
    <ul className='main-nav-ul'>
      <hr className='main-nav-hr' />
      <li className='main-nav-li'>
        <NavLink className='main-nav-link' to='/' onClick={toggleMenu}>
          Home
        </NavLink>
      </li>
      <hr className='main-nav-hr' />
      <li
        className='main-nav-li main-nav-link-to-submenu-wrapper'
        tabindex='0'
        aria-expanded='false'
        aria-controls='submenu-1'
        onMouseOver={onMouseOverAbout}
        onMouseOut={onMouseOutAbout}>
        <NavLink className='main-nav-link main-nav-link-to-submenu' to='#'>
          About
        </NavLink>

        {aboutSubmenu ? <AboutSubmenu toggleMenu={toggleMenu} /> : ''}
      </li>
      <hr className='main-nav-hr' />
      <li
        className='main-nav-li main-nav-link-to-submenu-wrapper'
        tabindex='0'
        aria-expanded='false'
        aria-controls='submenu-2 '
        onMouseOver={onMouseOverServices}
        onMouseOut={onMouseOutServices}
        onMouse>
        <NavLink to='#' className='main-nav-link main-nav-link-to-submenu'>
          Services
        </NavLink>
        {servicesSubmenu ? <ServiceSubmenu toggleMenu={toggleMenu} /> : ''}
      </li>
      <hr className='main-nav-hr' />
      <li className='main-nav-li'>
        <NavLink className='main-nav-link' to='/gallery' onClick={toggleMenu}>
          Gallery
        </NavLink>
      </li>
      <hr className='main-nav-hr' />
      <li
        className='main-nav-li main-nav-link-to-submenu-wrapper'
        tabindex='0'
        aria-expanded='false'
        aria-controls='submenu-3'
        onMouseOver={onMouseOverBooking}
        onMouseOut={onMouseOutBooking}>
        <NavLink to='#' className='main-nav-link main-nav-link-to-submenu '>
          Booking
        </NavLink>
        {bookingSubmenu ? <BookingSubmenu toggleMenu={toggleMenu} /> : ''}
      </li>
      <hr className='main-nav-hr' />
      <li className='main-nav-li'>
        <NavLink className='main-nav-link' to='/contact' onClick={toggleMenu}>
          Contact
        </NavLink>
      </li>
      <hr className='main-nav-hr' />
    </ul>
  )
}

// import { useState } from 'react'

// export default function MainNav() {
//   const [servicesNav, setServicesNav] = useState(false)
//   const [bookingNav, setBookingNav] = useState(false)

//   const showServicesNav = () => {
//     setBookingNav(false)
//     setServicesNav(!servicesNav)
//   }

//   const closeOnMouseLeaveServices = () => {
//     setTimeout(() => {
//       setServicesNav(false)
//     }, 2000)
//   }

//   const showBookingNav = () => {
//     setServicesNav(false)
//     setBookingNav(!bookingNav)
//   }

//   const closeOnMouseLeaveBooking = () => {
//     setTimeout(() => {
//       setBookingNav(false)
//     }, 2000)
//   }
//   return (
//     <nav id='main-nav' className='main-nav'>
//       <ul className='main-nav-ul'>
//         <li>
//           <NavLink to='/' className='main-nav-link'>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/about' className='main-nav-link'>
//             About
//           </NavLink>
//         </li>
//         <li className='sub-nav-wrapper sub-nav-wrapper-services'>
//           <div className='main-nav-link main-nav-div' onClick={showServicesNav}>
//             Services
//           </div>
//           {servicesNav ? (
//             <ServiceNav closeOnMouseLeaveServices={closeOnMouseLeaveServices} />
//           ) : (
//             ''
//           )}
//         </li>
//         <li className='sub-nav-wrapper sub-nav-wrapper-booking'>
//           <div className='main-nav-link main-nav-div' onClick={showBookingNav}>
//             Booking
//           </div>
//           {bookingNav ? (
//             <BookingNav closeOnMouseLeaveBooking={closeOnMouseLeaveBooking} />
//           ) : (
//             ''
//           )}
//         </li>
//         <li>
//           <NavLink to='/gallery' className='main-nav-link'>
//             Gallery
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/contact' className='main-nav-link'>
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   )
// }
