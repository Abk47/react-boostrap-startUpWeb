import React, { Fragment } from 'react'
import {BrowserRouter as Router,Route, Link} as 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <Fragment>
      <Navigation>
        <Header />
      <Navigation/>
      <Services />
      <Portfolio />
    </Fragment>
  )
}

export default App
