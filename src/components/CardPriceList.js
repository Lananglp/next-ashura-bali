import React from 'react'
import { FaCheck, FaCloud, FaXmark } from 'react-icons/fa6'

function CardPriceList({children}) {
  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">{children}</div>
    </div>
  )
}

export const ItemPriceList = ({title, description, price, priceType, priceCategori, onClick, children}) => {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 border border-gray-100 dark:border-pink-900 xl:p-8 dark:text-white bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50">
            <h3 className={`mb-4 text-2xl font-semibold 
                ${priceCategori === "Biasa" ? 'text-zinc-200 dark:text-white' : 'text-zinc-200 dark:text-white'}
                ${priceCategori === "Premium" ? 'text-blue-600 dark:text-blue-300' : 'text-zinc-200 dark:text-white'}
                ${priceCategori === "Master" ? 'text-orange-600 dark:text-orange-400' : 'text-zinc-200 dark:text-white'}
            `}>
                {title}
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-300">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-3xl text-zinc-200 dark:text-white">Rp {price}</span>
                <span className="text-gray-500 dark:text-gray-300">/{priceType}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {children}
            </ul>
            <button onClick={onClick} className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Beli Sekarang</button>
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