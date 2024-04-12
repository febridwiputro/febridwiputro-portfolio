import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import {Experience} from './components/Experience/Experience'
import {Projects} from './components/Projects/Projects'
import { About } from './components/About/About'
import {Contact} from './components/Contact/Contact'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
