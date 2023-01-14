import { NavLink } from '@remix-run/react'

export default function AboutSubmenu({ toggleMenu }) {
  return (
    <ul className='submenu submenu-about' id='submenu-1' tabindex='-1'>
      <div className='buffer-div-until-better-solution'></div>
      {/* <hr className='submenu-hr' /> */}
      <li tabindex='0'>
        <NavLink to='/about-us' className='submenu-link' onClick={toggleMenu}>
          About Us
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink to='/offers' className='submenu-link' onClick={toggleMenu}>
          Offers
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink to='/blogs' className='submenu-link' onClick={toggleMenu}>
          Blogs
        </NavLink>
      </li>
      <hr className='submenu-hr' />
    </ul>
  )
}
