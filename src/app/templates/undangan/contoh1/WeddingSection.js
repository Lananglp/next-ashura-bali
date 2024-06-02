'use client'
import { Birthstone } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import DateCountdown from './DateCountdown';
import ImageSlideShow from './ImageSlideShow';
import { AnimatePresence, motion } from 'framer-motion';
import { handleMusic } from '@/helper/Helper';
import { FaMusic, FaPause, FaPlay } from 'react-icons/fa6';
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";

const birthstone = Birthstone({
    subsets: ["latin"],
    weight: ["400"],
});

function OpenWedding({images}) {

    const [open, setOpen] = useState(false); // ubah jadi false
    // const audioRef = useRef(new Audio('/audio/soundWedding.mp3'));
    const [music, setMusic] = useState(false);

    const handleOpen = () => {
        setTimeout(() => {
            setOpen(true);
        }, 500);
        // setMusic(true);
    };

    // const toggleMusic = () => {
    //     setMusic(!music);
    // };

    // useEffect(() => {
    //     if (music) {
    //         audioRef.current.play();
    //     } else {
    //         audioRef.current.pause();
    //     }
    // }, [music]);

    useEffect(() => {
        if (open) {
            document.body.classList.remove("overflow-y-hidden");
        } else {
            document.body.classList.add("overflow-y-hidden");
        }
    }, [open]);

    return (
        <>
            <AnimatePresence>
                {!open &&
                    <motion.div 
                        className='h-screen bg-black'
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.5 }}
                    >
                        <div className='overflow-hidden absolute inset-0'>
                            <ImageSlideShow images={images}/>
                        </div>
                        <div className='overflow-hidden absolute z-20 inset-0 flex justify-center items-center bg-black/50 text-yellow-100'>
                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={128} height={128} className='absolute z-0 start-2 top-4 rotate-[3deg]' />
                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={128} height={128} className='absolute z-0 end-2 top-4 -rotate-[3deg]' />
                            <Image priority src='/image/border-b-l.svg' alt='flower.svg' width={128} height={128} className='absolute z-0 start-2 bottom-2' />
                            <Image priority src='/image/border-b-r.svg' alt='flower.svg' width={128} height={128} className='absolute z-0 end-2 bottom-2' />
                            <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -start-32 xl:start-1/4 top-24 w-96 h-96' />
                            <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -end-32 xl:end-1/4 bottom-24 w-96 h-96' />
                            <div className='bg-gradient-radial from-black/25 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96' />
                            <div className='text-center'>
                                <h2 className={`${birthstone.className} mb-4 text-5xl`}>Dwika &amp; Erina</h2>
                                <p className='mx-auto w-72 mb-2'>Kami akan segera melangsungkan pernikahan pada:</p>
                                <DateCountdown/>
                                <p className='mx-auto w-72 mt-12 mb-2'>Kepada Yth:</p>
                                <p className='mx-auto w-72 text-2xl mb-4'>Kadek Lanang Lanusa Putera</p>

                                <button onClick={handleOpen} type="button" className='mt-8 border border-yellow-100 rounded-lg bg-black/25 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/25 px-8 py-4'>Buka Undangan</button>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {open && 
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 2.5 }}
                    >
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[70%] to-[100%]'/>
                            <div className='absolute inset-x-0 top-2'>
                                <Image src='/image/decoration-1.svg' alt='Image1' width={0} height={0} className='mx-auto w-56 h-auto'/>
                            </div>
                            <Image priority src={images[0]} alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l.svg' alt='Image1' width={0} height={0} className='w-24 h-24 opacity-50 absolute -top-12 start-0'/>
                            <Image src='/image/flower-r.svg' alt='Image1' width={0} height={0} className='w-24 h-24 opacity-50 absolute top-20 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Pawiwahan</p>
                                <h1 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Dwika &amp; Erina</h1>
                            </div>
                            <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p>
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <p className='px-4 tracking-wide text-center font-light text-sm'>Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.</p>
                        </div>

                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src='/image/undangan/man.jpeg' alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl text-yellow-200`}>Bro Dwika</h2>
                                <p className='tracking-wide text-center text-yellow-100 font-light'>I Made Dwika Ananta Gunawan, S.kom</p>
                            </div>
                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putra pertama dari pasangan:</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>I Wayan Gredeg Jaya</p>
                            <p className='mb-2 tracking-wide text-center font-light text-4xl'>&amp;</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Ketut Laravel Putriyani</p>
                            <p className='px-4 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                        </div>

                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src='/image/undangan/woman.jpeg' alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl text-yellow-200`}>Mbak Erina</h2>
                                <p className='tracking-wide text-center text-yellow-100 font-light'>Ni Made Erina Cipta Yanti</p>
                            </div>
                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putri kedua dari pasangan:</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>I Putu Tigtig putra</p>
                            <p className='mb-2 tracking-wide text-center font-light text-4xl'>&amp;</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Luh Syanti Sekar</p>
                            <p className='px-4 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                        </div>

                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src={images[2]} alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={154} height={0} className='w-auto h-auto opacity-30 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Waktu dan Lokasi</p>
                                <h1 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Acara Kami</h1>
                            </div>
                            <p className='mb-6 px-4 tracking-wide text-center font-light text-lg'>17:00 s/d Selesai</p>
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <p className='mb-6 px-4 tracking-wide text-center font-light'>Br. Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                            <Link href='/' className='block px-4 py-2 border border-yellow-200 text-yellow-200 text-center'><FaMapMarkerAlt className='inline me-1 mb-0.5'/> Buka Google Map</Link>
                            {/* <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p> */}
                        </div>

                        {/* <motion.button 
                            onClick={toggleMusic}
                            className='fixed bottom-4 end-4 h-12 w-12 flex justify-center items-center border border-yellow-100 hover:border-white backdrop-blur-sm rounded-lg text-yellow-100 hover:text-white bg-black/25 focus:ring-1 ring-yellow-300'
                        >
                            {music ? <FaPause className=' animate-pulse'/> : <FaPlay/>}
                        </motion.button> */}
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default OpenWedding