import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class Home extends Component {
  render () {
    return (
      <div>
        <Header title='Welcome To Our Studio!'
          subtitle="IT'S NICE TO MEET YOU"
          textButton='LEARN MORE'
          showButton
          link='/services' />
      </div>
    )
  }
}
export default Home
