import React, { useState } from 'react'
import logo from '../../assets/images/ytgroup/Group 39509.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-seven white-vr  ${
        navbar ? 'fixed' : ''
      } `}
    >
      <div className='inner-content'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='brand' width='127' />
            </Link>
          </div>
          {/* End .logo */}

          {/* End .navbar */}

          <div className='right-widget d-flex align-items-center gap-4'>
            <Link
              to='/sign-up'
              className='d-none d-lg-block sign-up-btn font-zen button-heading '
            >
              Haz una cotizacion
            </Link>

            <Link
              to='/sign-up'
              className='d-none d-lg-block sign-up-btn font-zen button-heading'
            >
              Trabaja con nosotros
            </Link>
          </div>

          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>

    // {/* <!-- /.theme-main-menu --> */}
  )
}

export default Header
