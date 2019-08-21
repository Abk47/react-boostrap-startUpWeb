import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ image, title, subtitle, textButton, showButton, link }) =>
  (
    <header className='masthead' style={{ BackgroundImage: image }}>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-lead-in'>{title}</div>
          <div className='intro-heading text-uppercase'>{subtitle}</div>
          {showButton &&
          <Link className='btn btn-primary btn-xl text-uppercase js-scroll-trigger' to={link}>{textButton}</Link>}
        </div>
      </div>
    </header>
  )

export default Header
