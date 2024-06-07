'use client'
import { formatDate } from '@/helper/Helper';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function DateCountdown({tanggalAcara}) {

    const calculateTimeLeft = () => {
        const currentTime = new Date();
        const difference = tanggalAcara - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <p className='block md:hidden mx-auto w-72 text-xl font-semibold mb-4'>{formatDate(tanggalAcara)}</p>
            {isClient && timeLeft.days !== undefined ? (
                <div className='md:hidden flex flex-grow justify-center gap-4'>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-auto  min-w-20 absolute -start-12 -top-10' />
                            <p className='font-light'>{timeLeft.days}</p>
                        </div>
                        <p className='mt-2'>Hari</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <p className='font-light'>{timeLeft.hours}</p>
                        </div>
                        <p className='mt-2'>Jam</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <p className='font-light'>{timeLeft.minutes}</p>
                        </div>
                        <p className='mt-2'>Menit</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                        <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-auto  min-w-20 absolute -end-12 -top-10' />
                            <p className='font-light'>{timeLeft.seconds}</p>
                        </div>
                        <p className='mt-2'>Detik</p>
                    </div>
                </div>
            ) : (
                <div className='md:hidden flex flex-grow justify-center gap-4'>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <Image priority src='/image/flower-l-3.svg' alt='flower.svg' width={0} height={0} className='h-auto  min-w-20 absolute -start-12 -top-10' />
                            <p className='font-light'>--</p>
                        </div>
                        <p className='mt-2'>Hari</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <p className='font-light'>--</p>
                        </div>
                        <p className='mt-2'>Jam</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <p className='font-light'>--</p>
                        </div>
                        <p className='mt-2'>Menit</p>
                    </div>
                    <div>
                        <div className='relative border border-yellow-300 rounded-lg bg-black/0 h-12 w-12 flex justify-center items-center'>
                            <Image priority src='/image/flower-r-3.svg' alt='flower.svg' width={0} height={0} className='h-auto  min-w-20 absolute -end-12 -top-10' />
                            <p className='font-light'>--</p>
                        </div>
                        <p className='mt-2'>Detik</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default DateCountdown