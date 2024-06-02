'use client'
import { Birthstone } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import DateCountdown from './DateCountdown';
import ImageSlideShow from './ImageSlideShow';

const birthstone = Birthstone({
    subsets: ["latin"],
    weight: ["400"],
});

function OpenWedding({images}) {

    return (
        <div className='overflow-hidden h-screen'>
            <ImageSlideShow images={images}/>
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

                    <button type="button" className='mt-8 border border-yellow-100 rounded-lg bg-black/25 hover:bg-black/50 focus:ring-1 ring-yellow-300 transition duration-500 shadow-xl shadow-yellow-300/25 px-8 py-4'>Buka Undangan</button>
                </div>
            </div>
        </div>
    )
}

export default OpenWedding