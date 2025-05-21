import React from 'react'
import Centerimage from './Centerimage'
import ParallaxImages from './ParallaxImages'

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
        <ParallaxImages/>

        <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950'/>
    </div>
  )
}

export default Hero