import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import MainNav from './MainNav'
import { Link } from '@remix-run/react'

export default function Header() {
  const [menu, setMenu] = useState(true)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header id='main-header'>
      <div className=' header-wrapper header-logo-wrapper'>
        <Link to='/' className='logo-div'>
          <img
            src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1673163586/alberta-colour-painting-logo_mgpsyh.webp'
            alt='alberta colour painting logo'
            className='logo-img'
          />
        </Link>
        <div className='cell-wrapper cell-wrapper-logo'>
          <a
            href='tel:15879666547'
            className='cell-wrapper-a'
            aria-label='call Alberta Colour Painting'>
            <AiFillPhone className='cell-phone-icon' />
            <span className='cell-phone-icon-span'>Tel:587-966-6547</span>
          </a>
        </div>
        <div className='menu-wrapper'>
          {menu ? (
            <GiHamburgerMenu onClick={toggleMenu} />
          ) : (
            <FaRegWindowClose onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div className='header-wrapper header-links-wrapper'>
        <nav id='main-nav' className={menu ? 'main-nav' : 'main-nav show-nav'}>
          <MainNav toggleMenu={toggleMenu} />
        </nav>
        <div className='cell-wrapper cell-wrapper-links'>
          <a
            href='tel:15879666547'
            className='cell-wrapper-a'
            aria-label='call Alberta Colour Painting'>
            <span>Tel:587-966-6547</span>
            <AiFillPhone className='cell-phone-icon' />
          </a>
        </div>
      </div>
    </header>
  )
}
