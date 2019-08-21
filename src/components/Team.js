import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return(
    <div>
      <section className='bg-light page-section' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Our Amazing Team</h2>
              <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img className='mx-auto rounded-circle' src='img/team/1.jpg' alt='' />
                <h4>Kay Garland</h4>
                <p className='text-muted'>Lead Designer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-twitter' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-linkedin-in' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img className='mx-auto rounded-circle' src='img/team/2.jpg' alt='' />
                <h4>Larry Parker</h4>
                <p className='text-muted'>Lead Marketer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-twitter' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-linkedin-in' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img className='mx-auto rounded-circle' src='img/team/3.jpg' alt='' />
                <h4>Dagless Cuty</h4>
                <p className='text-muted'>Lead Developer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-twitter' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fab fa-linkedin-in' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <p className='large text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
      
 {/* Partner's Section */}
 <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <Link href='#'>
                <img className='img-fluid d-block mx-auto' src='img/logos/envato.jpg' alt='' />
              </Link>
            </div>
            <div className='col-md-3 col-sm-6'>
              <Link href='#'>
                <img className='img-fluid d-block mx-auto' src='img/logos/designmodo.jpg' alt='' />
              </Link>
            </div>
            <div className='col-md-3 col-sm-6'>
              <Link href='#'>
                <img className='img-fluid d-block mx-auto' src='img/logos/themeforest.jpg' alt='' />
              </Link>
            </div>
            <div className='col-md-3 col-sm-6'>
              <Link href='#'>
                <img className='img-fluid d-block mx-auto' src='img/logos/creative-market.jpg' alt='' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
