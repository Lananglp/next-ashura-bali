'use client'
import { handleMusic } from '@/helper/Helper';
import React, { useEffect, useState } from 'react'
import { FaMusic } from 'react-icons/fa6'

function MusicButton({ music }) {

    const [musicPlaying, setMusicPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = music.current;
        if (!musicPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        setMusicPlaying(!musicPlaying);
    };

  return (
    <button onClick={toggleMusic} className='fixed bottom-0 end-0 p-4 border'><FaMusic/></button>
  )
}

export default MusicButton