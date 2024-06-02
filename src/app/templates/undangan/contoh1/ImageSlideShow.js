'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function ImageSlideShow({ images }) {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Ganti gambar setiap 5 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <motion.img
                key={index}
                src={images[index]}
                className="w-screen h-screen object-cover"
                alt={`Undangan ${index + 1}`}
                initial={{ scale: 1.2, opacity: 0.25 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0.25 }}
                transition={{ease: 'linear', duration: 2.5}}
            />
        </AnimatePresence>
    )
}

export default ImageSlideShow