
import Link from 'next/link'
import React from 'react'

// import { ProductProps } from '../typing'


function Product({imgURL , name , price ,showPrice ,showName,slug} : any) {
  return (
    <div className=' bg-white justify-center flex flex-col p-2'>
      <Link href={''}><img src={imgURL} alt={name} /></Link>
        {showName && <p className=' text-xl font-bold px-4 border-t'>{name}</p>}
        {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>Price : $ {price}</p>}
        <Link  href={`/product/${slug}`}>
        <span className=" flex justify-center text-center">
          <div className="p-2 w-[180px] items-center text-sm 
           group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-500">
            Add to cart
          </div>
        </span>
        </Link>
       
    </div>
  )
}


export default Product
