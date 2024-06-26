'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function AnimateFrames({animate, whileInView}) {
  return (
    <>
    <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} animate={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden xl:block absolute z-0 -start-12 -top-12 xl:-start-16 xl:-top-16'>
        <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-28 w-28 xl:h-44 xl:w-44'/>
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} animate={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '30px', translateY: '-30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden xl:block absolute z-0 -end-12 -top-12 xl:-end-16 xl:-top-16'>
        <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-28 w-28 xl:h-44 xl:w-44' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '30px' }} animate={{ opacity: 0.5, translateX: '0px' }} exit={{ opacity: 0, translateX: '30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden xl:block absolute z-0 -start-24 bottom-24 xl:-start-32 xl:bottom-32'>
        <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-24 w-24 xl:h-32 xl:w-32' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '-30px' }} animate={{ opacity: 0.5, translateX: '0px' }} exit={{ opacity: 0, translateX: '-30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden xl:block opacity-50 absolute z-0 -end-24 bottom-24 xl:-end-32 xl:bottom-32'>
        <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-24 w-24 xl:h-32 xl:w-32' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '-30px' }} animate={{ opacity: 0.75, translateX: '0px' }} exit={{ opacity: 0, translateX: '-30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden xl:block absolute z-10 -bottom-4 -end-16 xl:-end-32 rotate-45'>
        <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-28 w-28 xl:h-44 xl:w-44' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '30px' }} animate={{ opacity: 0.75, translateX: '0px' }} exit={{ opacity: 0, translateX: '30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden xl:block absolute z-10 -bottom-4 -start-16 xl:-start-32 -rotate-45'>
        <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-28 w-28 xl:h-44 xl:w-44' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} animate={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} exit={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden xl:block opacity-50 absolute z-0 -bottom-28 xl:-bottom-40 start-1/2'>
        <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-40 w-40 xl:h-56 xl:w-56' />
    </motion.div>
    <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} animate={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} exit={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden xl:block opacity-50 absolute z-0 -top-28 xl:-top-40 start-1/2'>
        <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-40 w-40 xl:h-56 xl:w-56' />
    </motion.div>
    {/* <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
        <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
    </motion.div> */}
    </>
  )
}

export default AnimateFrames