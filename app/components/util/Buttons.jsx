import { Link } from '@remix-run/react'
import { FcCalendar, FcCellPhone } from 'react-icons/fc'
import { FaHandPointLeft } from 'react-icons/fa'

export function Button({ url, title, myClass }) {
  return (
    <div className={`button ${myClass}`}>
      <Link to={url} className='button'>
        {title}
      </Link>
    </div>
  )
}

export function CallEstimateButton({ bg, myClass }) {
  return (
    <div className={`book-button-wrapper ${myClass}`}>
      <a href='tel:15879666547' className='book-button'>
        <div className='book-button-up'>
          <FcCellPhone className='phone-icon' />
          <span>5879666547</span>
        </div>
        <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
          <p>Or Call / Text</p>
        </div>
      </a>
    </div>
  )
}

export function DrywallEstimateButton({ bg, myClass }) {
  return (
    <div className={`book-button-wrapper ${myClass}`}>
      <Link
        to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'
        className='book-button'>
        <div className='book-button-up'>
          <FcCalendar className='calendar-icon' />
          <FaHandPointLeft className='hand-icon' />
          <span>BOOK ESTIMATE</span>
        </div>
        <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
          <p>Drywall, Popcorn Ceiling Removal, Tape & Mud, Texturing</p>
        </div>
      </Link>
    </div>
  )
}

// export function PaintingEstimateButton({ bg, myClass }) {
//   return (
//     <div className={`book-button-wrapper ${myClass}`}>
//       <Link
//         to='/booking/house-painting-and-commercial-painting'
//         className='book-button'>
//         <div className='book-button-up'>
//           <FcCalendar className='calendar-icon' />
//           <FaHandPointLeft className='hand-icon' />
//           <span>BOOK ESTIMATE</span>
//         </div>
//         <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
//           <p>Interior & Exterior Painting</p>
//         </div>
//       </Link>
//     </div>
//   )
// }

export function EstimateButton({ bg, myClass }) {
  return (
    <div className={`book-button-wrapper ${myClass}`}>
      <Link to='/booking' className='book-button'>
        <div className='book-button-up'>
          <FcCalendar className='calendar-icon' />
          <FaHandPointLeft className='hand-icon' />
          <span>BOOK ESTIMATE</span>
        </div>
        <div className={bg ? `${bg} book-button-down` : 'book-button-down'}>
          <p>Painting, popcorn removal, drywall, & stucco</p>
        </div>
      </Link>
    </div>
  )
}
