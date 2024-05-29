import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Button({href, onClick, buttonColor ="", children}) {

    const bgColor = "green"

  if (href) {
    return (
        <Link href={href} className={`group/item relative mt-4 mb-0 inline-block bg-gradient-to-b from-${bgColor}-800 to-${bgColor}-800 ring-1 ring-transparent hover:scale-[1.025] focus:ring-zinc-400 text-white font-medium text-sm text-center rounded shadow-xl shadow-${bgColor}-700/50 transition duration-200 px-8 py-2`}>
            <FaStar className={`group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-${bgColor}-500`} />
            <FaStar className={`group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-${bgColor}-500`} />
            <FaStar className={`group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-${bgColor}-500`} />
            {children}
        </Link>
    )
  } else {
    return (
        <button onClick={onClick} className={`group/item relative mt-4 mb-0 inline-block bg-gradient-to-b from-${bgColor}-800 to-${bgColor}-800 ring-1 ring-transparent hover:scale-[1.025] focus:ring-zinc-400 text-white font-medium text-sm text-center rounded shadow-xl shadow-${bgColor}-700/50 transition duration-200 px-8 py-2`}>
            <FaStar className={`group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-${bgColor}-500`} />
            <FaStar className={`group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-${bgColor}-500`} />
            <FaStar className={`group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-${bgColor}-500`} />
            {children}
        </button>
    )
  }
}

export default Button