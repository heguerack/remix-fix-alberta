import { NavLink } from '@remix-run/react'
export default function ServiceNav({ toggleMenu }) {
  return (
    <ul
      id='submenu-2'
      tabindex='-1'
      // id='services-nav'
      className='submenu submenu-services'>
      <div className='buffer-div-until-better-solution'></div>
      {/* <hr className='submenu-hr' /> */}
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/interior-painting-calgary'>
          Interior Painting
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/exterior-painting-calgary'>
          Exterior Painting
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/commercial-painting-calgary'>
          Commercial Painting
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/ceiling-painting-calgary'>
          Ceiling Painting
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/popcorn-ceiling-removal-calgary'>
          Popcorn Removal
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/drywall-mud-&-tape-calgary'>
          Drywall Tape & Mud
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/ceiling-texturing-calgary'>
          Ceiling Texturing
        </NavLink>
      </li>
      <hr className='submenu-hr' />
      <li tabindex='0'>
        <NavLink
          onClick={toggleMenu}
          className='submenu-link'
          to='/services/exterior-stucco-application-calgary'>
          Stucco Application
        </NavLink>
      </li>
    </ul>
  )
}
