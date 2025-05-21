import React from 'react'
import Centerimage from './Centerimage'

const SECTION_HEIGHT = 1500

function Hero() {
  return (
    <div
    className='relative w-full'
    style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`
    }}
    >
        <Centerimage/>
    </div>
  )
}

export default Hero