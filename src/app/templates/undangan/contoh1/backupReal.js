'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  '/image/undangan/image1.jpg',
  '/image/undangan/image2.jpg',
  '/image/undangan/image3.jpg',
  '/image/undangan/image4.jpg',
];

const transition = {
  duration: 1, // Durasi transisi 1 detik
  ease: "easeInOut", // Efek transisi yang lebih mulus
};

const Page = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative h-screen">
      <AnimatePresence mode='wait'>
        <motion.img
          key={index}
          src={images[index]}
          className="w-screen h-full object-cover"
          alt={`Undangan ${index + 1}`}
          initial={{ opacity: 0 }} // Mulai dengan opasitas 0
          animate={{ opacity: 1 }} // Animasikan fade in dengan opasitas 1
          exit={{ opacity: 0 }} // Animasikan fade out dengan opasitas 0
          transition={transition} // Gunakan transisi yang telah ditentukan
        />
      </AnimatePresence>
      <div className='absolute inset-0 flex justify-center items-center bg-black/50'>
        <h2>Welcome bro</h2>
      </div>
    </div>
  );
};

export default Page;
