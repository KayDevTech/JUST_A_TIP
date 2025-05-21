'use client'
import React from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

function Centerimage() {
  const SECTION_HEIGHT = 1500
  
  const { scrollY } = useScroll()

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [25, 0])
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [75, 100])

  const clipPath = useMotionTemplate`
    polygon(
      ${clip1}% ${clip1}%,
      ${clip2}% ${clip1}%,
      ${clip2}% ${clip2}%,
      ${clip1}% ${clip2}%)
  `

  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0])
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"])

  return (
    <motion.div
      className='sticky top-0 h-screen w-full bg-black'
      style={{
        opacity,
        backgroundSize,
        clipPath,
        WebkitClipPath: clipPath,
        backgroundImage: 'url("https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?q=80&w=1962&auto=format&fit=crop")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}

export default Centerimage
