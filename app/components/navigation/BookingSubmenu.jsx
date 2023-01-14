import { NavLink } from '@remix-run/react'

export default function BookingSubmenu({ toggleMenu }) {
  return (
    <ul className='submenu submenu-booking' id='submenu-2' tabindex='-1'>
      <div className='buffer-div-until-better-solution'></div>
      {/* <hr className='submenu-hr' /> */}
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/booking/house-painting-and-commercial-painting'>
          House Painting
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
          Drywall Tape & Mud
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
          Popcorn Removal
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/booking/drywall,ceiling-removal,ceiling-texturing,-and-exterior-stucco-application'>
          Stucco Application
        </NavLink>
      </li>
      <hr className='submenu-hr' />
    </ul>
  )
}
