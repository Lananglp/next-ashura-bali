import { formatRupiah } from '@/helper/Helper'
import React from 'react'
import { FaCheck, FaCloud, FaXmark } from 'react-icons/fa6'

function CardPriceList({children}) {
  return (
    <div className="mx-auto max-w-6xl">
        <div className="md:flex md:flex-row md:flex-wrap xl:flex-nowrap justify-center gap-4">{children}</div>
    </div>
  )
}

export const ItemPriceList = ({badge, title, description, price, priceType, priceCategori, onClick, children}) => {
    return (
        <div className="basis-1/3 relative flex flex-col p-6 text-center text-gray-900 border border-gray-100 dark:border-pink-900 xl:p-8 dark:text-white bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50">
            <div className='absolute top-0 end-0 bg-pink-700 rounded-tr-lg rounded-bl-lg text-sm px-4 py-0.5'>{badge}</div>
            <h3 className={`my-4 text-2xl font-semibold 
                ${priceCategori === 1 && 'text-zinc-200 dark:text-white'}
                ${priceCategori === 2 && 'text-blue-600 dark:text-blue-300'}
                ${priceCategori === 3 && 'text-purple-500 dark:text-sky-400'}
            `}>
                {title}
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-300">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-2xl font-semibold text-zinc-200 dark:text-white">{formatRupiah(price)}</span>
                {priceType && <span className="text-gray-500 dark:text-gray-300">/{priceType}</span>}
            </div>
            <ul role="list" className="mb-8 space-y-2 text-left">
                {children}
            </ul>
            <button onClick={onClick} className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Lihat contoh undangan</button>
        </div>
    )
}

export const FeaturePriceList = ({type, children}) => {
    return (
        <li className="flex items-center space-x-3">
            {type === "option" && <FaCloud className='inline text-zinc-200'/>}
            {type === "yes" && <FaCheck className='inline text-green-400'/>}
            {type === "no" && <FaXmark className='inline text-red-400'/>}
            <span className='text-sm'>{children}</span>
        </li>
    )
}

export default CardPriceList