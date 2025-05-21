import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function SmoothScrollLenis() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='h-screen'></div>
    </div>
  )
}

export default SmoothScrollLenis