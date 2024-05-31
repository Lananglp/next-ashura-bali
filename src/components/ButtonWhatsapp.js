'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaXmark } from 'react-icons/fa6'

function ButtonWhatsapp() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
            notificationSound();
        }, 5000);
    }, []);

    const notificationSound = () => {
        const audio = new Audio('/audio/notification.mp3');
        audio.play();
    }

  return (
    <AnimatePresence>
        {show &&
            <motion.div 
                className='inline-block fixed bottom-4 end-4'
                initial={{ translateX: '100%', opacity: 0 }}
                animate={{ translateX: '0%', opacity: 1 }}
                exit={{ translateX: '100%', opacity: 0 }}
                transition={{duration: 0.3, ease: 'circInOut'}}
            >
                <div className='w-72 relative border border-zinc-700 backdrop-blur-sm bg-zinc-800/50 rounded shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-4'>
                    <button onClick={() => setShow(false)} title='Close' type="button" className='absolute top-4 end-4'><FaXmark className='hover:text-white' /></button>
                    <Image src="/image/profile/LanangLanusa.jpg" alt='LanangLanusa.jpg' width={56} height={56} className='rounded-full mx-auto mt-2' />
                    <div className='text-center mt-2'>
                        <h6 className='text-sm text-white'>Kadek Lanang Lanusa Putera</h6>
                        <p className='mb-3 text-xs'>IT Programmer</p>
                    </div>
                    <Link href="/" type="button" className='block text-center bg-green-700 hover:bg-green-800 focus:ring-1 ring-zinc-300 rounded text-sm text-white px-4 py-1.5 transition duration-200'>
                        <FaWhatsapp className='inline h-4 w-4 me-1 mb-0.5' />
                        Hubungi Sekarang
                    </Link>
                </div>
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ButtonWhatsapp