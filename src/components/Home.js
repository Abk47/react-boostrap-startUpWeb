import React, { Component } from 'react'
import Header from './Header'
import Services from './Services'
import Portfolio from './Portfolio'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
  render () {
    return (
      <div>
        <Header title='Welcome To Our Studio!'
          subtitle="IT'S NICE TO MEET YOU"
          textButton='LEARN MORE'
          showButton
          link='/services' />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </div>
    )
  }
}
export default Home
