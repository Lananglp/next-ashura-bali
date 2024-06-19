'use client'
import { Birthstone } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import DateCountdown from './DateCountdown';
import ImageSlideShow from './ImageSlideShow';
import { AnimatePresence, motion } from 'framer-motion';
import { formatDate, handleMusic } from '@/helper/Helper';
import { FaCheck, FaCircleExclamation, FaMusic, FaPaperPlane, FaPause, FaPlay, FaTriangleExclamation, FaUser, FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMap from './GoogleMap';
import { MdContentCopy } from 'react-icons/md';

const birthstone = Birthstone({
    subsets: ["latin"],
    weight: ["400"],
});

function OpenWedding({images, tanggalAcara, rekening}) {

    const [open, setOpen] = useState(false); // ubah jadi false
    // const audioRef = useRef(new Audio('/audio/soundWedding.mp3'));
    const [music, setMusic] = useState(false);
    const audioRef = useRef(null);

    const handleOpen = () => {
        setTimeout(() => {
            setOpen(true);
        }, 500);
        // setMusic(true);
        // audioRef.current.play();
    };

    const toggleMusic = () => {
        // if (music) {
        //     audioRef.current.pause();
        // } else {
        //     audioRef.current.play();
        // }
        // setMusic(!music);
    };

    // useEffect(() => {
    //     if (music) {
    //         audioRef.current.play();
    //     } else {
    //         audioRef.current.pause();
    //     }
    // }, [music]);

    // useEffect(() => {
    //     if (open) {
    //         document.body.classList.remove("overflow-y-hidden");
    //     } else {
    //         document.body.classList.add("overflow-y-hidden");
    //     }
    // }, [open]);

    const [copyRek, setCopyRek] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(rekening).then(() => {
        setCopyRek(true);
        setTimeout(() => {
            setCopyRek(false);
        }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    // disabled klik kanan dan keyboard untuk inspect
    useEffect(() => {
        const disabledRightClick = (e) => {
            e.preventDefault();
        }

        const disabledKeyInspect = (event) => {
          if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i')) {
            event.preventDefault();
          }
        };
    
        window.addEventListener('keydown', disabledKeyInspect);
        window.addEventListener('contextmenu', disabledRightClick);
    
        return () => {
          window.removeEventListener('keydown', disabledKeyInspect);
          window.addEventListener('contextmenu', disabledRightClick);
        };
    }, []);

    return (
        <>  
            {/* <audio ref={audioRef} src='/audio/soundWedding.mp3'/> */}
            <AnimatePresence mode='wait'>
                {!open &&
                    // <div className='fixed inset-0 overflow-x-hidden overflow-y-auto px-0 md:px-8 lg:px-32 xl:px-64 md:py-20 lg:py-32'>
                    <div className='fixed inset-0 overflow-x-hidden overflow-y-auto px-0 xl:px-64 py-0 xl:py-32'>
                        <div className='relative w-full'>
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
                            <motion.div 
                                className='h-screen xl:h-[512px] xl:flex xl:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] xl:from-[0%] to-[100%] xl:border xl:border-yellow-300/15 overflow-hidden xl:shadow-xl xl:shadow-yellow-300/5 rounded-xl'
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: 'easeInOut', delay: 1.2, duration: 0.5 }}
                            >
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='xl:basis-5/12 overflow-hidden absolute xl:relative inset-0 xl:rounded-e-xl'>
                                    <ImageSlideShow images={images}/>
                                </motion.div>
                                <div className='xl:basis-7/12 overflow-hidden absolute xl:relative z-20 inset-0 flex justify-center items-center bg-black/50 text-yellow-100'>
                                    <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px', rotate: '3deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '3deg' }} exit={{ opacity: 0, translateX: '-30px', translateY: '-30px', rotate: '3deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 1.5 }} className='absolute z-0 start-2 top-4'>
                                        <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px', rotate: '-3deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '-3deg' }} exit={{ opacity: 0, translateX: '30px', translateY: '-30px', rotate: '-3deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 1.5 }} className='absolute z-0 end-2 top-4'>
                                        <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '-30px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 1.5 }} className='absolute z-0 start-2 bottom-2'>
                                        <Image priority src='/image/border-b-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '30px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 1.5 }} className='absolute z-0 end-2 bottom-2'>
                                        <Image priority src='/image/border-b-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                    </motion.div>
                                    {/* <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -start-32 xl:start-1/4 top-24 w-96 h-96' />
                                    <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -end-32 xl:end-1/4 bottom-24 w-96 h-96' /> */}
                                    <div className='block xl:hidden bg-gradient-radial from-black/25 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96' />
                                    <div className='text-center'>
                                        <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.9, duration: 1.5 }} className='mb-2 tracking-wide text-yellow-100 font-light text-base  xl:text-xl'>Pawiwahan</motion.p>
                                        <motion.h2 initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className={`${birthstone.className} mb-4 text-5xl text-yellow-200`}>You &amp; Me</motion.h2>
                                        <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.7, duration: 1.5 }} className='inline-block xl:hidden mx-auto w-72 mb-2 text-sm'>Kami akan segera melangsungkan (Jenis acara) pada:</motion.p>
                                        <motion.div initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.6, duration: 1.5 }}>
                                            <DateCountdown tanggalAcara={tanggalAcara}/>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.5, duration: 1.5 }}>
                                            <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-auto w-56 mx-auto mt-2' />
                                        </motion.div>
                                        <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.4, duration: 1.5 }} className='mx-auto w-72 mb-2'>Kepada Yth:</motion.p>
                                        <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.3, duration: 1.5 }} className='mx-auto w-72 text-xl mb-4'>[nama undangan]</motion.p>

                                        <motion.div initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} exit={{ opacity: 0, translateX: '0px', translateY: '30px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0.2, duration: 1.5 }} className='inline-block relative'>
                                            <Image priority src='/image/leaf-l.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -start-11 top-3 rotate-12' />
                                            <Image priority src='/image/leaf-r.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -end-11 top-3 -rotate-12' />
                                            <button onClick={handleOpen} type="button" className='mt-8 border border-yellow-300 rounded-lg bg-black/50 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/15 px-8 py-4'>Buka Undangan</button>
                                            <Image priority src='/image/decoration-3.svg' alt='flower.svg' width={0} height={0} className='h-auto w-36 mx-auto mt-1' />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                }
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {open && 
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 2.5 }}
                    >
                        {/* <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'> */}
                        <div className='overflow-hidden px-0 xl:px-64 pt-0 xl:pt-32'>
                            <div className='relative'>
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
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 2 }} className='min-h-screen xl:min-h-0 xl:flex xl:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] md:from-[85%] xl:from-[0%] to-[100%] xl:border xl:border-yellow-300/15 overflow-hidden xl:shadow-xl xl:shadow-yellow-300/5 rounded-xl xl:mb-32'>
                                    <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2, duration: 1.5 }} className='block xl:hidden absolute bottom-0 start-0'>
                                        <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2, duration: 1.5 }} className='block xl:hidden absolute bottom-0 end-0'>
                                        <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                    </motion.div>
                                    <div className='xl:basis-5/12 relative xl:border-s border-yellow-300/15'>
                                        <motion.div initial={{ opacity: 0, zIndex: '10' }} animate={{ opacity: 1, zIndex: '10' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.8, duration: 1.5 }} className='block xl:hidden absolute inset-0 bg-gradient-to-t from-transparent to-black/75 from-[70%] to-[100%]'/>
                                        <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px', rotate: '6deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '6deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.2, duration: 1.5 }} className='block xl:hidden absolute z-20 -top-4 -start-8'>
                                            <Image src='/image/flower-l-3.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px', rotate: '-6deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '-6deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.2, duration: 1.5 }} className='block xl:hidden absolute z-20 -top-4 -end-8'>
                                            <Image src='/image/flower-r-3.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, translateX: '0px', translateY: '-30px', zIndex: '20' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px', zIndex: '20' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.2, duration: 1.5 }} className='block xl:hidden absolute inset-x-0 top-6'>
                                            <Image src='/image/decoration-1.svg' alt='Image1' width={0} height={0} className='mx-auto w-40 h-auto opacity-75'/>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.9, duration: 1.5 }}>
                                            <Image priority src={images[0]} alt='Image1' width={354} height={512} className='w-full max-h-[512px] md:max-h-[1024px] xl:max-h-[512px] object-cover' style={{objectPosition: '0% 0%'}}/>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.5, duration: 1.5 }} className='block xl:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                                    </div>

                                    <div className='xl:basis-7/12 relative xl:flex xl:justify-center xl:items-center px-4 py-12 md:py-24 xl:py-12'>
                                        <div>
                                            <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px', rotate: '6deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '6deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.2, duration: 1.5 }} className='hidden xl:block absolute -top-4 -start-8'>
                                                <Image src='/image/flower-l-3.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px', rotate: '6deg' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px', rotate: '6deg' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2.2, duration: 1.5 }} className='hidden xl:block absolute -top-4 -end-8'>
                                                <Image src='/image/flower-r-3.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2, duration: 1.5 }} className='hidden xl:block absolute bottom-0 start-0'>
                                                <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '30px' }} animate={{ opacity: 0.75, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 2, duration: 1.5 }} className='hidden xl:block absolute bottom-0 end-0'>
                                                <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36'/>
                                            </motion.div>
                                            <div className='absolute xl:static inset-x-0 -top-16 text-center xl:px-12'>
                                                <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.9, duration: 1.5 }} className='mb-2 tracking-wide text-yellow-100 font-light text-base xl:text-xl'>Pawiwahan</motion.p>
                                                <motion.h1 initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.8, duration: 1.5 }} className={`${birthstone.className} mb-4 text-5xl text-yellow-200`}>My Name &amp; Unkown</motion.h1>
                                            </div>
                                            <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.7, duration: 1.5 }} className='px-8 md:px-40 xl:px-12 italic tracking-wide text-yellow-100 text-center font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</motion.p>
                                            <motion.div initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.6, duration: 1.5 }} className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <motion.p initial={{ opacity: 0, translateX: '0px', translateY: '-30px' }} animate={{ opacity: 1, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 1.5, duration: 1.5 }} className='mb-4 xl:mb-0 px-12 md:px-40 xl:px-12 tracking-wide font-light text-center text-sm'>Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.</motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='md:flex md:flex-row bg-gradient-to-b from-transparent to-yellow-300/5 md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <div className='min-h-screen xl:min-h-0 md:basis-6/12 xl:basis-7/12 relative flex justify-center items-center px-4 py-24'>
                                        <div>
                                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 start-2 top-4 rotate-[3deg]' />
                                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 end-2 top-4 -rotate-[3deg]' />
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <h2 className={`${birthstone.className} text-center mb-4 text-5xl md:text-3xl xl:text-5xl text-yellow-200`}>Om Swastyastu</h2>
                                            {/* <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p> */}
                                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada Upacara Manusa Yadnya Pawiwahan putra dan putri kami.</p>
                                        </div>
                                    </div>
                                    <div className='md:basis-6/12 xl:basis-5/12 hidden md:block md:border-s border-yellow-300/15'>
                                        <Image priority src={images[2]} alt='Image1' width={354} height={512} className='w-full max-h-[512px] object-cover' style={{objectPosition: '0% 0%'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='min-h-screen xl:min-h-0 md:flex md:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] md:from-[0%] to-[100%] md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='block xl:hidden w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                    <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='block xl:hidden w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                    <div className='md:basis-6/12 xl:basis-5/12 relative md:border-s border-yellow-300/15'>
                                        <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='block md:hidden w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                                        <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='block md:hidden w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                                        <Image src='/image/undangan/man.jpeg' alt='Image1' width={354} height={512} className='w-full max-h-[512px] object-cover' style={{objectPosition: '0% 0%'}}/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                                    </div>

                                    <div className='md:basis-6/12 xl:basis-7/12 relative md:flex md:justify-center md:items-center px-4 py-12'>
                                        <div>
                                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='hidden md:block w-36 h-36 opacity-75 absolute top-2 end-2 rotate-180'/>
                                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='hidden md:block w-36 h-36 opacity-75 absolute top-2 start-2 rotate-180'/>
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='hidden xl:block w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='hidden xl:block w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <div className='absolute md:static inset-x-0 -top-16'>
                                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl md:text-3xl xl:text-5xl text-yellow-200`}>Sing</h2>
                                                <p className='mb-4 tracking-wide text-center text-yellow-100 font-light'>I Gede Sing Tawang</p>
                                            </div>
                                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putra pertama dari pasangan:</p>
                                            <p className='tracking-wide text-center text-yellow-100 font-light'>I Gede React Next Js</p>
                                            <p className='my-4 tracking-wide text-center font-light text-4xl'>&amp;</p>
                                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Putu Laravel artisan</p>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='md:flex md:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] md:from-[0%] to-[100%] md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <div className='md:basis-6/12 xl:basis-5/12 relative md:border-s md:border-yellow-300/15'>
                                        <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='block md:hidden w-20 h-20 opacity-100 absolute top-2 end-2 rotate-180'/>
                                        <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='block md:hidden w-20 h-20 opacity-100 absolute top-2 start-2 rotate-180'/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                                        <Image src='/image/undangan/woman.jpeg' alt='Image1' width={354} height={512} className='w-full max-h-[512px] object-cover' style={{objectPosition: '0% 0%'}}/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                                    </div>

                                    <div className='md:basis-6/12 xl:basis-7/12 relative md:flex md:justify-center md:items-center px-4 py-12'>
                                        <div>
                                            <Image src='/image/flower-l-3.svg' alt='Image1' width={0} height={0} className='hidden md:block w-36 h-36 opacity-75 absolute -top-4 -start-8 rotate-6'/>
                                            <Image src='/image/flower-r-3.svg' alt='Image1' width={0} height={0} className='hidden md:block w-36 h-36 opacity-75 absolute -top-4 -end-8 -rotate-6'/>
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <div className='absolute md:static inset-x-0 -top-16'>
                                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl md:text-3xl xl:text-5xl text-yellow-200`}>Tawang</h2>
                                                <p className='tracking-wide text-center text-yellow-100 font-light'>Ni Made Sing Tawang</p>
                                            </div>
                                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putri kedua dari pasangan:</p>
                                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>I Putu React Next Js</p>
                                            <p className='mb-2 tracking-wide text-center font-light text-4xl'>&amp;</p>
                                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Putu Laravel Artisan</p>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='md:flex md:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] md:from-[0%] to-[100%] md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <div className='md:basis-6/12 xl:basis-5/12 relative md:border-s md:border-yellow-300/15'>
                                        <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 end-2 rotate-180'/>
                                        <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 start-2 rotate-180'/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                                        <Image src={images[2]} alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                                        <div className='block md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                                    </div>

                                    <div className='md:basis-6/12 xl:basis-7/12 relative md:flex md:justify-center md:items-center px-4 py-12 md:py-0'>
                                        <div>
                                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='hidden md:block h-32 w-32 absolute z-0 start-2 top-4 rotate-[3deg]' />
                                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='hidden md:block h-32 w-32 absolute z-0 end-2 top-4 -rotate-[3deg]' />
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <div className='absolute md:static inset-x-0 -top-16'>
                                                <p className='mb-2 tracking-wide text-center text-yellow-100 font-light text-base md:text-sm xl:text-xl'>Waktu dan Lokasi</p>
                                                <h2 className={`${birthstone.className} text-center mb-4 text-5xl md:text-3xl xl:text-5xl text-yellow-200`}>Acara Kami</h2>
                                            </div>
                                            <p className='inline-block md:hidden mb-6 tracking-wide text-center font-light md:text-sm'>Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara kami :</p>
                                            <p className='hidden md:inline-block md:px-12 mb-6 tracking-wide text-center font-light md:text-sm'>Kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara kami :</p>
                                            <p className='text-yellow-200 tracking-wide text-center font-medium text-2xl md:text-xl'>{formatDate(tanggalAcara)}</p>
                                            <p className='mb-6 tracking-wide text-center font-light text-lg md:text-base'>17:00 s/d Selesai</p>
                                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <p className='mb-6 md:mb-0 px-8 tracking-wide text-center font-light md:text-sm'>Br. Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                                            {/* <div className='mb-6 text-center'>
                                                <Link href='/' className='inline-block px-4 py-2 border border-yellow-200 text-yellow-200 text-center'><FaMapMarkerAlt className='inline me-1 mb-0.5'/> Buka Google Map</Link>
                                            </div> */}
                                            <div className='text-center'>
                                                <div className='inline-block relative mb-6 md:mb-0'>
                                                    <Image priority src='/image/leaf-l.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -start-11 top-3 rotate-12' />
                                                    <Image priority src='/image/leaf-r.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -end-11 top-3 -rotate-12' />
                                                    <button onClick={handleOpen} type="button" className='mt-8 border border-yellow-300 rounded-lg bg-black/50 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/15 px-8 py-4'><FaMapMarkerAlt className='inline me-1 mb-0.5'/> Buka Google Map</button>
                                                    <Image priority src='/image/decoration-3.svg' alt='flower.svg' width={0} height={0} className='h-auto w-36 mx-auto mt-1' />
                                                </div>
                                            </div>
                                            {/* <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <GoogleMap/> */}

                        {/* <div className='grid grid-cols-2'>
                            {images && images.map((i, index) => {
                                return (
                                    <Image key={index} src={i} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                )
                            })}
                            {images && images.map((i, index) => {
                                return (
                                    <Image key={index} src={i} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                )
                            })}
                        </div> */}

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 md:mb-32">
                                    <div className="grid gap-2">
                                        <div>
                                            <Image src={images[0]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <div>
                                            <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[0]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <div>
                                            <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <div>
                                            <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                        <div>
                                            <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover rounded-xl'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='md:flex md:flex-row-reverse bg-gradient-to-b from-transparent to-yellow-300/5 from-[65%] md:from-[0%] to-[100%] md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <div className='md:basis-6/12 xl:basis-5/12 hidden md:block'>
                                        <Image priority src={images[2]} alt='Image1' width={354} height={512} className='w-full max-h-[512px] object-cover' style={{objectPosition: '0% 0%'}}/>
                                    </div>
                                    <div className='min-h-screen xl:min-h-0 md:basis-6/12 xl:basis-7/12 relative flex justify-center items-center px-4 pt-24 md:pt-8 pb-12 md:pb-0'>
                                        <div>
                                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 start-2 top-4 rotate-[3deg]' />
                                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 end-2 top-4 -rotate-[3deg]' />
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <Image src='/image/decoration-1.svg' alt='Image1' width={0} height={0} className='mx-auto w-2/3 h-auto opacity-75'/>
                                            <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Kado Digital</h2>
                                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <p className='inline-block md:hidden mb-12 md:mb-2 px-12 tracking-wide text-center font-light text-sm'>Doa restu Anda adalah anugerah terindah bagi kami. Namun, jika Anda ingin memberikan ungkapan tanda kasih melalui kado, Anda dapat melakukannya secara digital.</p>
                                            <p className='hidden md:inline-block mb-12 md:mb-2 px-12 tracking-wide text-center font-light text-sm'>Doa restu Anda adalah anugerah terindah. Untuk tanda kasih, kado dapat diberikan secara digital.</p>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>No rekening:</p>
                                            <p className='text-center tracking-widest text-lg text-yellow-200'>{rekening ? rekening : '-'}</p>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>BANK BRI</p>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>I Made Grubug Wayah</p>
                                            <div className='text-center'>
                                                <button onClick={handleCopy} type="button" className='inline-block ring-1 ring-transparent focus:ring-yellow-300 text-sm bg-zinc-900 rounded px-4 py-1'>
                                                    {copyRek ? (
                                                        <FaCheck className='inline me-1 mb-0.5'/>
                                                    ) : (
                                                        <MdContentCopy className='inline me-1 mb-0.5'/>
                                                    )}
                                                    {copyRek ? 'Tersalin' : 'Salin'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:pt-20 lg:pt-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='md:flex md:flex-row bg-gradient-to-b from-transparent to-yellow-300/5 md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl md:mb-32'>
                                    <div className='min-h-screen xl:min-h-0 md:basis-6/12 xl:basis-7/12 relative flex justify-center items-center px-4 pt-24 md:pt-12 pb-12'>
                                        <div className='w-full'>
                                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 start-2 top-4 rotate-[3deg]' />
                                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 end-2 top-4 -rotate-[3deg]' />
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Buku Tamu</h2>
                                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Ucapkan sesuatu untuk hari berbahagia</p>

                                            <div className='mt-12'>
                                                <form>
                                                    <div>
                                                        {/* <div>
                                                            <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Name anda</label>
                                                            <input type="text" id="error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-black focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Ketik disini..." />
                                                            <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Nama</span> Tidak boleh kosong.</p>
                                                        </div> */}
                                                        <div className='mb-6'>
                                                            <label htmlFor="namaAnda" className="block mb-2 text-sm font-medium text-white">Name anda</label>
                                                            <input type="text" id="namaAnda" className="w-full bg-yellow-300/5 focus:bg-zinc-950 border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2" placeholder="Ketik disini. . ." />
                                                            {/* <input type="text" id="error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-black focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Ketik disini..." /> */}
                                                            {/* <p className="mt-2 text-xs text-red-600 dark:text-red-500"><span className="font-medium">Nama</span> Tidak boleh kosong.</p> */}
                                                        </div>

                                                        <div className='mb-6'>
                                                            <label htmlFor="kehadiran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kehadiran</label>
                                                            <select id="kehadiran" className="w-full bg-yellow-300/5 focus:bg-zinc-950 border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2">
                                                                <option>Pilih</option>
                                                                <option value="1">Hadir</option>
                                                                <option value="2">Masih ragu-ragu</option>
                                                                <option value="3">Tergantung duase</option>
                                                                <option value="0">Tidak Hadir</option>
                                                            </select>
                                                        </div>
                                                        <div className='mb-2'>
                                                            <label htmlFor="ucapan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ucapan</label>
                                                            <textarea id="ucapan" className="w-full bg-yellow-300/5 focus:bg-zinc-950 border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2" placeholder='Ketik disini. . .' rows={6}></textarea>
                                                        </div>
                                                        <div className='text-center'>
                                                            <div className='inline-block relative mb-6'>
                                                                <Image priority src='/image/leaf-l.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -start-11 top-3 rotate-12' />
                                                                <Image priority src='/image/leaf-r.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -end-11 top-3 -rotate-12' />
                                                                <button type="submit" className='mt-8 border border-yellow-300 rounded-lg bg-black/50 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/15 px-8 py-4'><FaPaperPlane className='inline me-1 mb-0.5'/> Kirim ucapan</button>
                                                                <Image priority src='/image/decoration-3.svg' alt='flower.svg' width={0} height={0} className='h-auto w-36 mx-auto mt-1' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-0 end-0 rotate-180'/>
                                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-0 start-0 rotate-180'/> */}
                                        </div>
                                    </div>

                                    <div className='h md:basis-6/12 xl:basis-5/12 relative md:flex md:justify-center md:items-center px-0 py-8 md:border-s md:border-yellow-300/15'>
                                        <div className='h-screen md:h-[60vh] xl:h-[80vh] overflow-y-auto'>
                                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                            <p className='mb-4 px-12 tracking-wide text-center font-light'>99 Ucapan</p>
                                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaCheck className='inline me-1 mb-0.5 text-green-400'/> Hadir</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaXmark className='inline me-1 mb-0.5 text-red-500'/> Tidak Hadir</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaTriangleExclamation className='inline me-1 mb-0.5 text-yellow-500'/> Ragu-ragu</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaTriangleExclamation className='inline me-1 mb-0.5 text-yellow-500'/> Ragu-ragu</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaTriangleExclamation className='inline me-1 mb-0.5 text-yellow-500'/> Ragu-ragu</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                            <div className='flex items-start gap-4 my-4 ps-8'>
                                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                                </div>
                                                <div>
                                                    <h6 className='mb-1 pe-4 text-white'>Kadek Lanang Lanusa Putera</h6>
                                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaTriangleExclamation className='inline me-1 mb-0.5 text-yellow-500'/> Ragu-ragu</span></p>
                                                    <p className='font-light text-sm me-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                                </div>
                                            </div>
                                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden px-0 md:px-8 lg:px-32 xl:px-64 md:py-20 lg:py-32'>
                            <div className='relative'>
                                <motion.div initial={{ opacity: 0, translateX: '-30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -start-16 -top-16'>
                                    <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44'/>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.6, duration: 1.5 }} className='hidden md:block absolute z-0 -end-16 -top-16'>
                                    <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block absolute z-0 -start-32 bottom-32'>
                                    <Image priority src='/image/flower-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 0.8, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -end-32 bottom-32'>
                                    <Image priority src='/image/flower-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -end-32 rotate-45'>
                                    <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.75, translateX: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1, duration: 1.5 }} className='hidden md:block absolute z-10 -bottom-4 -start-32 -rotate-45'>
                                    <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-44 w-44' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '-30px' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -bottom-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, translateX: '-50%', translateY: '30px', rotate: '180deg' }} viewport={{ once: true }} whileInView={{ opacity: 0.5, translateX: '-50%', translateY: '0px', rotate: '180deg' }} transition={{ type: 'spring', bounce: 0.5, ease: 'easeInOut', delay: 1.2, duration: 1.5 }} className='hidden md:block opacity-50 absolute z-0 -top-40 start-1/2'>
                                    <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-56 w-56' />
                                </motion.div>
                                <div className='min-h-screen xl:min-h-0 flex justify-center items-center relative px-4 py-40 bg-gradient-to-b from-transparent to-yellow-300/5 md:border md:border-yellow-300/15 overflow-hidden md:shadow-xl md:shadow-yellow-300/5 rounded-xl'>
                                    <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                                    <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                                    <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                                    <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                                    <div>
                                        <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Matur Suksma</h2>
                                        <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Sampai jumpa di hari bahagia kami</p>
                                        <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                                        <div className='text-center text-zinc-500'>
                                            <p>© {new Date().getFullYear()} Ashura Bali. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='relative p-3'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute top-0 end-0 rotate-180'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute top-0 start-0 rotate-180'/>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <GoogleMap/>
                        </div> */}

                        <motion.button 
                            onClick={toggleMusic}
                            className='fixed bottom-4 end-4 h-12 w-12 flex justify-center items-center border border-yellow-100 hover:border-white backdrop-blur-sm rounded-lg text-yellow-100 hover:text-white bg-black/25 focus:ring-1 ring-yellow-300'
                        >
                            {music ? <FaPause className=' animate-pulse'/> : <FaPlay/>}
                        </motion.button>
                        {/* <footer className='bg-pink-950 border-t border-zinc-700 text-zinc-400 text-center text-sm px-4 py-8'>
                            <p>© {new Date().getFullYear()} Ashura Bali. All Rights Reserved.</p>
                        </footer> */}
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default OpenWedding