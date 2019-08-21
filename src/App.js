import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Navigation>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />        
      </Navigation>
    </Router>
  )
}

export default App
