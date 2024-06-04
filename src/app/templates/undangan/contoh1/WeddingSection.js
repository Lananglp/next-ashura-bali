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

const birthstone = Birthstone({
    subsets: ["latin"],
    weight: ["400"],
});

function OpenWedding({images, tanggalAcara}) {

    const [open, setOpen] = useState(true); // ubah jadi false
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
                            <Image priority src='/image/border-t-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 start-2 top-4 rotate-[3deg]' />
                            <Image priority src='/image/border-t-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 end-2 top-4 -rotate-[3deg]' />
                            <Image priority src='/image/border-b-l.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 start-2 bottom-2' />
                            <Image priority src='/image/border-b-r.svg' alt='flower.svg' width={0} height={0} className='h-32 w-32 absolute z-0 end-2 bottom-2' />
                            {/* <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -start-32 xl:start-1/4 top-24 w-96 h-96' />
                            <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute -z-10 -end-32 xl:end-1/4 bottom-24 w-96 h-96' /> */}
                            <div className='bg-gradient-radial from-black/25 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96' />
                            <div className='text-center'>
                                <h2 className={`${birthstone.className} mb-4 text-5xl`}>You &amp; Me</h2>
                                <p className='mx-auto w-72 mb-2 text-sm'>Kami akan segera melangsungkan (Jenis acara) pada:</p>
                                <DateCountdown tanggalAcara={tanggalAcara}/>
                                <Image priority src='/image/decoration-2.svg' alt='flower.svg' width={0} height={0} className='h-auto w-56 mx-auto mt-2' />
                                <p className='mx-auto w-72 mb-2'>Kepada Yth:</p>
                                <p className='mx-auto w-72 text-xl mb-4'>Kadek Lanang Lanusa Putera</p>

                                <div className='inline-block relative'>
                                    <Image priority src='/image/leaf-l.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -start-11 top-3 rotate-12' />
                                    <Image priority src='/image/leaf-r.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -end-11 top-3 -rotate-12' />
                                    <button onClick={handleOpen} type="button" className='mt-8 border border-yellow-300 rounded-lg bg-black/50 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/15 px-8 py-4'>Buka Undangan</button>
                                    <Image priority src='/image/decoration-3.svg' alt='flower.svg' width={0} height={0} className='h-auto w-36 mx-auto mt-1' />
                                </div>
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
                            <Image src='/image/border-t-l-2.svg' alt='Image1' width={0} height={0} className='w-32 h-auto absolute top-0 start-0'/>
                            <Image src='/image/border-t-r-2.svg' alt='Image1' width={0} height={0} className='w-32 h-auto absolute top-0 end-0'/>
                            <div className='absolute inset-x-0 top-6'>
                                <Image src='/image/decoration-1.svg' alt='Image1' width={0} height={0} className='mx-auto w-32 h-auto opacity-75'/>
                            </div>
                            <Image priority src={images[0]} alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-16 h-16 opacity-75 absolute bottom-8 start-2'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-16 h-16 opacity-75 absolute bottom-8 end-2'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            {/* <Image src='/image/flower-l.svg' alt='Image1' width={0} height={0} className='w-24 h-24 opacity-75 absolute -top-12 start-0'/>
                            <Image src='/image/flower-r.svg' alt='Image1' width={0} height={0} className='w-24 h-24 opacity-75 absolute top-20 end-0'/> */}
                            <div className='absolute inset-x-0 -top-16'>
                                <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Pawiwahan</p>
                                <h1 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>You &amp; Me</h1>
                            </div>
                            <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p>
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.</p>
                        </div>
                        <div className='relative px-4 py-24'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Om Swastyastu</h2>
                            {/* <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p> */}
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada Upacara Manusa Yadnya Pawiwahan putra dan putri kami.</p>
                        </div>

                        <div className='relative'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src='/image/undangan/man.jpeg' alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl text-yellow-200`}>Bro Dwika</h2>
                                <p className='tracking-wide text-center text-yellow-100 font-light'>I Made Dwika Ananta Gunawan, S.kom</p>
                            </div>
                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putra pertama dari pasangan:</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>I Wayan Gredeg Jaya</p>
                            <p className='mb-2 tracking-wide text-center font-light text-4xl'>&amp;</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Ketut Laravel Putriyani</p>
                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                        </div>

                        <div className='relative'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 start-2 rotate-180'/>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src='/image/undangan/woman.jpeg' alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <h2 className={`${birthstone.className} text-center mb-2 text-5xl text-yellow-200`}>Mbak Erina</h2>
                                <p className='tracking-wide text-center text-yellow-100 font-light'>Ni Made Erina Cipta Yanti</p>
                            </div>
                            <p className='mb-2 tracking-wide text-center font-light text-sm'>Putri kedua dari pasangan:</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>I Putu Tigtig putra</p>
                            <p className='mb-2 tracking-wide text-center font-light text-4xl'>&amp;</p>
                            <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Ni Luh Syanti Sekar</p>
                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Br.Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                        </div>

                        <div className='relative'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-100 absolute top-2 start-2 rotate-180'/>
                            <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/50 from-[95%] to-[100%]'/>
                            <Image src={images[2]} alt='Image1' width={354} height={512} className='w-full h-[512px] object-cover'/>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black from-[50%] to-[100%]'/>
                        </div>

                        <div className='relative px-4 py-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <div className='absolute inset-x-0 -top-16'>
                                <p className='mb-2 tracking-wide text-center text-yellow-100 font-light'>Waktu dan Lokasi</p>
                                <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Acara Kami</h2>
                            </div>
                            <p className='mb-6 tracking-wide text-center font-light'>Merupakan suatu kehormatan & kebahagian kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberi doa restu pada :</p>
                            <p className='text-yellow-200 tracking-wide text-center font-medium text-2xl'>{formatDate(tanggalAcara)}</p>
                            <p className='mb-6 tracking-wide text-center font-light text-lg'>17:00 s/d Selesai</p>
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <p className='mb-6 px-8 tracking-wide text-center font-light'>Br. Gulingan, Antosari, Selemadeg Barat, Tabanan, Bali</p>
                            {/* <div className='mb-6 text-center'>
                                <Link href='/' className='inline-block px-4 py-2 border border-yellow-200 text-yellow-200 text-center'><FaMapMarkerAlt className='inline me-1 mb-0.5'/> Buka Google Map</Link>
                            </div> */}
                            <div className='text-center'>
                                <div className='inline-block relative mb-6'>
                                    <Image priority src='/image/leaf-l.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -start-11 top-3 rotate-12' />
                                    <Image priority src='/image/leaf-r.svg' alt='flower.svg' width={0} height={0} className='h-16 w-16 absolute z-0 -end-11 top-3 -rotate-12' />
                                    <button onClick={handleOpen} type="button" className='mt-8 border border-yellow-300 rounded-lg bg-black/50 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/15 px-8 py-4'><FaMapMarkerAlt className='inline me-1 mb-0.5'/> Buka Google Map</button>
                                    <Image priority src='/image/decoration-3.svg' alt='flower.svg' width={0} height={0} className='h-auto w-36 mx-auto mt-1' />
                                </div>
                            </div>
                            {/* <p className='px-8 italic tracking-wide text-center text-yellow-100 font-light text-sm'>&quot; Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe. &quot;</p> */}
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

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
                            <div className="grid gap-2">
                                <div>
                                    <Image src={images[0]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[0]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <Image src={images[2]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[3]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                                <div>
                                    <Image src={images[1]} alt='Image1' width={200} height={300} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        </div>


                        <div className='relative px-4 pt-4 pb-12'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            
                            <Image src='/image/decoration-1.svg' alt='Image1' width={0} height={0} className='mx-auto w-2/3 h-auto opacity-75'/>
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
                                            <input type="text" id="namaAnda" className="w-full bg-black focus:bg-black border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2" placeholder="Ketik disini. . ." />
                                            {/* <input type="text" id="error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-black focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Ketik disini..." /> */}
                                            {/* <p className="mt-2 text-xs text-red-600 dark:text-red-500"><span className="font-medium">Nama</span> Tidak boleh kosong.</p> */}
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor="kehadiran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kehadiran</label>
                                            <select id="kehadiran" className="w-full bg-black focus:bg-black border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2">
                                                <option>Pilih</option>
                                                <option value="1">Hadir</option>
                                                <option value="2">Masih ragu-ragu</option>
                                                <option value="3">Tergantung duase</option>
                                                <option value="0">Tidak Hadir</option>
                                            </select>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor="ucapan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ucapan</label>
                                            <textarea id="ucapan" className="w-full bg-black focus:bg-black border border-zinc-800 focus:ring-1 focus:ring-yellow-300 focus:outline-none focus:border-yellow-300 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2" placeholder='Ketik disini. . .' rows={6}></textarea>
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

                        <div className='relative px-8 py-8'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <div className='flex items-start gap-4 my-4'>
                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                </div>
                                <div>
                                    <h6 className='mb-1 text-white'>Kadek Lanang Lanusa Putera</h6>
                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaCheck className='inline me-1 mb-0.5 text-green-400'/> Hadir</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                </div>
                            </div>
                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                            <div className='flex items-start gap-4 my-4'>
                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                </div>
                                <div>
                                    <h6 className='mb-1 text-white'>Kadek Lanang Lanusa Putera</h6>
                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaXmark className='inline me-1 mb-0.5 text-red-500'/> Tidak Hadir</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                </div>
                            </div>
                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                            <div className='flex items-start gap-4 my-4'>
                                <div className='bg-zinc-900 rounded p-2 mt-1.5'>
                                    <FaUser className='h-4 w-4 text-zinc-500'/>
                                </div>
                                <div>
                                    <h6 className='mb-1 text-white'>Kadek Lanang Lanusa Putera</h6>
                                    <p className='mb-4 text-sm'>2 Mei 2027 <span className='ms-2 bg-zinc-900 rounded px-2 py-0.5'><FaTriangleExclamation className='inline me-1 mb-0.5 text-yellow-500'/> Ragu-ragu</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur similique facere quod delectus eos error adipisci debitis commodi dolores a rerum, ad, magni quis?</p>
                                </div>
                            </div>
                            <div className='my-6 mx-auto w-72 border-b border-zinc-800' />
                        </div>

                        <div className='relative px-4 py-40'>
                            <Image src='/image/border-b-l-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 end-2 rotate-180'/>
                            <Image src='/image/border-b-r-2.svg' alt='Image1' width={0} height={0} className='w-20 h-20 opacity-75 absolute top-2 start-2 rotate-180'/>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <h2 className={`${birthstone.className} text-center mb-4 text-5xl text-yellow-200`}>Matur Suksma</h2>
                            <p className='mb-4 px-12 tracking-wide text-center font-light text-sm'>Sampai jumpa di hari bahagia kami</p>
                            <div className='my-6 mx-auto w-56 border-b border-zinc-800' />
                            <div className='text-center text-zinc-500'>
                                <p>© {new Date().getFullYear()} Ashura Bali. All Rights Reserved.</p>
                            </div>
                        </div>

                        {/* <div className='relative p-3'>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute top-0 end-0 rotate-180'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute top-0 start-0 rotate-180'/>
                            <Image src='/image/flower-l-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 start-0'/>
                            <Image src='/image/flower-r-2.svg' alt='Image1' width={0} height={0} className='w-36 h-36 opacity-75 absolute bottom-0 end-0'/>
                            <GoogleMap/>
                        </div> */}

                        {/* <motion.button 
                            onClick={toggleMusic}
                            className='fixed bottom-4 end-4 h-12 w-12 flex justify-center items-center border border-yellow-100 hover:border-white backdrop-blur-sm rounded-lg text-yellow-100 hover:text-white bg-black/25 focus:ring-1 ring-yellow-300'
                        >
                            {music ? <FaPause className=' animate-pulse'/> : <FaPlay/>}
                        </motion.button> */}
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