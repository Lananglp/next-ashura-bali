'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { Birthstone } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/image/undangan/image1.jpg',
  '/image/undangan/image2.jpg',
  '/image/undangan/image3.jpg',
  '/image/undangan/image4.jpg',
];

const transition = {
  duration: 2.5, // Durasi transisi 1 detik
  ease: "linear", // Efek transisi yang lebih mulus
};

const transition2 = {
  duration: 5, // Durasi transisi 1 detik
  ease: "linear", // Efek transisi yang lebih mulus
};

const birthstone = Birthstone({ 
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden relative h-screen'>
      <Image src='/image/border-t-l.svg' alt='flower.svg' width={128} height={128} className='absolute z-10 start-2 top-4 rotate-[3deg]'/>
      <Image src='/image/border-t-r.svg' alt='flower.svg' width={128} height={128} className='absolute z-10 end-2 top-4 -rotate-[3deg]'/>
      <Image src='/image/border-b-l.svg' alt='flower.svg' width={128} height={128} className='absolute z-10 start-2 bottom-2'/>
      <Image src='/image/border-b-r.svg' alt='flower.svg' width={128} height={128} className='absolute z-10 end-2 bottom-2'/>
      <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute z-10 -start-32 xl:start-1/4 top-24 w-96 h-96' />
      <div className='bg-gradient-radial from-yellow-300/15 from-[0%] to-transparent to-[70%] absolute z-10 -end-32 xl:end-1/4 bottom-24 w-96 h-96' />
        {/* <motion.div
          key={index}
          className='h-full'
          // initial={{ scale: 1 }} // Mulai dengan opasitas 0 dan skala normal (1)
          animate={{ scale: 1 }} // Animasikan fade in dengan opasitas 1 dan sedikit zoom in (1.05)
          exit={{ scale: 2 }} // Animasikan fade out dengan opasitas 0
          transition={transition2} // Gunakan transisi yang telah ditentukan
        >
          
        </motion.div> */}
        <AnimatePresence mode='popLayout'>
            <motion.div 
              className='h-full'
              key={index}
              initial={{ scale: 1.2 }} // Mulai dengan opasitas 0 dan skala normal (1)
              animate={{ scale: 1 }} // Animasikan fade in dengan opasitas 1 dan sedikit zoom in (1.05)
              exit={{ scale: 1.2 }} // Animasikan fade out dengan opasitas 0
              transition={transition2} // Gunakan transisi yang telah ditentukan
            >
              <motion.img
                key={index}
                src={images[index]}
                className="w-screen h-full object-cover"
                alt={`Undangan ${index + 1}`}
                initial={{ opacity: 0 }} // Mulai dengan opasitas 0 dan skala normal (1)
                animate={{ opacity: 1 }} // Animasikan fade in dengan opasitas 1 dan sedikit zoom in (1.05)
                exit={{ opacity: 0 }} // Animasikan fade out dengan opasitas 0
                transition={transition} // Gunakan transisi yang telah ditentukan
              />
            </motion.div>
          </AnimatePresence>
      <div className='absolute inset-0 flex justify-center items-center bg-black/50 text-yellow-100'>
        <div className='bg-gradient-radial from-black from-[0%] to-transparent to-[70%] absolute -z-10 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96' />
        <div className='text-center'>
          {/* <Image src='/image/flower.svg' alt='flower.svg' width={154} height={154} className=''/> */}
          <h2 className={`${birthstone.className} mb-4 text-5xl`}>Dwika &amp; Erina</h2>
          <p className='mx-auto w-72 mb-2'>Kami akan segera melangsungkan pernikahan pada:</p>
          <p className='mx-auto w-72 text-2xl font-semibold mb-4'>7 April 2024</p>
          <div className='flex flex-grow justify-center gap-4'>
            <div>
              <div className='border border-yellow-100 rounded-lg bg-black/25 p-4'>
                <p className='text-lg font-light'>02</p>
              </div>
              <p className='mt-2'>Hari</p>
            </div>
            <div>
              <div className='border border-yellow-100 rounded-lg bg-black/25 p-4'>
                <p className='text-lg font-light'>02</p>
              </div>
              <p className='mt-2'>Jam</p>
            </div>
            <div>
              <div className='border border-yellow-100 rounded-lg bg-black/25 p-4'>
                <p className='text-lg font-light'>02</p>
              </div>
              <p className='mt-2'>Menit</p>
            </div>
            <div>
              <div className='border border-yellow-100 rounded-lg bg-black/25 p-4'>
                <p className='text-lg font-light'>02</p>
              </div>
              <p className='mt-2'>Detik</p>
            </div>
          </div>
          <p className='mx-auto w-72 mt-12 mb-2'>Kepada Yth:</p>
          <p className='mx-auto w-72 text-2xl mb-4'>Kadek Lanang Lanusa Putera</p>

          <button type="button" className='mt-8 border border-yellow-100 rounded-lg bg-black/25 hover:bg-black/50 transition duration-500 shadow-xl shadow-yellow-300/25 px-8 py-4'>Buka Undangan</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
