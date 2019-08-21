import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-4'>
          <span className='copyright'>Copyright &copy; Your Website 2019</span>
        </div>
        <div className='col-md-4'>
          <ul className='list-inline social-buttons'>
            <li className='list-inline-item'>
              <Link href='#'>
                <i className='fab fa-twitter' />
              </Link>
            </li>
            <li className='list-inline-item'>
              <Link href='#'>
                <i className='fab fa-facebook-f' />
              </Link>
            </li>
            <li className='list-inline-item'>
              <Link href='#'>
                <i className='fab fa-linkedin-in' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <ul className='list-inline quicklinks'>
            <li className='list-inline-item'>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li className='list-inline-item'>
              <Link href='#'>Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
