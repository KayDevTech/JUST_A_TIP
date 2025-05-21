'use client'
import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

function Parallaximg({ 
    className, 
    alt,
    src, 
    start, 
    end }: {
    className: string,
    alt: string,
    src: string,
    start: number,
    end: number
    }) {
    
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
    
  return (
    <div>
        <motion.img 
        style={{
            opacity,
            transform
        }}
        ref={ref}
        src={src} alt={alt}  className={className}/>
    </div>
  )
}

export default Parallaximg