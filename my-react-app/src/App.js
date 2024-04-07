import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HealineCards from './Components/HealineCards'
import Food from './Components/Food'
import Category from './Components/Category'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HealineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App