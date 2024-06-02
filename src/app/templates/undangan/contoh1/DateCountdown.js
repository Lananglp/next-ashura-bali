'use client'
import { formatDate } from '@/helper/Helper';
import React, { useEffect, useState } from 'react'

function DateCountdown() {

    const tanggalAcara = new Date('2024-06-04T00:00:00');

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
            <p className='mx-auto w-72 text-2xl font-semibold mb-4'>{formatDate(tanggalAcara)}</p>
            {isClient && timeLeft.days !== undefined ? (
                <div className='flex flex-grow justify-center gap-4'>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>{timeLeft.days}</p>
                        </div>
                        <p className='mt-2'>Hari</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>{timeLeft.hours}</p>
                        </div>
                        <p className='mt-2'>Jam</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>{timeLeft.minutes}</p>
                        </div>
                        <p className='mt-2'>Menit</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>{timeLeft.seconds}</p>
                        </div>
                        <p className='mt-2'>Detik</p>
                    </div>
                </div>
            ) : (
                <div className='flex flex-grow justify-center gap-4'>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>--</p>
                        </div>
                        <p className='mt-2'>Hari</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>--</p>
                        </div>
                        <p className='mt-2'>Jam</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>--</p>
                        </div>
                        <p className='mt-2'>Menit</p>
                    </div>
                    <div>
                        <div className='border border-yellow-100 rounded-lg bg-black/0 h-14 w-14 flex justify-center items-center'>
                            <p className='text-lg font-light'>--</p>
                        </div>
                        <p className='mt-2'>Detik</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default DateCountdown