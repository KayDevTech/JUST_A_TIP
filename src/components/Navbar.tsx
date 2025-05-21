'use client'
import React, { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { SiSpacex } from 'react-icons/si'

function Navbar() {

 const launchRef = useRef<HTMLDivElement | null>(null)
 
 const handleButtonClick = () => {
  launchRef.current?.scrollIntoView({
    behavior: "smooth"
  })
 }

  return (
    <div>
      <nav className='fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-[white]'>
        <SiSpacex/>
        <button onClick={handleButtonClick}
          className='flex items-center gap-1 text-xs text-zinc-400 cursor-pointer'
        >
          LAUNCH SCHEDULE
          <FiArrowRight/>
        </button>
      </nav>
    </div>
  )
}

export default Navbar