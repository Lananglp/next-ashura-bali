'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {

    const [show, setShow] = useState(false);
    const navbarRef = useRef(null);

    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        const clickOutside = (e) => {
            if (!navbarRef.current?.contains(e.target)) {
                setShow(false);
            }
        }

        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, []);

    return (
        <>
            <header className='sticky z-50 top-0 border-b border-zinc-300 dark:border-zinc-700 backdrop-blur-sm'>
                <Container>
                    <div className='flex justify-between items-center py-3'>
                        <Link href="/" className='text-xl font-bold bg-clip-text bg-gradient-to-b text-transparent from-zinc-500 dark:from-white to-zinc-600 dark:to-zinc-400 from-[30%] to-[70%]'><img src="/icon.png" alt="Ashura Logo" width={32} height={32} className='inline me-1 mb-0.5' /> Ashura Bali</Link>
                        <ul className='hidden lg:flex items-center gap-4'>
                            <li><Link href="/" className='text-primary'>Beranda</Link></li>
                            <li><Link href="/" className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Daily</Link></li>
                            <li><Link href="/" className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Product</Link></li>
                            <li><Link href="/" className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>About</Link></li>
                            <li><Link href="/" className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Setting</Link></li>
                        </ul>
                        <button onClick={handleOpen} type="button" className='block lg:hidden px-3 hover:text-pink-500'><FaBars /></button>
                    </div>
                </Container>
            </header>

            <div className='overflow-hidden'>
                <AnimatePresence>
                    {show &&
                        <motion.aside
                            initial={{ translateX: '100%', opacity: 0 }}
                            animate={{ translateX: '0%', opacity: 1 }}
                            exit={{ translateX: '100%', opacity: 0 }}
                            transition={{duration: 0.3, ease: 'circInOut'}}
                            ref={navbarRef}
                            className='fixed z-50 w-64 inset-y-0 -end-0 block lg:hidden h-screen bg-black/50 backdrop-blur-sm border-s border-pink-500'
                        >
                            <div className='h-full overflow-y-auto'> 
                                <ul className='h-full flex flex-col place-content-center text-center gap-4 snap-center'>
                                    <li onClick={handleClose} className='w-full'><Link href="/" className='py-1 inline-block w-full font-semibold text-primary'>Beranda</Link></li>
                                    <li onClick={handleClose} className='w-full'><Link href="/" className='py-1 inline-block w-full font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Daily</Link></li>
                                    <li onClick={handleClose} className='w-full'><Link href="/" className='py-1 inline-block w-full font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Product</Link></li>
                                    <li onClick={handleClose} className='w-full'><Link href="/" className='py-1 inline-block w-full font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>About</Link></li>
                                    <li onClick={handleClose} className='w-full'><Link href="/" className='py-1 inline-block w-full font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:dark:text-white'>Setting</Link></li>
                                </ul>
                            </div>
                            <button onClick={handleClose} type="button" className='absolute z-50 -start-5 top-1/2 -translate-y-1/2 bg-zinc-950 border border-pink-500 rounded-full p-2 hover:text-white'><MdDoubleArrow className='h-6 w-6'/></button>
                        </motion.aside>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}

export default Navbar